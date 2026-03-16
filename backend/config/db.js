/*
Database connection configuration file.

This file connects the backend server to the MongoDB Atlas
cloud database using the connection string stored in the
environment variable MONGO_URI.
*/

import mongoose from "mongoose";

const connectDB = async () => {

    try {

        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB Atlas connected successfully");

    } catch (error) {

        console.error("Database connection failed:", error.message);

        process.exit(1);

    }

};

export default connectDB;