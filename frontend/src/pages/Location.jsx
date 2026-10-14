import "./Location.css";

function Location() {
  return (
    <main className="location-page">

      {/* Hero */}
      <section className="location-hero">
        <div className="location-container">

          <span className="location-tag">
            📍 CYBRICAL TECH
          </span>

          <h1>
            Our <span>Location</span>
          </h1>

          <p>
            Connect with Cybrical Tech. We are available
            across multiple locations and serve clients globally.
          </p>

        </div>
      </section>


      {/* Main Location */}
      <section className="location-content">

        <div className="location-container">

          <div className="location-card">

            <div className="location-icon">
              📍
            </div>

            <h2>Cybrical Tech</h2>

            <p className="location-title">
              Noida Office
            </p>

            <p className="address">
              D 60, D Block 60,
              <br />
              Sector 63 Road, D Block,
              <br />
              Sector 63, Noida,
              <br />
              Hazratpur Wajidpur,
              <br />
              Uttar Pradesh - 201301
            </p>

            {/* Phone */}
            <a
              href="tel:+918368597373"
              className="contact-item"
            >
              📞 +91 836 859 7373
            </a>

            {/* Email */}
            <a
              href="mailto:cybricaltech@gmail.com"
              className="contact-item"
            >
              ✉ cybricaltech@gmail.com
            </a>

            {/* Google Maps */}
            <a
              href="https://maps.app.goo.gl/hgaYQLJYdZNQCuoD9"
              target="_blank"
              rel="noreferrer"
              className="direction-btn"
            >
              Get Directions ↗
            </a>

          </div>


          {/* Map */}
          <div className="map-box">

            <iframe
              title="Cybrical Tech Noida Location"
              src="https://www.google.com/maps?q=D%2060,%20D%20Block,%20Sector%2063,%20Noida,%20Uttar%20Pradesh%20201301&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>

        </div>

      </section>


      {/* Other Locations */}
      <section className="other-locations">

        <div className="location-container">

          <div className="locations-heading">
            <span>OUR PRESENCE</span>

            <h2>
              Our <strong>Locations</strong>
            </h2>

            <p>
              Explore our offices across different locations.
            </p>
          </div>


          <div className="locations-grid">

            {/* Noida */}
            <div className="office-card">
              <div className="office-flag">
                🇮🇳
              </div>

              <h3>Noida</h3>

              <p>
                D 60, D Block 60, Sector 63 Road,
                D Block, Sector 63, Noida,
                Uttar Pradesh 201301
              </p>

              <a
                href="https://maps.app.goo.gl/hgaYQLJYdZNQCuoD9"
                target="_blank"
                rel="noreferrer"
              >
                View on Map ↗
              </a>
            </div>


            {/* Bihar */}
            <div className="office-card">
              <div className="office-flag">
                🇮🇳
              </div>

              <h3>Bihar</h3>

              <p>
                6th Floor (F2), DS Business Park,
                Near Saguna More, Bailey Road,
                Patna 801503, Bihar
              </p>
            </div>


            {/* Dubai */}
            <div className="office-card">
              <div className="office-flag">
                🇦🇪
              </div>

              <h3>Dubai</h3>

              <p>
                1602/1603, Blue Bay Tower,
                Business Bay,
                Dubai - 23752
              </p>
            </div>


            {/* UK */}
            <div className="office-card">
              <div className="office-flag">
                🇬🇧
              </div>

              <h3>UK</h3>

              <p>
                55 Syon Park Close,
                West Bridgford,
                Nottingham NG2 7ER,
                England
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* Contact CTA */}
      <section className="location-cta">

        <div className="location-container">

          <span>LET'S CONNECT</span>

          <h2>
            Have a project
            <br />
            <strong>in mind?</strong>
          </h2>

          <p>
            Let's discuss your next digital project.
          </p>

          <a href="mailto:cybricaltech@gmail.com">
            Contact Us ↗
          </a>

        </div>

      </section>

    </main>
  );
}

export default Location;