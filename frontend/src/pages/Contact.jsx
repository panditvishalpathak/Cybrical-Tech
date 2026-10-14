import { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact form:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const contactDetails = [
    {
      number: "01",
      label: "EMAIL",
      value: "cybricaltech@gmail.com",
      href: "mailto:cybricaltech@gmail.com",
    },
    {
      number: "02",
      label: "PHONE",
      value: "+91 836 859 7373",
      href: "tel:+918368597373",
    },
    {
      number: "03",
      label: "LOCATION",
      value: "Sector 63, Noida, India",
      href: "/location",
    },
  ];

  const services = [
    "Web Development",
    "SEO & Digital Growth",
    "UI/UX & Branding",
    "AI & Automation",
    "Social Media Marketing",
    "Performance Marketing",
  ];

  return (
    <main className="contact-page">

      {/* HERO */}

      <section className="contact-hero">

        <div className="contact-hero-bg">
          <div className="contact-orb contact-orb-one"></div>
          <div className="contact-orb contact-orb-two"></div>
          <div className="contact-orb contact-orb-three"></div>
          <div className="contact-grid"></div>
        </div>

        <div className="contact-container contact-hero-content">

          <div className="contact-hero-copy">

            <div className="contact-badge">
              <span></span>
              LET'S TALK
            </div>

            <h1>
              Let's build
              <br />
              something
              <br />
              <span>meaningful.</span>
            </h1>

            <p>
              Have a project, idea or digital challenge?
              Tell us about it and let's explore what
              we can create together.
            </p>

          </div>

          <div className="contact-hero-visual">

            <div className="contact-ring ring-one"></div>
            <div className="contact-ring ring-two"></div>
            <div className="contact-ring ring-three"></div>

            <div className="contact-core">

              <div className="contact-core-glow"></div>

              <div className="contact-core-content">
                <span>↗</span>
                <small>START</small>
                <strong>A CONVERSATION</strong>
              </div>

            </div>

            <div className="contact-floating contact-float-one">
              <span>01</span>
              <div>
                <small>IDEA</small>
                <strong>SHARE IT</strong>
              </div>
            </div>

            <div className="contact-floating contact-float-two">
              <span>✦</span>
              <div>
                <small>LET'S</small>
                <strong>CREATE</strong>
              </div>
            </div>

            <i className="contact-dot contact-dot-one"></i>
            <i className="contact-dot contact-dot-two"></i>
            <i className="contact-dot contact-dot-three"></i>

          </div>

        </div>

        <div className="contact-scroll">
          <span>SCROLL TO CONNECT</span>
          <b>↓</b>
        </div>

      </section>

      {/* CONTACT DETAILS */}

      <section className="contact-details">

        <div className="contact-container">

          <div className="contact-section-label">
            <span>01</span>
            GET IN TOUCH
          </div>

          <div className="contact-details-grid">

            <div className="contact-details-heading">
              <h2>
                Let's start
                <br />
                with a
                <span>conversation.</span>
              </h2>

              <p>
                No complicated process. Just tell us what
                you're thinking, what you're building or
                where you're stuck.
              </p>
            </div>

            <div className="contact-info-list">

              {contactDetails.map((item) => (
                <a
                  href={item.href}
                  className="contact-info-item"
                  key={item.number}
                >

                  <span className="contact-info-number">
                    {item.number}
                  </span>

                  <div>
                    <small>{item.label}</small>
                    <strong>{item.value}</strong>
                  </div>

                  <b>↗</b>

                </a>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* FORM */}

      <section className="contact-form-section">

        <div className="contact-container">

          <div className="contact-section-label">
            <span>02</span>
            TELL US ABOUT IT
          </div>

          <div className="contact-form-layout">

            <div className="contact-form-intro">

              <h2>
                Have a
                <br />
                <span>project?</span>
              </h2>

              <p>
                Fill out the form and give us a little
                context about what you're looking to build.
              </p>

              <div className="contact-form-note">
                <span>✦</span>
                We usually respond within 1 business day.
              </div>

            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-row">

                <div className="form-group">
                  <label>YOUR NAME</label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>EMAIL ADDRESS</label>

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>

              <div className="form-row">

                <div className="form-group">
                  <label>COMPANY</label>

                  <input
                    type="text"
                    name="company"
                    placeholder="Company name"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>WHAT DO YOU NEED?</label>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option
                        value={service}
                        key={service}
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              <div className="form-group form-message">

                <label>YOUR MESSAGE</label>

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

              </div>

              <button
                type="submit"
                className="contact-submit"
              >
                <span>Send Message</span>
                <b>↗</b>
              </button>

              {submitted && (
                <div className="form-success">
                  <span>✓</span>
                  Thanks! Your message has been received.
                </div>
              )}

            </form>

          </div>

        </div>

      </section>

      {/* PROCESS */}

      <section className="contact-process">

        <div className="contact-container">

          <div className="contact-section-label">
            <span>03</span>
            WHAT HAPPENS NEXT
          </div>

          <div className="contact-process-heading">

            <h2>
              Simple from
              <br />
              start to
              <span>finish.</span>
            </h2>

            <p>
              We keep the first conversation simple.
              No unnecessary presentations or complicated
              processes.
            </p>

          </div>

          <div className="contact-process-grid">

            <div className="contact-process-item">
              <span>01</span>
              <h3>We Talk</h3>
              <p>
                We learn about your idea, business,
                audience and goals.
              </p>
            </div>

            <div className="contact-process-item">
              <span>02</span>
              <h3>We Plan</h3>
              <p>
                We identify the right approach,
                technology and next steps.
              </p>
            </div>

            <div className="contact-process-item">
              <span>03</span>
              <h3>We Build</h3>
              <p>
                Once aligned, we turn the plan into
                a real digital experience.
              </p>
            </div>

            <div className="contact-process-item">
              <span>04</span>
              <h3>We Grow</h3>
              <p>
                We continue improving the product
                as your business evolves.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}

      <section className="contact-final">

        <div className="contact-final-orb final-orb-one"></div>
        <div className="contact-final-orb final-orb-two"></div>

        <div className="contact-container contact-final-content">

          <span>READY WHEN YOU ARE</span>

          <h2>
            Your next
            <br />
            <strong>big idea starts here.</strong>
          </h2>

          <p>
            Let's turn your vision into a digital
            experience people remember.
          </p>

          <a
            href="mailto:cybricaltech@gmail.com"
            className="contact-final-button"
          >
            cybricaltech@gmail.com
            <span>↗</span>
          </a>

        </div>

      </section>

    </main>
  );
}

export default Contact;