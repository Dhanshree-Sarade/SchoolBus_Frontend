import React, { useState } from "react";
import axios from "axios";
import "./AddParent.css";

const AddParent = () => {
  const [formData, setFormData] = useState({
    parentFirstName: "",
    parentLastName: "",
    mobNo: "",
    address: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    let newErrors = {};
    const nameRegex = /^[A-Za-z]+$/;
    const mobileRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!formData.parentFirstName.match(nameRegex)) {
      newErrors.parentFirstName = "First name should contain only letters";
    }
    if (!formData.parentLastName.match(nameRegex)) {
      newErrors.parentLastName = "Last name should contain only letters";
    }
    if (!formData.mobNo.match(mobileRegex)) {
      newErrors.mobNo = "Mobile number must be 10 digits";
    }
    if (!formData.email.match(emailRegex)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.password.match(passwordRegex)) {
      newErrors.password = "Password must be at least 6 characters, include letters and numbers";
    }
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setErrorMessage("");
    try {
      await axios.post("http://localhost:8080/addParent", formData, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Parent added successfully!");
      setFormData({ parentFirstName: "", parentLastName: "", mobNo: "", address: "", email: "", password: "" });
    } catch (error) {
      setErrorMessage("Failed to add parent. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2 className="fw-bold mb-3">Add Parent</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="row">
          {["parentFirstName", "parentLastName", "mobNo", "address", "email", "password"].map((field, idx) => (
            <div key={idx} className={`col-md-${field === "address" ? 12 : 6}`}>
              <label>{field.replace(/([A-Z])/g, " $1").trim()}</label>
              <input
                type={field === "email" ? "email" : field === "password" ? "password" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
              />
              {errors[field] && <small className="error-text">{errors[field]}</small>}
            </div>
          ))}
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
