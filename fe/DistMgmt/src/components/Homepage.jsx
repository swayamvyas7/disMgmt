import React from "react";
import "./HomePage.css";
import { Bell, MapPin, Users } from "lucide-react";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>AI-Powered Disaster <br /> Management Platform</h1>
          <p>
            Predict, prepare, and respond to natural disasters with real-time alerts, 
            risk assessment, and coordination tools.
          </p>
          <div className="hero-buttons">
            <button className="btn primary">Get Started</button>
            <input type="text" className="input" placeholder="Enter your email" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Comprehensive Disaster Management</h2>
        <div className="feature-cards">
          <FeatureCard
            icon={<Bell size={30} color="red" />}
            title="Real-time Alerts"
            description="Receive instant notifications about potential disasters through SMS, WhatsApp, and IVR."
          />
          <FeatureCard
            icon={<MapPin size={30} color="red" />}
            title="Geospatial Risk Mapping"
            description="Interactive maps showing high-risk zones with satellite imagery overlays."
          />
          <FeatureCard
            icon={<Users size={30} color="red" />}
            title="Authorities Control Panel"
            description="Dedicated dashboard for government and relief teams to coordinate response efforts."
          />
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      {icon}
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#" className="learn-more">Learn more →</a>
    </div>
  );
};

export default HomePage;
