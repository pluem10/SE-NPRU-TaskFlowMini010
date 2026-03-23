import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const nav = useNavigate();

  return (
    <div className="sidebar">
      <h2 className="logo">⚡ TaskFlow</h2>

      <button onClick={() => nav("/")}>Dashboard</button>
      <button onClick={() => nav("/login")}>Logout</button>
    </div>
  );
}
