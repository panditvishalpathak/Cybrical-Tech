import { useState } from "react";
import "./Photos.css";

import team1 from "../assets/images/team/team-1.jpeg";
import team2 from "../assets/images/team/team-2.jpeg";
import team3 from "../assets/images/team/team-3.jpeg";

function Photos() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [
    {
      id: "01",
      image: team1,
      title: "Our Team at Work",
      description:
        "Collaboration, creativity and technology working together.",
    },
    {
      id: "02",
      image: team2,
      title: "Team Spirit",
      description:
        "Great ideas become stronger when we build them together.",
    },
    {
      id: "03",
      image: team3,
      title: "Our Team Family",
      description:
        "Celebrating people, teamwork and memorable moments.",
    },
  ];

  return (
    <main className="photos-page">

      {/* =========================
          HERO
      ========================= */}
      <section className="photos-hero">

        <div className="photos-hero-glow glow-one"></div>
        <div className="photos-hero-glow glow-two"></div>

        <div className="photos-hero-grid"></div>

        <div className="photos-container photos-hero-content">

          <div className="photos-eyebrow">
            <span className="eyebrow-dot"></span>
            CYBRICAL TECH
            <span className="eyebrow-line"></span>
            OUR TEAM
          </div>

          <h1>
            The people behind
            <br />
            <span>the technology.</span>
          </h1>

          <p>
            Meet the passionate people behind Cybrical Tech.
            We combine technology, creativity and teamwork
            to build meaningful digital experiences.
          </p>

          <div className="photos-hero-actions">
            <a
              href="#team-gallery"
              className="photos-primary-btn"
            >
              Explore Our Team
              <span>↓</span>
            </a>

            <div className="photos-mini-stat">
              <strong>03</strong>
              <span>Team Moments</span>
            </div>
          </div>

        </div>

      </section>


      {/* =========================
          GALLERY
      ========================= */}
      <section
        className="team-gallery"
        id="team-gallery"
      >

        <div className="photos-container">

          <div className="gallery-heading">

            <div>
              <span className="section-label">
                COMPANY GALLERY
              </span>

              <h2>
                Inside{" "}
                <span>Cybrical Tech.</span>
              </h2>
            </div>

            <p>
              A glimpse into our workplace, our people
              and the moments that make our team special.
            </p>

          </div>


          <div className="team-gallery-grid">

            {photos.map((photo, index) => (
              <article
                className={`team-card ${
                  index === 0 ? "team-card-featured" : ""
                }`}
                key={photo.id}
                onClick={() =>
                  setSelectedPhoto(photo)
                }
              >

                <div className="team-card-image">

                  <img
                    src={photo.image}
                    alt={photo.title}
                  />

                  <div className="team-card-gradient"></div>

                  <div className="team-card-number">
                    {photo.id}
                  </div>

                  <button
                    type="button"
                    className="team-view-button"
                    onClick={(event) => {
                      event.stopPropagation();
                      setSelectedPhoto(photo);
                    }}
                    aria-label={`View ${photo.title}`}
                  >
                    <span>↗</span>
                  </button>

                </div>


                <div className="team-card-content">

                  <div className="team-card-title-row">

                    <div>
                      <span className="team-card-label">
                        TEAM MOMENT
                      </span>

                      <h3>
                        {photo.title}
                      </h3>
                    </div>

                    <span className="team-card-arrow">
                      ↗
                    </span>

                  </div>

                  <p>
                    {photo.description}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =========================
          TEAM MESSAGE
      ========================= */}
      <section className="team-message">

        <div className="team-message-glow"></div>

        <div className="photos-container">

          <div className="team-message-box">

            <div className="message-icon">
              ✦
            </div>

            <div className="message-content">

              <span>
                MORE THAN JUST A TEAM
              </span>

              <h2>
                We build together.
                <br />
                <strong>We grow together.</strong>
              </h2>

              <p>
                At Cybrical Tech, every idea starts with people.
                Our team brings different skills, perspectives
                and experiences together to create technology
                that makes a difference.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          LIGHTBOX
      ========================= */}
      {selectedPhoto && (
        <div
          className="photo-lightbox"
          onClick={() => setSelectedPhoto(null)}
        >

          <button
            type="button"
            className="lightbox-close"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Close image"
          >
            ×
          </button>

          <div
            className="lightbox-content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
            />

            <div className="lightbox-caption">
              <span>
                {selectedPhoto.id} / CYBRICAL TECH
              </span>

              <h3>
                {selectedPhoto.title}
              </h3>
            </div>

          </div>

        </div>
      )}

    </main>
  );
}

export default Photos;