import { useState, useEffect, useRef, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  FaArrowLeft,
  FaClock,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import GradientBackground from "../components/GradientBackground";
import ArchitectureDiagram from "../components/ArchitectureDiagram";
import InterleaveDemo from "../components/InterleaveDemo";
import SEO from "../components/SEO";

/* ────── Reading Progress Bar ────── */
const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="reading-progress-bar">
      <div
        className="reading-progress-fill"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

/* ────── Table of Contents ────── */
const TableOfContents = ({ headings, activeId }) => {
  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav className="blog-toc">
      <span className="blog-toc-title">In this article</span>
      <ul className="blog-toc-list">
        {headings.map((h) => (
          <li key={h.id}>
            <button
              onClick={() => handleClick(h.id)}
              className={`blog-toc-link ${activeId === h.id ? "active" : ""}`}
            >
              {h.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

/* ────── Main BlogPost Component ────── */
const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeHeading, setActiveHeading] = useState("");

  const headerRef = useRef(null);
  const coverRef = useRef(null);
  const contentRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const post = blogPosts.find((p) => p.slug === slug);

  // Extract headings for ToC
  const headings = useMemo(() => {
    if (!post) return [];
    return post.sections
      .filter((s) => s.type === "heading")
      .map((s) => ({
        id: s.content
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, ""),
        text: s.content,
      }));
  }, [post]);

  // Track active heading with IntersectionObserver
  useEffect(() => {
    if (!headings.length) return;

    const observers = [];
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveHeading(h.id);
          }
        },
        { rootMargin: "-100px 0px -60% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [headings, slug]);

  // GSAP animations
  useGSAP(() => {
    if (!post) return;

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    if (headerRef.current) {
      tl.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 }
      );
    }

    if (coverRef.current) {
      tl.fromTo(
        coverRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.3"
      );
    }

    if (contentRef.current) {
      tl.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      );
    }

    if (footerRef.current) {
      tl.fromTo(
        footerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        "-=0.2"
      );
    }
  }, [slug]);

  if (!post) {
    return (
      <>
        <GradientBackground />
        <section className="px-6 py-16 xl:px-24 relative z-1">
          <div className="text-center mt-20">
            <h1 className="text-2xl font-bold text-white mb-4">
              Post Not Found
            </h1>
            <button
              onClick={() => navigate("/blog")}
              className="text-white-50 hover:text-white transition-colors"
            >
              Back to Blog
            </button>
          </div>
        </section>
      </>
    );
  }

  const renderSection = (section, index) => {
    switch (section.type) {
      case "text":
        return (
          <p
            key={index}
            className="text-white-50 text-base leading-relaxed mb-6"
          >
            {section.content}
          </p>
        );

      case "heading": {
        const id = section.content
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
        return (
          <h2
            key={index}
            id={id}
            className="text-xl md:text-2xl font-semibold text-white mt-10 mb-4 scroll-mt-28"
          >
            {section.content}
          </h2>
        );
      }

      case "image":
        return (
          <figure key={index} className="blog-content-image my-8">
            <div className="project-gallery">
              <div className="project-gallery-main">
                <img src={section.src} alt={section.alt} loading="lazy" />
              </div>
            </div>
            {section.caption && (
              <figcaption className="text-center text-white-50 text-xs mt-3">
                {section.caption}
              </figcaption>
            )}
          </figure>
        );

      case "list":
        return (
          <div key={index} className="space-y-3 mb-6">
            {section.items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="bento-bullet" />
                <p className="text-white-50 text-sm leading-relaxed flex-1">
                  {item}
                </p>
              </div>
            ))}
          </div>
        );

      case "code":
        return (
          <pre
            key={index}
            className="blog-code-block overflow-x-auto mb-6 p-4 rounded-lg text-sm"
          >
            <code>{section.content}</code>
          </pre>
        );

      case "architecture":
        return (
          <div key={index} className="my-8">
            <ArchitectureDiagram />
          </div>
        );

      case "interleave":
        return (
          <div key={index} className="my-8">
            <InterleaveDemo />
          </div>
        );

      case "stats":
        return (
          <div key={index} className="blog-stats-row my-10">
            {section.items.map((stat, idx) => (
              <div key={idx} className="blog-stat-card">
                <span className="blog-stat-value">{stat.value}</span>
                <span className="blog-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        );

      case "quote":
        return (
          <blockquote key={index} className="blog-pull-quote my-10">
            <p>{section.content}</p>
          </blockquote>
        );

      case "callout":
        return (
          <div key={index} className="blog-callout my-8">
            <p className="text-white-50 text-sm leading-relaxed">
              {section.content}
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        image={post.image}
        type="article"
        article={{ date: post.date, tags: post.tags }}
      />
      <ReadingProgress />
      <GradientBackground />
      <section className="px-6 py-16 xl:px-24 relative z-1">
        {/* Back button */}
        <button
          onClick={() => navigate("/blog")}
          className="flex items-center gap-2 text-white-50 hover:text-white transition-colors mb-8 cursor-pointer"
        >
          <FaArrowLeft className="text-sm" />
          <span className="text-sm font-medium">Back to Blog</span>
        </button>

        {/* Article Header */}
        <div ref={headerRef} className="blog-header-wrap mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="blog-category-pill">{post.category}</span>
            <span className="flex items-center gap-1 text-white-50 text-xs">
              <FaClock className="text-[10px]" />
              {post.readTime} min read
            </span>
            <span className="text-white-50 text-xs">
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl font-bold text-white mb-5 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, i) => (
              <span key={i} className="project-tech-pill text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Cover Image */}
        <div ref={coverRef} className="blog-header-wrap blog-cover-wrap mb-10">
          <div className="project-gallery">
            <div className="project-gallery-main">
              <img src={post.image} alt={post.title} loading="lazy" />
            </div>
          </div>
        </div>

        {/* Article Body + ToC layout */}
        <div className="blog-body-layout">
          {/* Article Content */}
          <article ref={contentRef} className="blog-article-main">
            {post.sections.map((section, index) =>
              renderSection(section, index)
            )}
          </article>

          {/* Sidebar ToC (desktop only) */}
          <aside className="blog-toc-sidebar">
            <TableOfContents
              headings={headings}
              activeId={activeHeading}
            />
          </aside>
        </div>

        {/* Footer Links */}
        <div
          ref={footerRef}
          className="blog-header-wrap mt-12 pt-8"
          style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}
        >
          <div className="flex flex-wrap gap-3">
            {post.github && (
              <a
                href={post.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-detail-cta project-detail-cta-secondary"
                style={{ width: "auto" }}
              >
                <FaGithub className="text-base" />
                View on GitHub
              </a>
            )}
            {post.devpost && (
              <a
                href={post.devpost}
                target="_blank"
                rel="noopener noreferrer"
                className="project-detail-cta project-detail-cta-secondary"
                style={{ width: "auto" }}
              >
                <FaExternalLinkAlt className="text-xs" />
                Devpost
              </a>
            )}
            {post.demo && (
              <a
                href={post.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-detail-cta project-detail-cta-primary"
                style={{ width: "auto" }}
              >
                <FaExternalLinkAlt className="text-xs" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
