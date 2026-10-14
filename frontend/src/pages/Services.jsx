import { Link } from "react-router-dom";
import "./Services.css";

function Services() {
  const services = [
    {
      number: "01",
      icon: "⌘",
      title: "Web Development",
      short: "Digital experiences built to perform.",
      description:
        "We build modern, responsive and scalable websites and web applications designed around your business goals.",
      tags: ["React", "MERN", "Web Apps", "APIs"],
      color: "purple",
    },
    {
      number: "02",
      icon: "◎",
      title: "SEO & Digital Growth",
      short: "Turn search visibility into business growth.",
      description:
        "We create search strategies that improve visibility, attract qualified traffic and build sustainable organic growth.",
      tags: ["Technical SEO", "Content", "Analytics", "SEO"],
      color: "cyan",
    },
    {
      number: "03",
      icon: "✦",
      title: "UI/UX & Branding",
      short: "Design experiences people remember.",
      description:
        "From interfaces to brand systems, we create visual experiences that make businesses recognizable and easier to understand.",
      tags: ["UI/UX", "Branding", "Design Systems", "Prototyping"],
      color: "pink",
    },
    {
      number: "04",
      icon: "AI",
      title: "AI & Automation",
      short: "Make your business work smarter.",
      description:
        "We develop intelligent solutions using AI, automation and modern APIs to simplify repetitive business workflows.",
      tags: ["AI", "GenAI", "Automation", "LLMs"],
      color: "orange",
    },
    {
      number: "05",
      icon: "◉",
      title: "Social Media Marketing",
      short: "Build attention. Create connection.",
      description:
        "We develop social strategies and creative content that help brands communicate consistently with their audience.",
      tags: ["Strategy", "Content", "Campaigns", "Growth"],
      color: "blue",
    },
    {
      number: "06",
      icon: "↗",
      title: "Performance Marketing",
      short: "Campaigns focused on measurable results.",
      description:
        "We combine data, creative and targeted campaigns to help businesses reach the right audience and improve conversions.",
      tags: ["PPC", "Google Ads", "Meta Ads", "Analytics"],
      color: "violet",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discover",
      text: "We understand your business, audience, challenges and opportunities.",
    },
    {
      number: "02",
      title: "Strategy",
      text: "We define the right digital direction, technology and execution plan.",
    },
    {
      number: "03",
      title: "Build",
      text: "Our team turns the strategy into a polished and functional digital experience.",
    },
    {
      number: "04",
      title: "Grow",
      text: "We measure, optimize and continuously improve your digital presence.",
    },
  ];

  return (
    <main className="services-page">
      {/* HERO */}
      <section className="services-hero">
        <div className="services-hero-bg">
          <div className="services-orb services-orb-one"></div>
          <div className="services-orb services-orb-two"></div>
          <div className="services-orb services-orb-three"></div>
          <div className="services-grid"></div>
        </div>

        <div className="services-container services-hero-content">
          <div className="services-hero-copy">
            <div className="services-badge">
              <span></span>
              WHAT WE DO
            </div>

            <h1>
              Digital
              <br />
              solutions
              <br />
              <span>built to grow.</span>
            </h1>

            <p>
              Strategy, technology, design and growth —
              everything you need to turn your digital
              ambition into something real.
            </p>

            <div className="services-hero-actions">
              <Link to="/contact" className="services-primary-btn">
                Start a Project
                <span>↗</span>
              </Link>

              <a href="#services-list" className="services-outline-btn">
                Explore Services
              </a>
            </div>
          </div>

          <div className="services-hero-visual">
            <div className="services-visual-ring ring-one"></div>
            <div className="services-visual-ring ring-two"></div>
            <div className="services-visual-ring ring-three"></div>

            <div className="services-visual-core">
              <div className="core-glow"></div>

              <div className="core-content">
                <span>06</span>
                <strong>SERVICES</strong>
                <small>ONE DIGITAL TEAM</small>
              </div>
            </div>

            <div className="service-floating service-float-one">
              <span>AI</span>
              <div>
                <small>SMART</small>
                <strong>AUTOMATION</strong>
              </div>
            </div>

            <div className="service-floating service-float-two">
              <span>UX</span>
              <div>
                <small>CREATIVE</small>
                <strong>EXPERIENCE</strong>
              </div>
            </div>

            <i className="service-hero-dot dot-one"></i>
            <i className="service-hero-dot dot-two"></i>
            <i className="service-hero-dot dot-three"></i>
          </div>
        </div>

        <div className="services-scroll">
          <span>SCROLL TO EXPLORE</span>
          <b>↓</b>
        </div>
      </section>

      {/* INTRO */}
      <section className="services-intro">
        <div className="services-container">
          <div className="services-section-label">
            <span>01</span>
            OUR CAPABILITIES
          </div>

          <div className="services-intro-grid">
            <h2>
              Different
              <br />
              skills.
              <br />
              <span>One vision.</span>
            </h2>

            <div>
              <p className="services-intro-large">
                Great digital products are rarely built
                with one skill alone.
              </p>

              <p>
                That's why Cybrical Tech brings development,
                design, marketing, SEO and AI together.
                Each capability works independently —
                but together they create a complete digital
                growth system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-list" id="services-list">
        <div className="services-container">
          <div className="services-section-label">
            <span>02</span>
            WHAT WE OFFER
          </div>

          <div className="services-grid-list">
            {services.map((service) => (
              <article
                className={`service-card ${service.color}`}
                key={service.number}
              >
                <div className="service-card-top">
                  <span className="service-number">
                    {service.number}
                  </span>

                  <div className="service-icon">
                    {service.icon}
                  </div>
                </div>

                <div className="service-card-content">
                  <span className="service-category">
                    DIGITAL CAPABILITY
                  </span>

                  <h3>{service.title}</h3>

                  <h4>{service.short}</h4>

                  <p>{service.description}</p>

                  <div className="service-tags">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="service-card-bottom">
                  <span>EXPLORE SERVICE</span>
                  <b>↗</b>
                </div>

                <div className="service-card-glow"></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="services-process">
        <div className="services-container">
          <div className="services-section-label">
            <span>03</span>
            HOW WE WORK
          </div>

          <div className="process-heading">
            <h2>
              From idea
              <br />
              to <span>impact.</span>
            </h2>

            <p>
              A simple, collaborative process designed
              to turn ambitious ideas into meaningful
              digital experiences.
            </p>
          </div>

          <div className="process-grid">
            {process.map((item, index) => (
              <div className="process-item" key={item.number}>
                <div className="process-line">
                  <span>{item.number}</span>
                  {index !== process.length - 1 && <i></i>}
                </div>

                <div className="process-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

                <b className="process-arrow">↗</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="services-why">
        <div className="services-container">
          <div className="services-section-label">
            <span>04</span>
            WHY CYBRICAL
          </div>

          <div className="why-grid">
            <div className="why-heading">
              <h2>
                More than
                <br />
                <span>just execution.</span>
              </h2>
            </div>

            <div className="why-content">
              <div className="why-point">
                <span>01</span>
                <div>
                  <h3>Business First</h3>
                  <p>
                    We start with your business objective,
                    not just the technology.
                  </p>
                </div>
              </div>

              <div className="why-point">
                <span>02</span>
                <div>
                  <h3>Modern Technology</h3>
                  <p>
                    We use current tools and technologies
                    to create scalable digital solutions.
                  </p>
                </div>
              </div>

              <div className="why-point">
                <span>03</span>
                <div>
                  <h3>Long-Term Thinking</h3>
                  <p>
                    We design digital experiences that can
                    evolve with your business.
                  </p>
                </div>
              </div>

              <div className="why-point">
                <span>04</span>
                <div>
                  <h3>One Creative Team</h3>
                  <p>
                    Strategy, development, design and growth
                    work together instead of in separate silos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="services-cta-orb cta-orb-one"></div>
        <div className="services-cta-orb cta-orb-two"></div>

        <div className="services-container services-cta-content">
          <span>HAVE A PROJECT?</span>

          <h2>
            Let's build
            <br />
            <strong>something great.</strong>
          </h2>

          <p>
            Tell us what you have in mind and let's
            create the right digital solution together.
          </p>

          <Link to="/contact" className="services-cta-button">
            Start a Conversation
            <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Services;