import React, { useState } from "react";
import axios from "axios";

const AddDriver = () => {
  const [formData, setFormData] = useState({
    driverFirstName: "",
    driverLastName: "",
    mobNo: "",
    address: "",
    email: "",
    password: "",
    licenseNumber: "",
    assignedBus: "", // Optionally, you can link the driver to a bus ID
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/addDriver", formData, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Driver added successfully!");
      console.log("Response:", response.data);

      // Reset the form after successful submission
      setFormData({
        driverFirstName: "",
        driverLastName: "",
        mobNo: "",
        address: "",
        email: "",
        password: "",
        licenseNumber: "",
        assignedBus: "",
      });

    } catch (error) {
      console.error("Error adding driver:", error);
      alert("Failed to add driver!");
    }
  };

  return (
    <div className="form-container">
      <h2 className="fw-bold mb-3">Add Driver</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <label>Driver First Name</label>
            <input
              type="text"
              name="driverFirstName"
              value={formData.driverFirstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label>Driver Last Name</label>
            <input
              type="text"
              name="driverLastName"
              value={formData.driverLastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label>Mobile Number</label>
            <input
              type="text"
              name="mobNo"
              value={formData.mobNo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-12">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label>License Number</label>
            <input
              type="text"
              name="licenseNumber"
              value={formData.licenseNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label>Assigned Bus (Bus ID)</label>
            <input
              type="text"
              name="assignedBus"
              value={formData.assignedBus}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-12 text-center">
            <button type="submit" className="btn-primary">
              Add Driver
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddDriver;
