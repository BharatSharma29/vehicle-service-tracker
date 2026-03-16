import React, { useState } from "react";
import axios from "axios";

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

        await axios.post("http://localhost:5000/api/vehicles", vehicle);

        alert("Vehicle added");
    };

    return (
        <form onSubmit={submitVehicle}>
            <input name="make" placeholder="Make" onChange={handleChange} required />

            <input name="model" placeholder="Model" onChange={handleChange} required />

            <input name="year" placeholder="Year" type="number" onChange={handleChange} required />

            <input name="mileage" placeholder="Mileage" type="number" onChange={handleChange} required />

            <button>Add Vehicle</button>
        </form>
    );
}

export default VehicleForm;