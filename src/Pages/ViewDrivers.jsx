import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewDrivers = () => {
  const [drivers, setDrivers] = useState([]);
  const [editDriver, setEditDriver] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Fetch drivers from backend
  useEffect(() => {
    fetchDrivers();
  }, []);

  const fetchDrivers = () => {
    axios.get("http://localhost:8080/getDriver")
      .then(response => setDrivers(response.data))
      .catch(error => console.error("Error fetching drivers:", error));
  };

  // Handle Delete Driver
  const handleDelete = async (driverId) => {
    if (window.confirm("Are you sure you want to delete this driver?")) {
      try {
        await axios.delete(`http://localhost:8080/deleteDriver/${driverId}`);
        alert("Driver deleted successfully!");
        fetchDrivers(); // Refresh list
      } catch (error) {
        console.error("Error deleting driver:", error);
        alert("Failed to delete driver!");
      }
    }
  };

  // Handle Edit Driver
  const handleEdit = (driver) => {
    setEditDriver(driver);
    setShowModal(true);
  };

  // Handle Input Change for Edit Form
  const handleChange = (e) => {
    setEditDriver({ ...editDriver, [e.target.name]: e.target.value });
  };

  // Handle Update Driver
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8080/editDriver", editDriver);
      alert("Driver updated successfully!");
      setShowModal(false);
      fetchDrivers(); // Refresh list
    } catch (error) {
      console.error("Error updating driver:", error);
      alert("Failed to update driver!");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="fw-bold mb-3">Driver List</h2>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {drivers.length > 0 ? (
            drivers.map(driver => (
              <tr key={driver.did}>
                <td>{driver.did}</td>
                <td>{driver.driverFirstName}</td>
                <td>{driver.driverLastName}</td>
                <td>{driver.driverMob}</td>
                <td>{driver.driverEmail}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(driver)}>
                    Edit
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(driver.did)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">No drivers found.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Edit Driver Modal */}
      {showModal && editDriver && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Driver</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleUpdate}>
                  <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input type="text" name="driverFirstName" className="form-control" value={editDriver.driverFirstName} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input type="text" name="driverLastName" className="form-control" value={editDriver.driverLastName} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Mobile</label>
                    <input type="text" name="driverMob" className="form-control" value={editDriver.driverMob} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" name="driverEmail" className="form-control" value={editDriver.driverEmail} onChange={handleChange} required />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                    <button type="submit" className="btn btn-primary">Update Driver</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewDrivers;
