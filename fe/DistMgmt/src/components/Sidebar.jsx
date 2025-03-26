import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import {
  Home,
  LayoutDashboard,
  Activity,
  MapPin,
  Bell,
  AlertTriangle,
  LogIn,
  Shield,
} from "lucide-react";
import "./Sidebar.css"; // Import CSS file for styling

const Sidebar = ({ isOpen, toggleSidebar, onLoginClick }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`} style={{ width: "180px" }}> {/* Reduced width */}
      {/* Logo */}
      <div className="sidebar-logo">
        <Shield className="logo-icon" />
        <span className="logo-text">Disaster<span className="bold">Guard</span></span>
      </div>

      {/* Main Navigation */}
      <nav className="sidebar-nav">
        <p className="nav-section">Main</p>
        <NavItem icon={<Home size={20} />} label="Home" to="/" />
        <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" to="/dashboard" />
        <NavItem icon={<Activity size={20} />} label="Disaster Prediction" to="/disaster-prediction" />
        <NavItem icon={<MapPin size={20} />} label="Risk Mapping" />
        <NavItem icon={<Bell size={20} />} label="Alerts & Notifications" />

        {/* Emergency Section */}
        <p className="nav-section">Emergency</p>
        <NavItem icon={<AlertTriangle size={20} />} label="Emergency Numbers" to="/emergency-numbers" />
      </nav>

      {/* Footer Buttons */}
      <div className="sidebar-footer">
        <button className="login-button" onClick={onLoginClick}>
          <LogIn size={18} /> Login / Sign Up
        </button>
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, to }) => (
  <Link to={to} className="nav-item"> {/* Wrap the entire button in Link */}
    {icon}
    <span>{label}</span>
  </Link>
);

export default Sidebar;
