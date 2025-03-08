import React, { useState, useEffect } from "react";
import axios from "axios";

const AddBusToDriverPage = () => {
  const [busRoutes, setBusRoutes] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [formData, setFormData] = useState({
    busId: "",
    busNumber: "",
    busNumberPlate: "",
    driverId: "",
    driverName: "",
    cleanerName: "",
    driverMobile: ""
  });

  // Fetch bus routes and drivers from backend
  useEffect(() => {
    axios.get("http://localhost:8080/api/bus-routes/all")
      .then(response => setBusRoutes(response.data))
      .catch(error => console.error("Error fetching bus routes:", error));

    axios.get("http://localhost:8080/getDriver")
      .then(response => setDrivers(response.data))
      .catch(error => console.error("Error fetching drivers:", error));
  }, []);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "busId") {
      const selectedBus = busRoutes.find(bus => bus.id.toString() === value);
      setFormData({
        ...formData,
        busId: value,
        busNumber: selectedBus ? selectedBus.busNumber : "",
        busNumberPlate: selectedBus ? selectedBus.busNumberPlate : ""
      });
    } else if (name === "driverId") {
      const selectedDriver = drivers.find(driver => driver.did.toString() === value);
      setFormData({
        ...formData,
        driverId: value,
        driverName: selectedDriver ? `${selectedDriver.driverFirstName} ${selectedDriver.driverLastName}` : "",
        driverMobile: selectedDriver ? selectedDriver.driverMob : ""
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleAssignBus = (e) => {
    e.preventDefault();
    if (Object.values(formData).every(field => field.trim() !== "")) {
      axios.post("http://localhost:8080/api/assigned-bus/assign", formData)
        .then(response => {
          alert(`Bus ${response.data.busNumber} successfully assigned to ${response.data.driverName}.`);
          setFormData({
            busId: "",
            busNumber: "",
            busNumberPlate: "",
            driverId: "",
            driverName: "",
            cleanerName: "",
            driverMobile: ""
          });
        })
        .catch(error => {
          console.error("Error assigning bus:", error);
          alert("Failed to assign bus. Please try again.");
        });
    } else {
      alert("Please fill all the fields.");
    }
  };

  return (
    <div className="form-container">
      <h2 className="fw-bold mb-3">Assign Bus to Driver</h2>
      <form onSubmit={handleAssignBus}>
        <div className="row">
          <div className="col-md-6">
            <label>Choose Bus Route</label>
            <select name="busId" value={formData.busId} onChange={handleChange} required>
              <option value="">Select Bus Route</option>
              {busRoutes.map(bus => (
                <option key={bus.id} value={bus.id}>{bus.routeName}</option>
              ))}
            </select>
          </div>

          <div className="col-md-6">
            <label>Bus Number</label>
            <input type="text" name="busNumber" value={formData.busNumber} readOnly required />
          </div>

          <div className="col-md-6">
            <label>Bus Number Plate</label>
            <input type="text" name="busNumberPlate" value={formData.busNumberPlate} readOnly required />
          </div>

          <div className="col-md-6">
            <label>Choose Driver</label>
            <select name="driverId" value={formData.driverId} onChange={handleChange} required>
              <option value="">Select Driver</option>
              {drivers.map(driver => (
                <option key={driver.did} value={driver.did}>
                  {driver.driverFirstName} {driver.driverLastName}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-6">
            <label>Driver Name</label>
            <input type="text" name="driverName" value={formData.driverName} readOnly required />
          </div>

          <div className="col-md-6">
            <label>Cleaner Name</label>
            <input type="text" name="cleanerName" value={formData.cleanerName} onChange={handleChange} required />
          </div>

          <div className="col-md-6">
            <label>Driver Mobile Number</label>
            <input type="tel" name="driverMobile" value={formData.driverMobile} readOnly required />
          </div>

          <div className="col-12 text-center">
            <button type="submit" className="btn-primary">Assign Bus</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBusToDriverPage;
