import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function VehicleList() {

    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        fetchVehicles();
    }, []);

    const fetchVehicles = async () => {

        try {

            const response = await axios.get(`${API_URL}/vehicles`);

            setVehicles(response.data);

        } catch (error) {

            console.error("Error fetching vehicles:", error);

        }

    };

    const deleteVehicle = async (id) => {

        try {

            await axios.delete(`${API_URL}/vehicles/${id}`);

            fetchVehicles();

        } catch (error) {

            console.error("Error deleting vehicle:", error);

        }

    };

    return (

        <div>

            <h2>Vehicle List</h2>

            {vehicles.map(vehicle => (

                <div key={vehicle._id}>

                    <p>
                        {vehicle.make} {vehicle.model} - {vehicle.year} - {vehicle.mileage} km
                    </p>

                    <button onClick={() => deleteVehicle(vehicle._id)}>
                        Delete
                    </button>

                </div>

            ))}

        </div>

    );
}

export default VehicleList;