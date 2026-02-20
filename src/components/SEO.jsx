import { Helmet } from "react-helmet-async";

const SITE_URL = "https://dileepkumarsharma.com";
const DEFAULT_TITLE = "Dileep Kumar Sharma — Full-Stack & Mobile Engineer";
const DEFAULT_DESC =
  "Full-Stack & Mobile Engineer. MS CS @ RIT. Building production-ready web and mobile applications with React, Flutter, Node.js, and AWS.";

const SEO = ({
  title,
  description,
  path = "",
  image,
  type = "website",
  article,
  noIndex = false,
}) => {
  const pageTitle = title ? `${title} | Dileep Kumar Sharma` : DEFAULT_TITLE;
  const pageDesc = description || DEFAULT_DESC;
  const canonical = `${SITE_URL}${path}`;
  const ogImage = image
    ? image.startsWith("http")
      ? image
      : `${SITE_URL}${image}`
    : `${SITE_URL}/logo.svg`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <link rel="canonical" href={canonical} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Dileep Kumar Sharma" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      <meta name="twitter:image" content={ogImage} />

      {/* Article-specific meta */}
      {article && (
        <>
          <meta property="article:published_time" content={article.date} />
          {article.tags?.map((tag) => (
            <meta property="article:tag" content={tag} key={tag} />
          ))}
        </>
      )}

      {/* JSON-LD structured data */}
      {article && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            description: pageDesc,
            image: ogImage,
            datePublished: article.date,
            author: {
              "@type": "Person",
              name: "Dileep Kumar Sharma",
              url: SITE_URL,
            },
            publisher: {
              "@type": "Person",
              name: "Dileep Kumar Sharma",
              url: SITE_URL,
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": canonical,
            },
            keywords: article.tags?.join(", "),
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
