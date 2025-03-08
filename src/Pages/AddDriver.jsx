import React, { useState } from "react";
import axios from "axios";

const AddDriver = () => {
  const [formData, setFormData] = useState({
    driverFirstName: "",
    driverLastName: "",
    driverMob: "",  // Updated to match backend
    driverEmail: "",  // Updated to match backend
    driverPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/addDriver", formData, {
        headers: { "Content-Type": "application/json" },
      });
      alert(response.data);

      // Reset form
      setFormData({
        driverFirstName: "",
        driverLastName: "",
        driverMob: "",
        driverEmail: "",
        driverPassword: "",
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
            <label>First Name</label>
            <input
              type="text"
              name="driverFirstName"
              value={formData.driverFirstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label>Last Name</label>
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
              name="driverMob"
              value={formData.driverMob}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label>Email</label>
            <input
              type="email"
              name="driverEmail"
              value={formData.driverEmail}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label>Password</label>
            <input
              type="password"
              name="driverPassword"
              value={formData.driverPassword}
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
