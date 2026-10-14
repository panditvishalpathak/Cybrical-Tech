import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { getApiUrl } from "../config/api";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    // Password match check
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Password length check
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        getApiUrl("/api/users/register"),
        {
          name,
          email,
          password,
        }
      );

      console.log("Signup Response:", response.data);

      setSuccess("Account created successfully!");

      // Clear form
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      // Go to login
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      console.error("Signup Error:", error);

      setError(
        error.response?.data?.message ||
          "Unable to create account. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        {/* Logo */}
        <div style={styles.logo}>
          CYBRICAL
          <span> TECH</span>
        </div>

        {/* Heading */}
        <h1 style={styles.title}>
          Create Account
        </h1>

        <p style={styles.subtitle}>
          Join Cybrical Tech today
        </p>

        {/* Error */}
        {error && (
          <div style={styles.error}>
            {error}
          </div>
        )}

        {/* Success */}
        {success && (
          <div style={styles.success}>
            {success}
          </div>
        )}

        {/* Signup Form */}
        <form onSubmit={handleSignup}>

          {/* Name */}
          <label style={styles.label}>
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />

          {/* Email */}
          <label style={styles.label}>
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />

          {/* Password */}
          <label style={styles.label}>
            Password
          </label>

          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            minLength={6}
            required
          />

          {/* Confirm Password */}
          <label style={styles.label}>
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            style={styles.input}
            minLength={6}
            required
          />

          {/* Signup Button */}
          <button
            type="submit"
            style={{
              ...styles.button,
              opacity: loading ? 0.7 : 1,
            }}
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* Login */}
        <p style={styles.bottomText}>
          Already have an account?{" "}

          <Link
            to="/login"
            style={styles.link}
          >
            Login
          </Link>
        </p>

        {/* Home */}
        <button
          type="button"
          onClick={() => navigate("/")}
          style={styles.backButton}
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "100px 20px 50px",
    color: "#ffffff",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    width: "100%",
    maxWidth: "430px",
    background: "#11111d",
    padding: "40px",
    borderRadius: "22px",
    border: "1px solid #252538",
    boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
  },

  logo: {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "800",
    letterSpacing: "2px",
    marginBottom: "25px",
  },

  title: {
    textAlign: "center",
    fontSize: "32px",
    margin: "0 0 10px",
  },

  subtitle: {
    textAlign: "center",
    color: "#9ca3af",
    marginBottom: "30px",
  },

  label: {
    display: "block",
    marginBottom: "8px",
    color: "#d1d5db",
    fontWeight: "600",
  },

  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "14px",
    marginBottom: "20px",
    borderRadius: "9px",
    border: "1px solid #343449",
    background: "#191925",
    color: "#ffffff",
    fontSize: "15px",
    outline: "none",
  },

  button: {
    width: "100%",
    padding: "14px",
    marginTop: "5px",
    background:
      "linear-gradient(135deg, #635bff, #4f46e5)",
    color: "#ffffff",
    border: "none",
    borderRadius: "9px",
    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer",
  },

  error: {
    background: "rgba(239,68,68,0.12)",
    border: "1px solid rgba(239,68,68,0.35)",
    color: "#fca5a5",
    padding: "12px",
    borderRadius: "8px",
    marginBottom: "20px",
    fontSize: "14px",
  },

  success: {
    background: "rgba(34,197,94,0.12)",
    border: "1px solid rgba(34,197,94,0.35)",
    color: "#86efac",
    padding: "12px",
    borderRadius: "8px",
    marginBottom: "20px",
    fontSize: "14px",
  },

  bottomText: {
    textAlign: "center",
    color: "#9ca3af",
    marginTop: "25px",
  },

  link: {
    color: "#8b7cff",
    textDecoration: "none",
    fontWeight: "600",
  },

  backButton: {
    display: "block",
    margin: "18px auto 0",
    background: "transparent",
    border: "none",
    color: "#9ca3af",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default Signup;