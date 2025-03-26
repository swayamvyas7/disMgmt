import React, { useState } from "react";
import "./DisasterPrediction.css";

const DisasterPrediction = () => {
    const [formData, setFormData] = useState({
        minTemp: "",
        maxTemp: "",
        rainfall: "",
        windSpeed9am: "",
        windSpeed3pm: "",
        humidity9am: "",
        humidity3pm: "",
        temp9am: "",
        temp3pm: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Data:", formData);
        // Add logic to send data to the backend or process it
    };

    return (
        <div className="disaster-prediction">
            <h1>Disaster Prediction</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Minimum Temperature:
                    <input type="number" name="minTemp" value={formData.minTemp} onChange={handleChange} required />
                </label>
                <label>
                    Maximum Temperature:
                    <input type="number" name="maxTemp" value={formData.maxTemp} onChange={handleChange} required />
                </label>
                <label>
                    Rainfall (mm):
                    <input type="number" name="rainfall" value={formData.rainfall} onChange={handleChange} required />
                </label>
                <label>
                    Wind Speed (9 AM):
                    <input type="number" name="windSpeed9am" value={formData.windSpeed9am} onChange={handleChange} required />
                </label>
                <label>
                    Wind Speed (3 PM):
                    <input type="number" name="windSpeed3pm" value={formData.windSpeed3pm} onChange={handleChange} required />
                </label>
                <label>
                    Humidity (9 AM):
                    <input type="number" name="humidity9am" value={formData.humidity9am} onChange={handleChange} required />
                </label>
                <label>
                    Humidity (3 PM):
                    <input type="number" name="humidity3pm" value={formData.humidity3pm} onChange={handleChange} required />
                </label>
                <label>
                    Temperature (9 AM):
                    <input type="number" name="temp9am" value={formData.temp9am} onChange={handleChange} required />
                </label>
                <label>
                    Temperature (3 PM):
                    <input type="number" name="temp3pm" value={formData.temp3pm} onChange={handleChange} required />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default DisasterPrediction;
