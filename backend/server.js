/*
Main backend server file.

This initializes the Express server,
loads middleware, connects to MongoDB,
and registers API routes.
*/

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import vehicleRoutes from "./routes/vehicleRoutes.js";

dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/vehicles", vehicleRoutes);

// Port configuration
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});