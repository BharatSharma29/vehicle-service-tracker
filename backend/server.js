/*
Main backend server file.

This file initializes the Express server,
connects to the database and loads API routes.
*/

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import vehicleRoutes from "./routes/vehicleRoutes.js";

// Load environment variables
dotenv.config();

// Connect to MongoDB database
connectDB();

const app = express();

// Enable middleware
app.use(cors());
app.use(express.json());

// Register API routes
app.use("/api/vehicles", vehicleRoutes);

// Port configuration
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});