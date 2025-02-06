import React, { useState } from "react";
import axios from "axios";
import "./AddParent.css"; // Ensure CSS file exists

const AddParent = () => {
  const [formData, setFormData] = useState({
    parentFirstName: "",
    parentLastName: "",
    mobNo: "",
    address: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); // For button state
  const [errorMessage, setErrorMessage] = useState(""); // Error handling

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await axios.post("http://localhost:8080/addParent", formData, {
        headers: { "Content-Type": "application/json" },
      });

      alert("Parent added successfully!");
      console.log("Response:", response.data);

      // Reset the form after successful submission
      setFormData({
        parentFirstName: "",
        parentLastName: "",
        mobNo: "",
        address: "",
        email: "",
        password: "",
      });

    } catch (error) {
      console.error("Error adding parent:", error);
      setErrorMessage("Failed to add parent. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2 className="fw-bold mb-3">Add Parent</h2>
      
      {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Show error message */}

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <label>Parent First Name</label>
            <input type="text" name="parentFirstName" value={formData.parentFirstName} onChange={handleChange} required />
          </div>

          <div className="col-md-6">
            <label>Parent Last Name</label>
            <input type="text" name="parentLastName" value={formData.parentLastName} onChange={handleChange} required />
          </div>

          <div className="col-md-6">
            <label>Mobile Number</label>
            <input type="text" name="mobNo" value={formData.mobNo} onChange={handleChange} required />
          </div>

          <div className="col-md-12">
            <label>Address</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
          </div>

          <div className="col-md-6">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="col-md-6">
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>

          <div className="col-12 text-center">
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? "Adding..." : "Add Parent"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddParent;
