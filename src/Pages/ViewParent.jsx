import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewParent = () => {
  const [parents, setParents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedParent, setSelectedParent] = useState(null); // For editing
  const [formData, setFormData] = useState({
    parentFirstName: "",
    parentLastName: "",
    mobNo: "",
    address: "",
    email: "",
  });

  // Fetch parents from the backend
  useEffect(() => {
    const fetchParents = async () => {
      try {
        const response = await axios.get("http://localhost:8080/getParent");
        console.log("Fetched Parents Data:", response.data); // Log the data before handling any error
        setParents(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching parents:", error);
        setLoading(false);
      }
    };

    fetchParents();
  }, []);

  // Handle input changes in edit form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Edit parent
  const handleEdit = (parent) => {
    console.log("Selected Parent:", parent); // Debugging line to check the parent object
    setSelectedParent(parent); // Set the parent to edit
    setFormData({
      parentFirstName: parent.parentFirstName,
      parentLastName: parent.parentLastName,
      mobNo: parent.mobNo,
      address: parent.address,
      email: parent.email,
    });
    // Show the modal after setting selected parent
    const modal = new window.bootstrap.Modal(document.getElementById("editModal"));
    modal.show();
  };
  

  // Submit edited parent data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8080/editParent/${selectedParent.pid}`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Submitting with ID:", selectedParent.id); // Check the id before sending request
      alert("Parent details updated successfully!");
      const modal = new window.bootstrap.Modal(document.getElementById("editModal"));
      modal.hide(); // Hide the modal after submission
      setSelectedParent(null); // Close the form after submission
      setFormData({
        parentFirstName: "",
        parentLastName: "",
        mobNo: "",
        address: "",
        email: "",
      });
      setLoading(true);
      const updatedParents = await axios.get("http://localhost:8080/getParent");
      setParents(updatedParents.data);
      setLoading(false);
    } catch (error) {
      console.error("Error updating parent:", error);
      alert("Failed to update parent details.");
    }
  };

  // Delete parent
  const handleDelete = async (pid) => {
    try {
      console.log("Deleting parent with pid:", pid); // Debugging line to ensure pid is passed correctly
      await axios.delete(`http://localhost:8080/deleteParent/${pid}`);
      alert("Parent deleted successfully!");
      setParents(parents.filter((parent) => parent.pid !== pid)); // Make sure you're filtering with 'pid'
    } catch (error) {
      console.error("Error deleting parent:", error);
      alert("Failed to delete parent.");
    }
  };
  


  return (
    <div className="container mt-4">
      <h2 className="fw-bold mb-3 text-center">Parent List</h2>

      {loading ? (
        <p>Loading parents...</p>
      ) : parents.length === 0 ? (
        <p>No parents found.</p>
      ) : (
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Mobile Number</th>
              <th>Address</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parents.map((parent, index) => (
              <tr key={parent.pid}>
                <td>{index + 1}</td>
                <td>{parent.parentFirstName}</td>
                <td>{parent.parentLastName}</td>
                <td>{parent.mobNo}</td>
                <td>{parent.address}</td>
                <td>{parent.email}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleEdit(parent)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => handleDelete(parent.pid)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Modal for editing parent */}
      <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editModalLabel">Edit Parent Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="parentFirstName"
                    value={formData.parentFirstName}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="parentLastName"
                    value={formData.parentLastName}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>Mobile Number</label>
                  <input
                    type="text"
                    name="mobNo"
                    value={formData.mobNo}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3 d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary ms-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewParent;
