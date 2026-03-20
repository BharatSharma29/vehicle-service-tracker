import React from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function VehicleList({ vehicles, fetchVehicles }) {

    const deleteVehicle = async (id) => {

        try {

            await axios.delete(`${API_URL}/vehicles/${id}`);

            fetchVehicles();

        } catch (error) {

            console.error("Error deleting vehicle:", error);

        }

    };

    if (vehicles.length === 0) {

        return <p className="empty">No vehicles added yet.</p>;

    }

    return (

        <div className="vehicle-list">

            <h2>Vehicle List</h2>

            <table className="vehicle-table">

                <thead>

                    <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Mileage (km)</th>
                        <th>Action</th>
                    </tr>

                </thead>

                <tbody>

                    {(Array.isArray(vehicles) ? vehicles : [])?.map(vehicle => (

                        <tr key={vehicle._id}>

                            <td>{vehicle.make}</td>
                            <td>{vehicle.model}</td>
                            <td>{vehicle.year}</td>
                            <td>{vehicle.mileage}</td>

                            <td>

                                <button
                                    className="delete-btn"
                                    onClick={() => deleteVehicle(vehicle._id)}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default VehicleList;