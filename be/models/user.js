const mongoose = require('mongoose');

//schema
const userSchema = new mongoose.Schema({
    fullName :{
        type: String,
        required: true,
    },
   
    phno:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    language: { 
        type: String, 
        enum: ["Hindi", "English", "Telugu", "Bengali", "Tamil", "Malayalam"], 
        required: true ,
    },
    location: {
        type: { type: String, enum: ["Point"], required: true, default: "Point" }, // GeoJSON format
        coordinates: { type: [Number], required: true }, // [longitude, latitude]
        address: { type: String, required: true } // Formatted address from Nominatim API
    }
});

//model
const User = mongoose.model('User', userSchema);

module.exports = User;