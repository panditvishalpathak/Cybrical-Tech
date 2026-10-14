import { Link } from "react-router-dom";
import "./Home.css";
import logo from "../assets/logo/cybrical logo.jpg";

function Home() {
  const stats = [
    { number: "35+", label: "Expert Team Members", icon: "👥" },
    { number: "1000+", label: "Projects Delivered", icon: "↗" },
    { number: "950+", label: "Happy Clients", icon: "♧" },
    { number: "100%", label: "Client Satisfaction", icon: "✦" },
  ];

  const services = [
    {
      icon: "AI",
      title: "AI & GenAI",
      subtitle: "Smarter Solutions",
      className: "ai",
    },
    {
      icon: "</>",
      title: "Web Development",
      subtitle: "Fast & Scalable",
      className: "web",
    },
    {
      icon: "↗",
      title: "Digital Growth",
      subtitle: "More Visibility",
      className: "growth",
    },
    {
      icon: "◈",
      title: "UI/UX Design",
      subtitle: "Better Experiences",
      className: "design",
    },
  ];

  return (
    <main className="home-page">

      {/* ================= HERO ================= */}
      <section className="home-hero">

        <div className="hero-bg">
          <div className="hero-glow hero-glow-purple"></div>
          <div className="hero-glow hero-glow-blue"></div>
          <div className="hero-glow hero-glow-pink"></div>
          <div className="hero-grid"></div>
        </div>

        <div className="home-container hero-container">

          {/* LEFT CONTENT */}
          <div className="hero-content">

            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              <span>INNOVATION</span>
              <b>×</b>
              <span>TECHNOLOGY</span>
              <b>×</b>
              <span>GROWTH</span>
            </div>

            <h1>
              Turning Ideas Into
              <br />
              <span className="hero-gradient">
                Digital Solutions.
              </span>
            </h1>

            <p>
              Cybrical Tech is a modern technology company focused
              on building innovative web solutions, AI-powered tools
              and digital experiences that help businesses grow.
            </p>

            <div className="hero-buttons">

              <Link
                to="/works"
                className="hero-primary-btn"
              >
                Explore Our Work
                <span>↗</span>
              </Link>

              <Link
                to="/contact"
                className="hero-secondary-btn"
              >
                Get In Touch
              </Link>

            </div>

          </div>

          {/* RIGHT VISUAL */}
          <div className="hero-visual">

            <div className="visual-orbit orbit-1"></div>
            <div className="visual-orbit orbit-2"></div>
            <div className="visual-orbit orbit-3"></div>

            <div className="visual-platform"></div>

            {/* LAPTOP */}
            <div className="hero-laptop">

              <div className="laptop-screen">

                <div className="screen-top">
                  <span></span>
                  <span></span>
                  <span></span>

                  <small>CYBRICAL TECH</small>
                </div>

                <div className="screen-code">
                  <span className="code-line long"></span>
                  <span className="code-line medium"></span>
                  <span className="code-line short"></span>
                  <span className="code-line long"></span>
                  <span className="code-line tiny"></span>
                  <span className="code-line medium"></span>
                  <span className="code-line long"></span>
                </div>

                <img
                  src={logo}
                  alt="Cybrical Tech"
                  className="screen-logo"
                />

              </div>

              <div className="laptop-base">
                <div className="laptop-keyboard"></div>
                <div className="laptop-trackpad"></div>
              </div>

            </div>

            {/* FLOATING SERVICE CARDS */}
            {services.map((service) => (
              <div
                className={`hero-service-card ${service.className}`}
                key={service.title}
              >
                <div className="service-card-icon">
                  {service.icon}
                </div>

                <div>
                  <strong>{service.title}</strong>
                  <small>{service.subtitle}</small>
                </div>
              </div>
            ))}

            <div className="floating-ball ball-purple"></div>
            <div className="floating-ball ball-cyan"></div>

          </div>

        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="home-stats">

        <div className="home-container stats-container">

          {stats.map((stat) => (
            <div
              className="stat-card"
              key={stat.label}
            >
              <div className="stat-icon">
                {stat.icon}
              </div>

              <div>
                <strong>{stat.number}</strong>
                <span>{stat.label}</span>
              </div>
            </div>
          ))}

        </div>

      </section>

      {/* ================= SERVICES INTRO ================= */}
      <section className="home-services-intro">

        <div className="home-container">

          <div className="services-line">
            <span></span>
            OUR SERVICES
            <span></span>
          </div>

          <div className="services-heading">

            <h2>
              Everything you need
              <br />
              to build your
              <span> digital future.</span>
            </h2>

            <p>
              Strategy, design, development, AI and growth —
              everything works together to turn your ideas
              into meaningful digital experiences.
            </p>

          </div>

          <div className="services-preview">

            <div className="preview-card preview-purple">
              <span>01</span>

              <h3>Web Development</h3>

              <p>
                Modern websites and scalable digital products
                built for performance.
              </p>

              <Link to="/services">
                Explore ↗
              </Link>
            </div>

            <div className="preview-card preview-blue">
              <span>02</span>

              <h3>AI & Automation</h3>

              <p>
                Intelligent systems that automate workflows
                and improve productivity.
              </p>

              <Link to="/services">
                Explore ↗
              </Link>
            </div>

            <div className="preview-card preview-pink">
              <span>03</span>

              <h3>SEO & Growth</h3>

              <p>
                Data-driven strategies that improve visibility
                and organic growth.
              </p>

              <Link to="/services">
                Explore ↗
              </Link>
            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="home-cta">

        <div className="cta-glow"></div>

        <div className="home-container cta-content">

          <span>READY TO BUILD SOMETHING?</span>

          <h2>
            Your idea.
            <br />
            <strong>Our technology.</strong>
          </h2>

          <p>
            Let's turn your vision into a digital experience
            people remember.
          </p>

          <Link
            to="/contact"
            className="cta-button"
          >
            Start a Project
            <span>↗</span>
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Home;