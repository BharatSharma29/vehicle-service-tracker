import React, { useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function VehicleForm({ fetchVehicles }) {

    const currentYear = new Date().getFullYear();

    const [vehicle, setVehicle] = useState({
        make: "",
        model: "",
        year: "",
        mileage: ""
    });

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

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

        if (vehicle.mileage <= 0) {
            return "Mileage must be a positive number.";
        }

        return null;

    };

    const submitVehicle = async (e) => {

        e.preventDefault();

        setError("");
        setMessage("");

        const validationError = validateForm();

        if (validationError) {

            setError(validationError);
            return;

        }

        try {

            await axios.post(`${API_URL}/vehicles`, vehicle);

            setMessage("Vehicle added successfully ✓");

            fetchVehicles();

            setVehicle({
                make: "",
                model: "",
                year: "",
                mileage: ""
            });

            setTimeout(() => {
                setMessage("");
            }, 3000);

        } catch (err) {

            console.error(err);

            setError("Failed to add vehicle.");

        }

    };

    return (

        <div>

            <form onSubmit={submitVehicle}>

                <input
                    name="make"
                    placeholder="Make"
                    value={vehicle.make}
                    onChange={handleChange}
                    required
                />

                <input
                    name="model"
                    placeholder="Model"
                    value={vehicle.model}
                    onChange={handleChange}
                    required
                />

                <input
                    name="year"
                    type="number"
                    placeholder="Year"
                    value={vehicle.year}
                    onChange={handleChange}
                    required
                />

                <input
                    name="mileage"
                    type="number"
                    placeholder="Mileage"
                    value={vehicle.mileage}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Add Wehicle</button>

            </form>

            {message && <p className="success-message">{message}</p>}
            {error && <p className="error-message">{error}</p>}

        </div>

    );

}

export default VehicleForm;