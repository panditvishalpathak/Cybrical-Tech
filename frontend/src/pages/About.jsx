import { Link } from "react-router-dom";
import "./About.css";

function About() {
  const values = [
    {
      number: "01",
      icon: "✦",
      title: "Think Different",
      text: "We challenge conventional ideas and look for smarter ways to solve digital problems.",
      color: "purple",
    },
    {
      number: "02",
      icon: "◈",
      title: "Build Better",
      text: "We combine clean design, modern technology and strong strategy to build useful products.",
      color: "cyan",
    },
    {
      number: "03",
      icon: "∞",
      title: "Keep Growing",
      text: "Digital products should evolve continuously. We focus on long-term growth and improvement.",
      color: "pink",
    },
  ];

  const capabilities = [
    "Web Development",
    "AI & Automation",
    "SEO & Digital Growth",
    "UI/UX Design",
    "Brand Strategy",
    "Digital Marketing",
  ];

  const stats = [
    {
      number: "35+",
      label: "Team Members & Engineers",
    },
    {
      number: "1000+",
      label: "Projects Delivered",
    },
    {
      number: "950+",
      label: "Happy Clients",
    },
    {
      number: "24/7",
      label: "Creative Energy",
    },
  ];

  return (
    <main className="about-page">

      {/* =================================================
          HERO
      ================================================= */}

      <section className="about-hero">

        <div className="about-hero-bg">
          <div className="about-orb about-orb-one"></div>
          <div className="about-orb about-orb-two"></div>
          <div className="about-orb about-orb-three"></div>
          <div className="about-grid"></div>
        </div>

        <div className="about-container about-hero-content">

          <div className="about-hero-copy">

            <div className="about-badge">
              <span></span>
              ABOUT CYBRICAL TECH
            </div>

            <h1>
              We create
              <br />
              <span className="about-gradient">
                digital
              </span>
              <br />
              possibilities.
            </h1>

            <p>
              We are a digital technology agency combining
              creativity, strategy and technology to help
              ambitious businesses build their digital future.
            </p>

            <div className="about-hero-actions">

              <Link
                to="/contact"
                className="about-primary-btn"
              >
                Work With Us
                <span>↗</span>
              </Link>

              <a
                href="#story"
                className="about-outline-btn"
              >
                Our Story
              </a>

            </div>

          </div>


          {/* AI Visual */}

          <div className="about-hero-visual">

            <div className="about-ring ring-one"></div>
            <div className="about-ring ring-two"></div>
            <div className="about-ring ring-three"></div>

            <div className="about-core">

              <div className="about-core-glow"></div>

              <div className="about-core-content">
                <span>C</span>
                <small>CYBRICAL</small>
                <strong>TECH</strong>
              </div>

            </div>


            <div className="about-floating about-float-one">

              <div className="float-symbol">
                ✦
              </div>

              <div>
                <small>CREATIVE</small>
                <strong>IDEAS</strong>
              </div>

            </div>


            <div className="about-floating about-float-two">

              <div className="float-symbol">
                AI
              </div>

              <div>
                <small>FUTURE</small>
                <strong>TECHNOLOGY</strong>
              </div>

            </div>


            <span className="about-dot about-dot-one"></span>
            <span className="about-dot about-dot-two"></span>
            <span className="about-dot about-dot-three"></span>

          </div>

        </div>


        <div className="about-scroll">
          <span>SCROLL TO DISCOVER</span>
          <b>↓</b>
        </div>

      </section>


      {/* =================================================
          INTRO / STORY
      ================================================= */}

      <section
        className="about-story"
        id="story"
      >

        <div className="about-container">

          <div className="about-section-label">
            <span>01</span>
            OUR STORY
          </div>


          <div className="about-story-grid">

            <div className="about-story-heading">

              <h2>
                Technology
                <br />
                with a
                <span>
                  purpose.
                </span>
              </h2>

            </div>


            <div className="about-story-content">

              <p className="large-text">
                Cybrical Tech was built around a simple
                idea — digital technology should make
                businesses better.
              </p>

              <p>
                From websites and digital products to AI
                automation, SEO and growth strategies, we
                bring different digital capabilities together
                to solve real business problems.
              </p>

              <p>
                Our approach combines strategic thinking,
                modern technology and creative execution.
                The result is digital work designed not only
                to look good, but to create meaningful value.
              </p>

              <Link
                to="/services"
                className="about-text-link"
              >
                Explore our capabilities
                <span>↗</span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          STATS
      ================================================= */}

      <section className="about-stats">

        <div className="about-container about-stats-grid">

          {stats.map((stat, index) => (
            <div
              className="about-stat"
              key={index}
            >
              <strong>
                {stat.number}
              </strong>

              <span>
                {stat.label}
              </span>
            </div>
          ))}

        </div>

      </section>


      {/* =================================================
          MISSION / VISION
      ================================================= */}

      <section className="about-mission">

        <div className="about-container">

          <div className="about-section-label">
            <span>02</span>
            WHAT DRIVES US
          </div>


          <div className="mission-grid">

            <div className="mission-card mission-main">

              <div className="mission-icon">
                ✦
              </div>

              <span>OUR MISSION</span>

              <h2>
                Make technology
                <br />
                <em>
                  useful.
                </em>
              </h2>

              <p>
                We help businesses use technology,
                design and digital strategy to create
                better experiences and stronger
                opportunities.
              </p>

            </div>


            <div className="mission-card mission-secondary">

              <div className="mission-icon">
                ◈
              </div>

              <span>OUR VISION</span>

              <h3>
                A world where
                <br />
                every idea can
                <br />
                <strong>
                  become digital.
                </strong>
              </h3>

              <p>
                We want to make powerful digital
                technology more accessible to
                ambitious businesses and creators.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          VALUES
      ================================================= */}

      <section className="about-values">

        <div className="about-container">

          <div className="about-values-heading">

            <div className="about-section-label">
              <span>03</span>
              OUR VALUES
            </div>

            <h2>
              What we
              <br />
              <span>believe.</span>
            </h2>

          </div>


          <div className="values-grid">

            {values.map((value, index) => (

              <div
                className={`value-card ${value.color}`}
                key={index}
              >

                <div className="value-top">

                  <span>
                    {value.number}
                  </span>

                  <div className="value-icon">
                    {value.icon}
                  </div>

                </div>

                <div className="value-bottom">

                  <h3>
                    {value.title}
                  </h3>

                  <p>
                    {value.text}
                  </p>

                </div>

                <div className="value-arrow">
                  ↗
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =================================================
          CAPABILITIES
      ================================================= */}

      <section className="about-capabilities">

        <div className="about-container">

          <div className="about-section-label">
            <span>04</span>
            OUR CAPABILITIES
          </div>


          <div className="capabilities-grid">

            <div className="capabilities-heading">

              <h2>
                One team.
                <br />
                <span>
                  Multiple possibilities.
                </span>
              </h2>

              <p>
                From the first idea to the final product,
                we bring the right digital capabilities
                together under one roof.
              </p>

              <Link
                to="/services"
                className="about-primary-btn"
              >
                Explore Services
                <span>↗</span>
              </Link>

            </div>


            <div className="capabilities-list">

              {capabilities.map(
                (capability, index) => (

                  <div
                    className="capability-item"
                    key={index}
                  >

                    <span>
                      0{index + 1}
                    </span>

                    <strong>
                      {capability}
                    </strong>

                    <b>
                      ↗
                    </b>

                  </div>

                )
              )}

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          CTA
      ================================================= */}

      <section className="about-cta">

        <div className="about-cta-orb cta-orb-one"></div>
        <div className="about-cta-orb cta-orb-two"></div>

        <div className="about-container about-cta-content">

          <span>
            READY TO BUILD?
          </span>

          <h2>
            Let's turn your
            <br />
            <strong>
              idea into reality.
            </strong>
          </h2>

          <p>
            Tell us what you're building and let's
            create something meaningful together.
          </p>

          <Link
            to="/contact"
            className="about-cta-button"
          >
            Start a Conversation
            <span>↗</span>
          </Link>

        </div>

      </section>

    </main>
  );
}

export default About;