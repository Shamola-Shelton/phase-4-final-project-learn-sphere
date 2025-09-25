import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BookOpen,
  Home,
  Library,
  MessageSquare,
  Trophy,
  User,
  LogOut,
  Star,
  Award,
} from "lucide-react";

const NavBar = ({ user, onLogout }) => {
  const location = useLocation();

  const navItems = [
    { path: "/dashboard", icon: Home, label: "Dashboard" },
    { path: "/courses", icon: Library, label: "Courses" },
    { path: "/chat", icon: MessageSquare, label: "Chat" },
    { path: "/leaderboard", icon: Trophy, label: "Leaderboard" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div
        className="navbar-container container"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
      >
        <Link to="/dashboard" className="logo">
          <div className="logo-icon">
            <BookOpen />
          </div>
          <span className="logo-text">LearnSphere</span>
        </Link>

        <div className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={isActive(item.path) ? "nav-link active" : "nav-link"}
            >
              <item.icon className="icon" />
              <span className="label">{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="user-section" style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <div className="user-stats" style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <div className="stat yellow" style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <Star className="icon" />
              <span>{user?.stars ?? 0}</span>
            </div>
            <div className="stat purple" style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <Award className="icon" />
              <span>{user?.points ?? 0}</span>
            </div>
          </div>

          <div className="user-menu" style={{ position: "relative" }}>
            <button
              className="user-btn"
              style={{
                display: "flex",
                gap: 8,
                alignItems: "center",
                padding: 8,
                borderRadius: 8,
                background: "#fff",
              }}
            >
              <div className="user-avatar">
                <User />
              </div>
              <span className="username">{user?.username ?? "Guest"}</span>
            </button>

            <div
              className="dropdown"
              style={{
                position: "absolute",
                right: 0,
                marginTop: 8,
                background: "#fff",
                borderRadius: 8,
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                display: "none",
              }}
            >
              <Link to="/profile" className="dropdown-item">
                Profile
              </Link>
              <button onClick={onLogout} className="dropdown-item logout">
                <LogOut className="icon" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
