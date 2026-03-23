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
    await register(form);
    nav("/login");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <div className="card bg-neutral p-6 w-80 border border-green-500">
        <h1 className="text-primary text-xl mb-3">Register</h1>

        <input
          className="input mb-2"
          placeholder="Username"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <input
          className="input mb-2"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          className="input mb-2"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="btn btn-primary" onClick={submit}>
          Register
        </button>
      </div>
    </div>
  );
}
