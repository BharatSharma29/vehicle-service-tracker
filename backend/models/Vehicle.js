import mongoose from "mongoose";

/*
Vehicle Schema defines the structure of the vehicle data
stored inside the MongoDB database.
*/
const VehicleSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    mileage: {
        type: Number,
        required: true
    }
});

// Export the model
export default mongoose.model("Vehicle", VehicleSchema);