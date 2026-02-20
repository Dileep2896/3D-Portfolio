import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { blogPosts } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowLeft, FaArrowRight, FaClock } from "react-icons/fa";
import GradientBackground from "../components/GradientBackground";
import SEO from "../components/SEO";

gsap.registerPlugin(ScrollTrigger);

const BlogCard = ({ post, onClick }) => {
  const glowRef = useRef(null);

  const handleMouseMove = (e) => {
    const glow = glowRef.current;
    if (!glow) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    glow.style.opacity = "1";
    glow.style.background = `radial-gradient(circle at ${px}px ${py}px, rgba(255,255,255,0.05) 0%, transparent 60%)`;
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
  };

  const handleMouseLeave = (e) => {
    const glow = glowRef.current;
    if (!glow) return;
    glow.style.opacity = "0";
    e.currentTarget.style.borderColor = "";
  };

  return (
    <div
      className="blog-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(post.slug)}
    >
      <div ref={glowRef} className="tilt-glow-overlay" />

      {/* Cover Image */}
      <div className="blog-card-image">
        <img src={post.image} alt={post.title} loading="lazy" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-5">
        <span className="blog-category-pill">{post.category}</span>

        <h3 className="text-lg font-semibold text-white leading-tight mt-3 mb-2">
          {post.title}
        </h3>

        <p className="text-white-50 text-sm leading-relaxed mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-white-50 text-xs">
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <FaClock className="text-[10px]" />
              {post.readTime} min read
            </span>
          </div>

          <span className="flex items-center gap-1 text-white-50 text-xs font-medium group-hover:text-white transition-colors">
            Read More <FaArrowRight className="text-[10px]" />
          </span>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  const navigate = useNavigate();
  const headingRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2 }
    );

    gsap.from(".blog-card", {
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".blog-grid",
        start: "top 85%",
      },
    });
  }, []);

  const handleCardClick = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <>
      <SEO
        title="Blog"
        description="Technical blog by Dileep Kumar Sharma covering AI, hackathons, full-stack development, and building real products with modern technology."
        path="/blog"
      />
      <GradientBackground />
      <section className="px-6 py-16 xl:px-24 relative z-1">
        <div ref={headingRef} className="flex items-center gap-4 mb-10">
          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
          >
            <FaArrowLeft className="text-white-50 text-sm" />
          </button>
          <h1 className="text-3xl font-bold text-white-50">BLOG</h1>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} onClick={handleCardClick} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
