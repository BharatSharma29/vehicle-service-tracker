import React from "react";
import VehicleForm from "./components/VehicleForm";
import VehicleList from "./components/VehicleList";
import "./App.css";

function App() {

  return (
    <div className="container">
      <h1>Vehicle Service Tracker</h1>

      <VehicleForm />

      <VehicleList />
    </div>
  );
}

export default App;