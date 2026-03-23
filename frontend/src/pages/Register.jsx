import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { register } = useAuthStore();
  const nav = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const submit = async () => {
    if (!form.username || !form.email || !form.password) {
      alert("กรอกข้อมูลให้ครบ");
      return;
    }

    await register(form);
    nav("/login");
  };

  return (
    <div style={styles.container}>
      {/* Glow BG */}
      <div style={styles.bgGlow}></div>

      {/* Card */}
      <div style={styles.card}>
        <h1 style={styles.title}>⚡ REGISTER</h1>

        <input
          style={styles.input}
          placeholder="Username"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <input
          style={styles.input}
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          style={styles.input}
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          style={styles.button}
          onClick={submit}
          onMouseOver={(e) => (e.target.style.boxShadow = "0 0 15px #22c55e")}
          onMouseOut={(e) => (e.target.style.boxShadow = "none")}
        >
          Register
        </button>

        <p style={styles.text}>
          มีบัญชีแล้ว?{" "}
          <span style={styles.link} onClick={() => nav("/login")}>
            เข้าสู่ระบบ
          </span>
        </p>
      </div>
    </div>
  );
}

/* STYLE */
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#020617",
    position: "relative",
    overflow: "hidden",
  },

  bgGlow: {
    position: "absolute",
    width: "400px",
    height: "400px",
    background: "radial-gradient(circle, #22c55e55, transparent)",
    filter: "blur(80px)",
    animation: "pulse 4s infinite",
  },

  card: {
    position: "relative",
    zIndex: 2,
    width: "340px",
    padding: "30px",
    borderRadius: "12px",
    background: "#0f172a",
    border: "1px solid #22c55e",
    boxShadow: "0 0 15px rgba(34,197,94,0.3)",
    textAlign: "center",
  },

  title: {
    color: "#22c55e",
    marginBottom: "20px",
    textShadow: "0 0 10px #22c55e",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    background: "#020617",
    border: "1px solid #22c55e",
    color: "white",
    borderRadius: "6px",
  },

  button: {
    width: "100%",
    padding: "10px",
    background: "#22c55e",
    color: "black",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s",
  },

  text: {
    marginTop: "10px",
    color: "#aaa",
  },

  link: {
    color: "#22c55e",
    cursor: "pointer",
  },
};
