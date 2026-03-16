import express from "express";
import Vehicle from "../models/Vehicle.js";

const router = express.Router();

/*
CREATE vehicle
Adds a new vehicle to the database
*/
router.post("/", async (req, res) => {
    try {
        const vehicle = new Vehicle(req.body);
        await vehicle.save();
        res.json(vehicle);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/*
READ vehicles
Returns all vehicles stored in database
*/
router.get("/", async (req, res) => {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
});

/*
UPDATE vehicle
Updates vehicle information using ID
*/
router.put("/:id", async (req, res) => {
    const updatedVehicle = await Vehicle.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(updatedVehicle);
});

/*
DELETE vehicle
Removes a vehicle from the database
*/
router.delete("/:id", async (req, res) => {
    await Vehicle.findByIdAndDelete(req.params.id);
    res.json({ message: "Vehicle deleted successfully" });
});

export default router;