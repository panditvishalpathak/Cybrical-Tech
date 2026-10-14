import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import "./Blog.css";

function Blog() {
  /* =========================
     STATES
  ========================= */

  const [posts, setPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* =========================
     CATEGORIES
  ========================= */

  const categories = [
    "All",
    "AI & GenAI",
    "Web Development",
    "SEO & Growth",
    "UI/UX",
    "Automation",
  ];

  /* =========================
     FETCH BLOGS FROM BACKEND
  ========================= */

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get(
          "http://localhost:5000/api/blog"
        );

        setPosts(response.data.data || []);
      } catch (err) {
        console.error("Blog fetch error:", err);

        setError(
          "Unable to load blogs. Please make sure the backend is running."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  /* =========================
     CATEGORY FILTER
  ========================= */

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") {
      return posts;
    }

    return posts.filter(
      (post) => post.category === activeCategory
    );
  }, [posts, activeCategory]);

  /* =========================
     DATE FORMAT
  ========================= */

  const formatDate = (date) => {
    if (!date) {
      return "";
    }

    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  /* =========================
     READ TIME
  ========================= */

  const getReadTime = (content) => {
    if (!content) {
      return "1 min read";
    }

    const words = content.trim().split(/\s+/).length;

    const minutes = Math.max(
      1,
      Math.ceil(words / 200)
    );

    return `${minutes} min read`;
  };

  /* =========================
     CARD NUMBER
  ========================= */

  const getCardNumber = (index) => {
    return String(index + 1).padStart(2, "0");
  };

  /* =========================
     CARD GRADIENT
  ========================= */

  const getGradient = (category) => {
    switch (category) {
      case "AI & GenAI":
        return "purple";

      case "Web Development":
        return "cyan";

      case "SEO & Growth":
        return "pink";

      case "Automation":
        return "orange";

      case "UI/UX":
        return "blue";

      default:
        return "violet";
    }
  };

  /* =========================
     CATEGORY SYMBOL
  ========================= */

  const getCategorySymbol = (category) => {
    switch (category) {
      case "AI & GenAI":
        return "AI";

      case "Web Development":
        return "</>";

      case "SEO & Growth":
        return "↗";

      case "Automation":
        return "⚡";

      case "UI/UX":
        return "◈";

      default:
        return "RAG";
    }
  };

  /* =========================
     FEATURED BLOG
  ========================= */

  const featuredPost = posts.length > 0 ? posts[0] : null;

  return (
    <main className="blog-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="blog-hero">

        <div className="blog-hero-bg">
          <div className="blog-orb blog-orb-one"></div>
          <div className="blog-orb blog-orb-two"></div>
          <div className="blog-orb blog-orb-three"></div>
          <div className="blog-grid"></div>
        </div>

        <div className="blog-container blog-hero-content">

          <div className="blog-hero-copy">

            <div className="blog-badge">
              <span></span>
              CYBRICAL INSIGHTS
            </div>

            <h1>
              Ideas that
              <br />
              move
              <br />
              <span>digital forward.</span>
            </h1>

            <p>
              Insights, strategies and practical ideas around
              technology, AI, design, SEO and digital growth.
            </p>

          </div>

          <div className="blog-hero-visual">

            <div className="blog-orbit orbit-one"></div>
            <div className="blog-orbit orbit-two"></div>
            <div className="blog-orbit orbit-three"></div>

            <div className="blog-core">

              <div className="blog-core-inner">
                <span>✦</span>
                <small>THINK</small>
                <strong>CREATE</strong>
              </div>

            </div>

            <div className="blog-floating blog-floating-one">

              <span>AI</span>

              <div>
                <small>IDEAS</small>
                <strong>INTELLIGENCE</strong>
              </div>

            </div>

            <div className="blog-floating blog-floating-two">

              <span>↗</span>

              <div>
                <small>GROW</small>
                <strong>BETTER</strong>
              </div>

            </div>

            <i className="blog-dot blog-dot-one"></i>
            <i className="blog-dot blog-dot-two"></i>
            <i className="blog-dot blog-dot-three"></i>

          </div>

        </div>

        <div className="blog-scroll">
          <span>SCROLL TO EXPLORE</span>
          <b>↓</b>
        </div>

      </section>


      {/* =========================
          FEATURED
      ========================= */}

      <section className="blog-featured">

        <div className="blog-container">

          <div className="blog-section-label">
            <span>01</span>
            FEATURED INSIGHT
          </div>

          {loading ? (

            <div className="blog-loading">
              Loading latest insight...
            </div>

          ) : error ? (

            <div className="blog-error">
              {error}
            </div>

          ) : featuredPost ? (

            <article className="featured-post">

              <div className="featured-visual">

                <div className="featured-lines"></div>

                <div className="featured-circle">
                  <span>
                    {getCategorySymbol(
                      featuredPost.category
                    )}
                  </span>
                </div>

                <div className="featured-card">

                  <small>
                    CYBRICAL / INSIGHT
                  </small>

                  <strong>
                    {featuredPost.category ===
                    "AI & GenAI"
                      ? "GEN"
                      : "TECH"}
                  </strong>

                  <span>
                    {featuredPost.category || "INSIGHT"}
                  </span>

                </div>

                <div className="featured-index">
                  01
                </div>

              </div>

              <div className="featured-content">

                <div className="post-meta">

                  <span>
                    {featuredPost.category ||
                      "Technology"}
                  </span>

                  <i>•</i>

                  <span>
                    {getReadTime(
                      featuredPost.content
                    ).toUpperCase()}
                  </span>

                </div>

                <h2>
                  {featuredPost.title}
                </h2>

                <p>
                  {featuredPost.excerpt ||
                    featuredPost.content}
                </p>

                <Link
                  to={`/blog/${featuredPost._id}`}
                  className="read-featured"
                >
                  Read the insight
                  <span>↗</span>
                </Link>

              </div>

            </article>

          ) : (

            <div className="blog-empty">
              No blogs available yet.
            </div>

          )}

        </div>

      </section>


      {/* =========================
          BLOG LIST
      ========================= */}

      <section className="blog-list-section">

        <div className="blog-container">

          <div className="blog-list-top">

            <div className="blog-section-label">
              <span>02</span>
              LATEST ARTICLES
            </div>

            <div className="blog-categories">

              {categories.map((category) => (

                <button
                  key={category}
                  className={
                    activeCategory === category
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setActiveCategory(category)
                  }
                >
                  {category}
                </button>

              ))}

            </div>

          </div>


          {/* =========================
              LOADING
          ========================= */}

          {loading && (

            <div className="blog-loading">
              Loading blogs...
            </div>

          )}


          {/* =========================
              ERROR
          ========================= */}

          {!loading && error && (

            <div className="blog-error">
              {error}
            </div>

          )}


          {/* =========================
              BLOG GRID
          ========================= */}

          {!loading &&
            !error &&
            filteredPosts.length > 0 && (

              <div className="blog-grid-list">

                {filteredPosts.map(
                  (post, index) => (

                    <article
                      className={`blog-card blog-${getGradient(
                        post.category
                      )}`}
                      key={post._id}
                    >

                      {/* CARD VISUAL */}

                      <div className="blog-card-visual">

                        <div className="card-grid"></div>

                        <div className="card-glow"></div>

                        <div className="card-symbol">

                          {getCategorySymbol(
                            post.category
                          )}

                        </div>

                        <span className="card-number">

                          {getCardNumber(index)}

                        </span>

                      </div>


                      {/* CARD CONTENT */}

                      <div className="blog-card-content">

                        <div className="post-meta">

                          <span>
                            {post.category ||
                              "Technology"}
                          </span>

                          <i>•</i>

                          <span>
                            {getReadTime(
                              post.content
                            )}
                          </span>

                        </div>

                        <h3>
                          {post.title}
                        </h3>

                        <p>
                          {post.excerpt ||
                            post.content?.substring(
                              0,
                              160
                            )}
                          {post.content &&
                          post.content.length > 160
                            ? "..."
                            : ""}
                        </p>

                        <div className="blog-card-bottom">

                          <span>
                            {formatDate(
                              post.createdAt
                            )}
                          </span>

                          <Link
                            to={`/blog/${post._id}`}
                          >
                            Read article
                            <b>↗</b>
                          </Link>

                        </div>

                      </div>

                    </article>

                  )
                )}

              </div>

            )}


          {/* =========================
              EMPTY
          ========================= */}

          {!loading &&
            !error &&
            filteredPosts.length === 0 && (

              <div className="blog-empty">

                {posts.length === 0
                  ? "No blogs available yet."
                  : "No blogs found in this category."}

              </div>

            )}

        </div>

      </section>


      {/* =========================
          NEWSLETTER
      ========================= */}

      <section className="blog-newsletter">

        <div className="newsletter-orb newsletter-orb-one"></div>
        <div className="newsletter-orb newsletter-orb-two"></div>

        <div className="blog-container newsletter-content">

          <div className="newsletter-label">
            <span>03</span>
            STAY CURIOUS
          </div>

          <h2>
            Ideas worth
            <br />
            <span>knowing about.</span>
          </h2>

          <p>
            Get practical insights about AI, technology,
            design and digital growth directly in your inbox.
          </p>

          <form
            className="newsletter-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks for subscribing!");
            }}
          >

            <input
              type="email"
              placeholder="Enter your email address"
              required
            />

            <button type="submit">
              Subscribe
              <span>↗</span>
            </button>

          </form>

          <small>
            No spam. Just useful ideas.
          </small>

        </div>

      </section>


      {/* =========================
          FINAL CTA
      ========================= */}

      <section className="blog-final">

        <div className="blog-container blog-final-content">

          <span>HAVE AN IDEA?</span>

          <h2>
            Let's turn
            <br />
            <strong>ideas into impact.</strong>
          </h2>

          <p>
            Have a project or digital challenge?
            Let's talk about it.
          </p>

          <Link
            to="/contact"
            className="blog-final-button"
          >
            Start a conversation
            <span>↗</span>
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Blog;