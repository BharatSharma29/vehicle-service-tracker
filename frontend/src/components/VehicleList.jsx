import React, { useEffect, useState } from "react";
import axios from "axios";

function VehicleList() {

    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        fetchVehicles();
    }, []);

    const fetchVehicles = async () => {
        const res = await axios.get("http://localhost:5000/api/vehicles");
        setVehicles(res.data);
    };

    const deleteVehicle = async (id) => {
        await axios.delete(`http://localhost:5000/api/vehicles/${id}`);
        fetchVehicles();
    };

    return (
        <div>

            <h2>Vehicle List</h2>

            {vehicles.map(v => (

                <div key={v._id}>

                    <p>
                        {v.make} {v.model} - {v.year} - {v.mileage} km
                    </p>

                    <button onClick={() => deleteVehicle(v._id)}>
                        Delete
                    </button>

                </div>

            ))}

        </div>
    );
}

export default VehicleList;