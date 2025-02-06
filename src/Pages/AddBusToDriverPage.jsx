import React, { useState } from "react";

const AddBusToDriverPage = () => {
  // Static data for buses and drivers
  const buses = [
    { id: 1, name: "Bus 1" },
    { id: 2, name: "Bus 2" },
    { id: 3, name: "Bus 3" }
  ];

  const drivers = [
    { id: 1, name: "Driver 1" },
    { id: 2, name: "Driver 2" },
    { id: 3, name: "Driver 3" }
  ];

  const [selectedBus, setSelectedBus] = useState("");
  const [selectedDriver, setSelectedDriver] = useState("");

  const handleAssignBus = (e) => {
    e.preventDefault();
    if (selectedBus && selectedDriver) {
      alert(`Bus ${selectedBus} assigned to Driver ${selectedDriver}`);
    } else {
      alert("Please select both bus and driver.");
    }
  };

  return (
    <div className="container">
      <h2>Assign Bus to Driver</h2>
      <form onSubmit={handleAssignBus}>
        <div className="form-group">
          <label>Choose Bus</label>
          <select
            className="form-control"
            value={selectedBus}
            onChange={(e) => setSelectedBus(e.target.value)}
            required
          >
            <option value="">Select Bus</option>
            {buses.map((bus) => (
              <option key={bus.id} value={bus.id}>
                {bus.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Choose Driver</label>
          <select
            className="form-control"
            value={selectedDriver}
            onChange={(e) => setSelectedDriver(e.target.value)}
            required
          >
            <option value="">Select Driver</option>
            {drivers.map((driver) => (
              <option key={driver.id} value={driver.id}>
                {driver.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Assign Bus
        </button>
      </form>
    </div>
  );
};

export default AddBusToDriverPage;
