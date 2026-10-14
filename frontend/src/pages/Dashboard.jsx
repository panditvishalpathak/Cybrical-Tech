import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const token = localStorage.getItem("userToken");

    if (!savedUser || !token) {
      navigate("/login");
      return;
    }

    try {
      setUser(JSON.parse(savedUser));
    } catch (error) {
      console.error("User data error:", error);
      navigate("/login");
    }
  }, [navigate]);

  if (!user) {
    return null;
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        <div style={styles.logo}>
          CYBRICAL <span>TECH</span>
        </div>

        <h1>
          Welcome, {user.name} 👋
        </h1>

        <p style={styles.subtitle}>
          Welcome to your Cybrical Tech dashboard.
        </p>

        <div style={styles.infoBox}>
          <p>
            <strong>Name:</strong> {user.name}
          </p>

          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <p>
            <strong>Role:</strong> {user.role}
          </p>
        </div>

        <button
          onClick={() => navigate("/")}
          style={styles.button}
        >
          ← Back to Home
        </button>

      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#080810",
    color: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "100px 20px 50px",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    width: "100%",
    maxWidth: "650px",
    background: "#11111d",
    border: "1px solid #252538",
    borderRadius: "22px",
    padding: "45px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
  },

  logo: {
    fontSize: "22px",
    fontWeight: "800",
    letterSpacing: "2px",
    marginBottom: "30px",
  },

  subtitle: {
    color: "#9ca3af",
    marginBottom: "30px",
  },

  infoBox: {
    background: "#191925",
    border: "1px solid #303044",
    borderRadius: "14px",
    padding: "20px",
    marginBottom: "25px",
    lineHeight: "1.8",
  },

  button: {
    padding: "13px 22px",
    border: "none",
    borderRadius: "9px",
    background: "#635bff",
    color: "#ffffff",
    fontWeight: "700",
    cursor: "pointer",
  },
};

export default Dashboard;