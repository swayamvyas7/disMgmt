const express = require('express');
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require('../models/user');
async function handleSignup(req,res){
    try {
        const { fullName, phno, password, language,  location } = req.body;

        // Check if user already exists
        let existingUser = await User.findOne({ phno });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists. Please login." });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            fullName,
            phno,
            password: hashedPassword,
            language,
            location,
        });

        await newUser.save();
        res.json({ message: "User registered successfully" });

    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ message: "Server error" });
    }
}
async function handleLogin(req,res){
    try {
        const { fullName, phno, password, language,  location } = req.body;

        // Check if user exists
        let user = await User.findOne({ phno });
        if (!user) {
            return res.status(400).json({ message: "User not found. Please sign up." });
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Update user's location on login
        user.location = location;
        await user.save();

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email, language: user.language },
            JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({ message: "Login successful", token, language: user.language });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Server error" });
    }
}

module.exports ={
    handleLogin,
    handleSignup,
}