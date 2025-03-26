import React, { useState, useEffect } from "react";
import "./LoginSignupPopup.css";

const LoginSignupPopup = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        location: "Detecting location...", // Default value
        preferredLanguage: "",
    });

    const [coordinates, setCoordinates] = useState({ lat: null, lon: null });

    useEffect(() => {
        if (isOpen) {
            getUserLocation();
        }
    }, [isOpen]);

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    setCoordinates({ lat, lon });

                    // ✅ Ensuring location fetch happens after state update
                    setTimeout(async () => {
                        try {
                            const address = await getAddressFromCoordinates(lat, lon);
                            setFormData((prev) => ({ ...prev, location: address || "Location not found" }));
                        } catch (error) {
                            setFormData((prev) => ({ ...prev, location: "Unable to fetch address" }));
                        }
                    }, 500);
                },
                (error) => {
                    console.error("Error getting location:", error.message);
                    setFormData((prev) => ({
                        ...prev,
                        location: error.code === error.PERMISSION_DENIED
                            ? "Location permission denied"
                            : "Error fetching location",
                    }));
                }
            );
        } else {
            setFormData((prev) => ({ ...prev, location: "Geolocation not supported" }));
        }
    };

    const getAddressFromCoordinates = async (lat, lon) => {
        try {
            const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;
            const response = await fetch(url);
            if (!response.ok) throw new Error("Failed to fetch address");
            const data = await response.json();
            return data.display_name || "Unknown Location";
        } catch (error) {
            console.error("Error fetching address:", error);
            return "Error fetching address"; // ✅ Ensuring a fallback message
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            ...formData,
            location: {
                type: "Point",
                coordinates: [coordinates.lon, coordinates.lat],
                address: formData.location,
            },
        };

        fetch("http://localhost:5000/api/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        })
            .then((response) => response.json())
            .then((data) => alert(data.message))
            .catch((error) => console.error("Error:", error));

        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-container">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <h2>Login / Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Full Name:
                        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
                    </label>
                    <label>
                        Phone Number:
                        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                    </label>
                    <label>
                        Location:
                        <input type="text" name="location" value={formData.location} readOnly />
                    </label>
                    <label>
                        Preferred Language:
                        <select name="preferredLanguage" value={formData.preferredLanguage} onChange={handleChange} required>
                            <option value="">Select a language</option>
                            <option value="English">English</option>
                            <option value="Telugu">Telugu</option>
                            <option value="Hindi">Hindi</option>
                            <option value="Tamil">Tamil</option>
                            <option value="Bengali">Bengali</option>
                            <option value="Malayalam">Malayalam</option>
                        </select>
                    </label>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default LoginSignupPopup;
    