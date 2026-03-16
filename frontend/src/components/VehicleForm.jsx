import React, { useState } from "react";
import axios from "axios";

/*
API base URL is stored in environment variable.
This allows easy switching between local development
and cloud deployment without modifying the code.
*/
const API_URL = process.env.REACT_APP_API_URL;

function VehicleForm() {

    const [vehicle, setVehicle] = useState({
        make: "",
        model: "",
        year: "",
        mileage: ""
    });

    const handleChange = (e) => {
        setVehicle({
            ...vehicle,
            [e.target.name]: e.target.value
        });
    };

    const submitVehicle = async (e) => {

        e.preventDefault();

        try {

            await axios.post(`${API_URL}/vehicles`, vehicle);

            alert("Vehicle added successfully");

            setVehicle({
                make: "",
                model: "",
                year: "",
                mileage: ""
            });

        } catch (error) {

            console.error("Error adding vehicle:", error);

        }
    };

    return (
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

            <button type="submit">Add Vehicle</button>

        </form>
    );
}

export default VehicleForm;