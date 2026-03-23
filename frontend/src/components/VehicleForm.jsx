import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function VehicleForm({ fetchVehicles, editVehicle, setEditVehicle }) {

    const currentYear = new Date().getFullYear();

    const [vehicle, setVehicle] = useState({
        make: "",
        model: "",
        year: "",
        mileage: ""
    });

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    // ✅ Populate form when editing
    useEffect(() => {
        if (editVehicle) {
            setVehicle({
                make: editVehicle.make,
                model: editVehicle.model,
                year: editVehicle.year,
                mileage: editVehicle.mileage
            });
        }
    }, [editVehicle]);

    const handleChange = (e) => {

        setVehicle({
            ...vehicle,
            [e.target.name]: e.target.value
        });

    };

    const validateForm = () => {

        if (!vehicle.make.match(/^[A-Za-z ]+$/)) {
            return "Vehicle make should contain only letters.";
        }

        if (vehicle.model.trim() === "") {
            return "Vehicle model is required.";
        }

        if (vehicle.year < 1900 || vehicle.year > currentYear) {
            return `Year must be between 1900 and ${currentYear}.`;
        }

        if (vehicle.mileage < 0) {
            return "Mileage cannot be negative.";
        }

        return null;
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const validationError = validateForm();

        if (validationError) {
            setError(validationError);
            setMessage("");
            return;
        }

        try {

            if (editVehicle) {
                // ✅ UPDATE
                await axios.put(`${API_URL}/vehicles/${editVehicle._id}`, vehicle);
                setMessage("Vehicle updated successfully!");
            } else {
                // CREATE
                await axios.post(`${API_URL}/vehicles`, vehicle);
                setMessage("Vehicle added successfully!");
            }

            setVehicle({
                make: "",
                model: "",
                year: "",
                mileage: ""
            });

            setEditVehicle(null); // reset edit mode
            setError("");
            fetchVehicles();

        } catch (error) {

            console.error("Error:", error);
            setError("Something went wrong.");
            setMessage("");

        }

    };

    const handleCancel = () => {
        setEditVehicle(null);
        setVehicle({
            make: "",
            model: "",
            year: "",
            mileage: ""
        });
    };

    return (

        <form className="form" onSubmit={handleSubmit}>

            <h2>{editVehicle ? "Edit Vehicle" : "Add Vehicle"}</h2>

            <input name="make" value={vehicle.make} onChange={handleChange} placeholder="Make" required />
            <input name="model" value={vehicle.model} onChange={handleChange} placeholder="Model" required />
            <input name="year" value={vehicle.year} onChange={handleChange} type="number" placeholder="Year" required />
            <input name="mileage" value={vehicle.mileage} onChange={handleChange} type="number" placeholder="Mileage" required />

            <button type="submit">
                {editVehicle ? "Update Vehicle" : "Add Vehicle"}
            </button>

            {editVehicle && (
                <button type="button" onClick={handleCancel}>
                    Cancel
                </button>
            )}

            {message && <p className="success">{message}</p>}
            {error && <p className="error">{error}</p>}

        </form>

    );

}

export default VehicleForm;