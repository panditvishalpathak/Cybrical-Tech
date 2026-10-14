import { useNavigate } from "react-router-dom";
import { getApiUrl } from "../config/api";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="admin-dashboard">

      {/* BACKGROUND EFFECTS */}
      <div className="admin-glow admin-glow-one"></div>
      <div className="admin-glow admin-glow-two"></div>

      {/* =========================
          HEADER
      ========================= */}

      <header className="admin-header">

        <div>
          <div className="admin-brand">
            <div className="admin-logo">C</div>

            <div>
              <strong>CYBRICAL</strong>
              <span>TECH</span>
            </div>
          </div>

          <div className="admin-label">
            ADMIN CONTROL CENTER
          </div>

          <h1>
            Admin <span>Dashboard</span>
          </h1>

          <p className="admin-subtitle">
            Manage your website content and leads from one place.
          </p>
        </div>

        <button
          className="admin-logout"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/admin/login");
          }}
        >
          Logout
          <span>↗</span>
        </button>

      </header>

      {/* =========================
          DASHBOARD CARDS
      ========================= */}

      <section className="admin-cards">

        {/* BLOG */}

        <div className="admin-card">

          <div className="admin-card-top">

            <div className="admin-card-icon">
              📝
            </div>

            <span className="admin-card-number">
              01
            </span>

          </div>

          <div className="admin-card-content">

            <span className="admin-card-label">
              CONTENT
            </span>

            <h2>
              Blog Management
            </h2>

            <p>
              Create, edit, publish and delete your
              website blogs.
            </p>

            <button
              onClick={() => navigate("/admin/blogs")}
              className="admin-card-button"
            >
              Manage Blogs
              <span>→</span>
            </button>

          </div>

        </div>

        {/* CONTACT */}

        <div className="admin-card">

          <div className="admin-card-top">

            <div className="admin-card-icon">
              📩
            </div>

            <span className="admin-card-number">
              02
            </span>

          </div>

          <div className="admin-card-content">

            <span className="admin-card-label">
              LEADS
            </span>

            <h2>
              Contact Leads
            </h2>

            <p>
              View and manage contact form
              submissions from customers.
            </p>

            <button
              onClick={() => navigate("/admin/contacts")}
              className="admin-card-button"
            >
              Manage Contacts
              <span>→</span>
            </button>

          </div>

        </div>

        {/* WEBSITE */}

        <div className="admin-card">

          <div className="admin-card-top">

            <div className="admin-card-icon">
              🌐
            </div>

            <span className="admin-card-number">
              03
            </span>

          </div>

          <div className="admin-card-content">

            <span className="admin-card-label">
              PUBLIC SITE
            </span>

            <h2>
              Website
            </h2>

            <p>
              Open the public Cybrical Tech
              website and view your changes.
            </p>

            <button
              onClick={() => navigate("/")}
              className="admin-card-button"
            >
              View Website
              <span>↗</span>
            </button>

          </div>

        </div>

        {/* API */}

        <div className="admin-card">

          <div className="admin-card-top">

            <div className="admin-card-icon">
              ⚙️
            </div>

            <span className="admin-card-number">
              04
            </span>

          </div>

          <div className="admin-card-content">

            <span className="admin-card-label">
              SYSTEM
            </span>

            <h2>
              Backend API
            </h2>

            <p>
              Check the status of the Cybrical Tech
              backend API.
            </p>

            <button
              onClick={() =>
                window.open(
                  getApiUrl("/api/health"),
                  "_blank"
                )
              }
              className="admin-card-button"
            >
              Check API
              <span>↗</span>
            </button>

          </div>

        </div>

      </section>

      {/* =========================
          QUICK ACTIONS
      ========================= */}

      <section className="admin-quick">

        <div className="admin-section-heading">

          <span>
            QUICK ACTIONS
          </span>

          <h2>
            Manage Cybrical Tech
          </h2>

          <p>
            Quickly access the most-used admin tools.
          </p>

        </div>

        <div className="quick-actions">

          <button
            onClick={() => navigate("/admin/blogs")}
          >
            <span>＋</span>

            <div>
              <strong>
                Create New Blog
              </strong>

              <small>
                Publish new content
              </small>
            </div>

            <b>→</b>
          </button>

          <button
            onClick={() => navigate("/admin/blogs")}
          >
            <span>✎</span>

            <div>
              <strong>
                Edit Blogs
              </strong>

              <small>
                Manage existing content
              </small>
            </div>

            <b>→</b>
          </button>

          <button
            onClick={() => navigate("/admin/contacts")}
          >
            <span>📨</span>

            <div>
              <strong>
                View Leads
              </strong>

              <small>
                Check customer enquiries
              </small>
            </div>

            <b>→</b>
          </button>

          <button
            onClick={() => navigate("/")}
          >
            <span>↗</span>

            <div>
              <strong>
                Visit Website
              </strong>

              <small>
                Open public website
              </small>
            </div>

            <b>→</b>
          </button>

        </div>

      </section>

      {/* =========================
          SYSTEM STATUS
      ========================= */}

      <section className="admin-status">

        <div className="status-left">

          <span className="status-dot"></span>

          <div>
            <strong>
              Admin System
            </strong>

            <small>
              Dashboard is ready
            </small>
          </div>

        </div>

        <div className="status-right">
          CYBRICAL TECH
          <span>•</span>
          ADMIN PANEL
        </div>

      </section>

      {/* =========================
          FOOTER
      ========================= */}

      <footer className="admin-footer">

        <p>
          © {new Date().getFullYear()} Cybrical Tech.
          Admin Panel
        </p>

        <span>
          Built for digital growth.
        </span>

      </footer>

      {/* =========================
          CSS
      ========================= */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        .admin-dashboard {
          position: relative;
          min-height: 100vh;
          overflow: hidden;

          background:
            radial-gradient(
              circle at 10% 5%,
              rgba(34, 197, 94, 0.09),
              transparent 28%
            ),
            radial-gradient(
              circle at 90% 55%,
              rgba(16, 185, 129, 0.07),
              transparent 30%
            ),
            #030807;

          color: #ecfdf5;

          padding: 55px 30px 35px;

          font-family:
            Inter,
            Arial,
            sans-serif;
        }

        /* =========================
           GLOWS
        ========================= */

        .admin-glow {
          position: absolute;

          width: 400px;
          height: 400px;

          border-radius: 50%;

          filter: blur(100px);

          pointer-events: none;

          opacity: 0.25;
        }

        .admin-glow-one {
          top: -220px;
          right: -150px;

          background: #16a34a;
        }

        .admin-glow-two {
          bottom: -250px;
          left: -180px;

          background: #059669;
        }

        /* =========================
           HEADER
        ========================= */

        .admin-header {
          position: relative;
          z-index: 1;

          max-width: 1200px;

          margin: 0 auto 50px;

          display: flex;

          justify-content: space-between;

          align-items: flex-end;

          gap: 30px;
        }

        .admin-brand {
          display: inline-flex;

          align-items: center;

          gap: 10px;

          margin-bottom: 32px;
        }

        .admin-logo {
          width: 38px;
          height: 38px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 10px;

          background:
            linear-gradient(
              135deg,
              #86efac,
              #22c55e
            );

          color: #022c16;

          font-size: 19px;

          font-weight: 900;

          box-shadow:
            0 0 25px
            rgba(34, 197, 94, 0.22);
        }

        .admin-brand div:last-child {
          display: flex;

          flex-direction: column;

          line-height: 1;
        }

        .admin-brand strong {
          font-size: 15px;

          letter-spacing: 1px;
        }

        .admin-brand span {
          margin-top: 4px;

          color: #4ade80;

          font-size: 7px;

          font-weight: 800;

          letter-spacing: 3px;
        }

        .admin-label {
          margin-bottom: 12px;

          color: #4ade80;

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 2.5px;
        }

        .admin-header h1 {
          margin: 0;

          font-size:
            clamp(36px, 5vw, 58px);

          line-height: 1;

          letter-spacing: -2.5px;

          color: #f0fdf4;
        }

        .admin-header h1 span {
          color: #4ade80;
        }

        .admin-subtitle {
          margin: 17px 0 0;

          color: #82988b;

          font-size: 14px;

          line-height: 1.7;
        }

        /* =========================
           LOGOUT
        ========================= */

        .admin-logout {
          display: inline-flex;

          align-items: center;

          gap: 10px;

          padding: 12px 18px;

          border-radius: 999px;

          border:
            1px solid
            rgba(74, 222, 128, 0.2);

          background:
            rgba(34, 197, 94, 0.05);

          color: #bdeacb;

          cursor: pointer;

          font-size: 12px;

          font-weight: 700;

          transition: 0.3s;
        }

        .admin-logout span {
          color: #4ade80;

          font-size: 16px;
        }

        .admin-logout:hover {
          color: #fff;

          background:
            rgba(34, 197, 94, 0.12);

          border-color:
            rgba(74, 222, 128, 0.5);

          transform: translateY(-2px);
        }

        /* =========================
           CARDS
        ========================= */

        .admin-cards {
          position: relative;

          z-index: 1;

          max-width: 1200px;

          margin: 0 auto;

          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 20px;
        }

        .admin-card {
          position: relative;

          min-height: 270px;

          padding: 28px;

          border-radius: 20px;

          border:
            1px solid
            rgba(74, 222, 128, 0.1);

          background:
            linear-gradient(
              145deg,
              rgba(8, 24, 15, 0.95),
              rgba(3, 12, 7, 0.95)
            );

          overflow: hidden;

          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .admin-card::after {
          content: "";

          position: absolute;

          width: 180px;
          height: 180px;

          right: -100px;
          bottom: -100px;

          border-radius: 50%;

          background:
            rgba(34, 197, 94, 0.06);

          filter: blur(10px);

          transition: 0.3s;
        }

        .admin-card:hover {
          transform: translateY(-5px);

          border-color:
            rgba(74, 222, 128, 0.3);

          box-shadow:
            0 20px 50px
            rgba(0, 0, 0, 0.3),
            0 0 35px
            rgba(34, 197, 94, 0.05);
        }

        .admin-card:hover::after {
          background:
            rgba(34, 197, 94, 0.11);
        }

        .admin-card-top {
          display: flex;

          justify-content: space-between;

          align-items: flex-start;

          margin-bottom: 28px;
        }

        .admin-card-icon {
          width: 56px;
          height: 56px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 14px;

          background:
            rgba(34, 197, 94, 0.07);

          border:
            1px solid
            rgba(74, 222, 128, 0.12);

          font-size: 25px;
        }

        .admin-card-number {
          color: #345542;

          font-size: 12px;

          font-weight: 800;

          letter-spacing: 1px;
        }

        .admin-card-label {
          display: block;

          margin-bottom: 8px;

          color: #4ade80;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: 2px;
        }

        .admin-card-content h2 {
          margin: 0 0 10px;

          color: #eaffef;

          font-size: 22px;

          letter-spacing: -0.5px;
        }

        .admin-card-content p {
          margin: 0 0 22px;

          max-width: 430px;

          color: #71877a;

          font-size: 13px;

          line-height: 1.7;
        }

        .admin-card-button {
          display: inline-flex;

          align-items: center;

          gap: 12px;

          padding: 11px 16px;

          border:
            1px solid
            rgba(74, 222, 128, 0.18);

          border-radius: 8px;

          background:
            rgba(34, 197, 94, 0.07);

          color: #a9dfb8;

          cursor: pointer;

          font-size: 11px;

          font-weight: 800;

          transition: 0.3s;
        }

        .admin-card-button span {
          color: #4ade80;

          font-size: 17px;

          transition: 0.3s;
        }

        .admin-card-button:hover {
          color: #022c16;

          background:
            linear-gradient(
              135deg,
              #4ade80,
              #16a34a
            );

          border-color: transparent;
        }

        .admin-card-button:hover span {
          color: #022c16;

          transform:
            translateX(3px);
        }

        /* =========================
           QUICK ACTIONS
        ========================= */

        .admin-quick {
          position: relative;

          z-index: 1;

          max-width: 1200px;

          margin: 75px auto 0;
        }

        .admin-section-heading span {
          color: #4ade80;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: 2.5px;
        }

        .admin-section-heading h2 {
          margin: 9px 0 7px;

          color: #eaffef;

          font-size: 30px;

          letter-spacing: -1px;
        }

        .admin-section-heading p {
          margin: 0 0 25px;

          color: #71877a;

          font-size: 13px;
        }

        .quick-actions {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 12px;
        }

        .quick-actions button {
          display: flex;

          align-items: center;

          gap: 12px;

          position: relative;

          padding: 17px;

          text-align: left;

          border:
            1px solid
            rgba(74, 222, 128, 0.1);

          border-radius: 12px;

          background:
            rgba(6, 19, 11, 0.8);

          color: #d5e9dc;

          cursor: pointer;

          transition: 0.3s;
        }

        .quick-actions button > span {
          width: 36px;
          height: 36px;

          display: flex;

          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border-radius: 9px;

          background:
            rgba(34, 197, 94, 0.07);

          color: #4ade80;

          font-size: 17px;
        }

        .quick-actions button div {
          display: flex;

          flex-direction: column;

          gap: 3px;
        }

        .quick-actions button strong {
          font-size: 11px;
        }

        .quick-actions button small {
          color: #61766a;

          font-size: 9px;
        }

        .quick-actions button b {
          margin-left: auto;

          color: #355542;

          transition: 0.3s;
        }

        .quick-actions button:hover {
          border-color:
            rgba(74, 222, 128, 0.3);

          background:
            rgba(34, 197, 94, 0.06);

          transform: translateY(-3px);
        }

        .quick-actions button:hover b {
          color: #4ade80;

          transform:
            translateX(3px);
        }

        /* =========================
           SYSTEM STATUS
        ========================= */

        .admin-status {
          position: relative;

          z-index: 1;

          max-width: 1200px;

          margin: 55px auto 0;

          padding: 17px 20px;

          display: flex;

          justify-content: space-between;

          align-items: center;

          gap: 20px;

          border:
            1px solid
            rgba(74, 222, 128, 0.08);

          border-radius: 12px;

          background:
            rgba(34, 197, 94, 0.025);
        }

        .status-left {
          display: flex;

          align-items: center;

          gap: 10px;
        }

        .status-dot {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: #4ade80;

          box-shadow:
            0 0 12px
            rgba(74, 222, 128, 0.8);
        }

        .status-left div {
          display: flex;

          flex-direction: column;

          gap: 3px;
        }

        .status-left strong {
          color: #bfe8ca;

          font-size: 11px;
        }

        .status-left small {
          color: #52695b;

          font-size: 9px;
        }

        .status-right {
          color: #466050;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: 1.5px;
        }

        .status-right span {
          color: #4ade80;

          margin: 0 7px;
        }

        /* =========================
           FOOTER
        ========================= */

        .admin-footer {
          position: relative;

          z-index: 1;

          max-width: 1200px;

          margin: 50px auto 0;

          padding-top: 22px;

          border-top:
            1px solid
            rgba(148, 163, 184, 0.08);

          display: flex;

          justify-content: space-between;

          gap: 20px;

          color: #4d6355;

          font-size: 10px;
        }

        .admin-footer p {
          margin: 0;
        }

        .admin-footer span {
          color: #3c5144;
        }

        /* =========================
           RESPONSIVE 900px
        ========================= */

        @media (max-width: 900px) {

          .admin-dashboard {
            padding: 40px 20px 30px;
          }

          .admin-cards {
            grid-template-columns: 1fr;
          }

          .quick-actions {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

        }

        /* =========================
           RESPONSIVE 650px
        ========================= */

        @media (max-width: 650px) {

          .admin-header {
            flex-direction: column;

            align-items: flex-start;

            margin-bottom: 35px;
          }

          .admin-brand {
            margin-bottom: 25px;
          }

          .admin-header h1 {
            font-size: 38px;
          }

          .admin-logout {
            align-self: flex-start;
          }

          .admin-card {
            min-height: auto;

            padding: 22px;
          }

          .admin-card-content h2 {
            font-size: 20px;
          }

          .admin-quick {
            margin-top: 55px;
          }

          .quick-actions {
            grid-template-columns: 1fr;
          }

          .admin-status {
            align-items: flex-start;

            flex-direction: column;
          }

          .admin-footer {
            flex-direction: column;

            gap: 8px;
          }

        }

        /* =========================
           RESPONSIVE 450px
        ========================= */

        @media (max-width: 450px) {

          .admin-dashboard {
            padding: 30px 14px 25px;
          }

          .admin-header h1 {
            font-size: 33px;

            letter-spacing: -1.5px;
          }

          .admin-subtitle {
            font-size: 12px;
          }

          .admin-card {
            border-radius: 16px;
          }

          .admin-card-icon {
            width: 48px;
            height: 48px;

            font-size: 21px;
          }

          .admin-section-heading h2 {
            font-size: 25px;
          }

          .admin-status {
            padding: 15px;
          }

          .status-right {
            font-size: 8px;
          }

        }

      `}</style>

    </div>
  );
}

export default AdminDashboard;