import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuthStore();
  const nav = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    await login(form);
    nav("/");
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">⚡ Login</h1>

        <input
          className="input"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="input"
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="btn" onClick={submit}>
          Login
        </button>
      </div>
    </div>
  );
}
