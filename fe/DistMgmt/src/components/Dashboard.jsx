import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div className="dashboard">
            {/* Dashboard Header */}
            <header className="dashboard-header">
                <h1>User Dashboard</h1>
            </header>

            {/* Weather Today Section */}
            <section className="weather-today">
                <h2>Weather Today</h2>
                <div className="location-details">
                    <h3>28°C</h3>
                    <p>Partly Cloudy</p>
                    <ul>
                        <li>Precipitation: 30%</li>
                        <li>Wind: 15 km/h</li>
                        <li>Location: San Francisco, CA</li>
                    </ul>
                    <button className="update-location-button">Update Location</button>
                </div>
            </section>

            {/* Risk Assessment Section */}
            <section className="risk-assessment">
                <div className="risk-circles">
                    <RiskCircle label="Flood Risk" percentage={70} />
                    <RiskCircle label="Wildfire Risk" percentage={90} />
                    <RiskCircle label="Hurricane Risk" percentage={20} />
                    <RiskCircle label="Heatwave Risk" percentage={60} />
                    <RiskCircle label="Earthquake Risk" percentage={50} />
                    <RiskCircle label="Tornado Risk" percentage={40} />
                </div>
            </section>
        </div>
    );
};

const RiskCircle = ({ label, percentage }) => {
    const getStrokeColor = () => {
        if (percentage < 50) return "green";
        if (percentage >= 50 && percentage <= 75) return "orange";
        return "red";
    };

    return (
        <div className="risk-circle">
            <svg className="circle" viewBox="0 0 36 36">
                <path
                    className="circle-bg"
                    d="M18 2.0845
                       a 15.9155 15.9155 0 0 1 0 31.831
                       a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#f0f0f0"
                    strokeWidth="2"
                />
                <path
                    className="circle-progress"
                    d="M18 2.0845
                       a 15.9155 15.9155 0 0 1 0 31.831
                       a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke={getStrokeColor()}
                    strokeWidth="2"
                    strokeDasharray={`${percentage}, 100`}
                    strokeLinecap="round"
                />
                <text x="18" y="20.35" className="circle-text" textAnchor="middle">
                    {`${percentage}%`}
                </text>
            </svg>
            <span className="label">{label}</span>
        </div>
    );
};

export default Dashboard;
