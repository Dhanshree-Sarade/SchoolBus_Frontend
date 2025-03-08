import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewParent = () => {
  const [parents, setParents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedParent, setSelectedParent] = useState(null);
  const [formData, setFormData] = useState({
    parentFirstName: "",
    parentLastName: "",
    mobNo: "",
    address: "",
    email: "",
  });

  const [errors, setErrors] = useState({}); // Store validation errors

  useEffect(() => {
    const fetchParents = async () => {
      try {
        const response = await axios.get("http://localhost:8080/getParent");
        setParents(response.data);
      } catch (error) {
        console.error("Error fetching parents:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchParents();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Clear error when user starts typing
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!/^[A-Za-z]{2,}$/.test(formData.parentFirstName))
      newErrors.parentFirstName = "First name must be at least 2 letters.";

    if (!/^[A-Za-z]{2,}$/.test(formData.parentLastName))
      newErrors.parentLastName = "Last name must be at least 2 letters.";

    if (!/^\d{10}$/.test(formData.mobNo))
      newErrors.mobNo = "Mobile number must be exactly 10 digits.";

    if (formData.address.trim().length < 5)
      newErrors.address = "Address must be at least 5 characters.";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email address.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleEdit = (parent) => {
    setSelectedParent(parent);
    setFormData({
      parentFirstName: parent.parentFirstName,
      parentLastName: parent.parentLastName,
      mobNo: parent.mobNo,
      address: parent.address,
      email: parent.email,
    });

    const modal = new window.bootstrap.Modal(document.getElementById("editModal"));
    modal.show();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Stop submission if validation fails

    try {
      await axios.put(
        `http://localhost:8080/editParent/${selectedParent.pid}`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      alert("Parent details updated successfully!");
      const modal = new window.bootstrap.Modal(document.getElementById("editModal"));
      modal.hide();
      setSelectedParent(null);
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

  const handleDelete = async (pid) => {
    try {
      await axios.delete(`http://localhost:8080/deleteParent/${pid}`);
      alert("Parent deleted successfully!");
      setParents(parents.filter((parent) => parent.pid !== pid));
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
                  <button className="btn btn-warning" onClick={() => handleEdit(parent)}>
                    Edit
                  </button>
                  <button className="btn btn-danger ms-2" onClick={() => handleDelete(parent.pid)}>
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
                {[
                  { label: "First Name", name: "parentFirstName" },
                  { label: "Last Name", name: "parentLastName" },
                  { label: "Mobile Number", name: "mobNo" },
                  { label: "Address", name: "address" },
                  { label: "Email", name: "email", type: "email" }
                ].map(({ label, name, type = "text" }) => (
                  <div className="mb-3" key={name}>
                    <label>{label}</label>
                    <input
                      type={type}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      className={`form-control ${errors[name] ? "is-invalid" : ""}`}
                      required
                    />
                    {errors[name] && <div className="invalid-feedback">{errors[name]}</div>}
                  </div>
                ))}

                <div className="mb-3 d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary">Save Changes</button>
                  <button type="button" className="btn btn-secondary ms-2" data-bs-dismiss="modal">Cancel</button>
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
