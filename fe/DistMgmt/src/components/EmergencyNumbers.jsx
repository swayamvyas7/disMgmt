import React from "react";
import "./EmergencyNumbers.css";

const EmergencyNumbers = () => {
    const emergencyNumbers = [
        { label: "Police", number: "100" },
        { label: "Fire", number: "101" },
        { label: "Ambulance", number: "102" },
        { label: "Disaster Management", number: "108" },
        { label: "Women Helpline", number: "1091" },
        { label: "Child Helpline", number: "1098" },
        { label: "Senior Citizen Helpline", number: "14567" },
        { label: "Railway Enquiry", number: "139" },
        { label: "Road Accident Emergency", number: "1073" }, // New number added
    ];

    return (
        <div className="emergency-numbers-page">
            <h1>Emergency Numbers</h1>
            <div className="emergency-cards">
                {emergencyNumbers.map((item, index) => (
                    <div key={index} className="emergency-card">
                        <h3>{item.label}</h3>
                        <p>{item.number}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EmergencyNumbers;
