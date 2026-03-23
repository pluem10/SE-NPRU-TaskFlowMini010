import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { logout } = useAuthStore();
  const nav = useNavigate();

  const handleLogout = () => {
    logout();
    nav("/login");
  };

  return (
    <div className="navbar">
      <div className="logo" onClick={() => nav("/")}>
        ⚡ TaskFlow
      </div>

      <div className="nav-links">
        <button onClick={() => nav("/")}>Dashboard</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}
