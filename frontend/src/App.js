import React, { useEffect, useState } from "react";
import axios from "axios";
import VehicleForm from "./components/VehicleForm";
import VehicleList from "./components/VehicleList";
import "./App.css";

const API_URL = process.env.REACT_APP_API_URL;

function App() {

  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ NEW: edit state
  const [editVehicle, setEditVehicle] = useState(null);

  const fetchVehicles = async () => {

    try {

      setLoading(true);

      const res = await axios.get(`${API_URL}/vehicles`);

      setVehicles(res.data);

    } catch (error) {

      console.error("Error fetching vehicles:", error);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  return (

    <div className="container">

      <h1>Vehicle Service Tracker</h1>

      <VehicleForm
        fetchVehicles={fetchVehicles}
        editVehicle={editVehicle}
        setEditVehicle={setEditVehicle}
      />

      {loading ? (
        <p className="loading">Loading vehicles...</p>
      ) : (
        <VehicleList
          vehicles={vehicles}
          fetchVehicles={fetchVehicles}
          setEditVehicle={setEditVehicle} // ✅ pass edit handler
        />
      )}

    </div>

  );

}

export default App;