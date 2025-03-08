import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";

const ViewStudent = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");
  const [editingStudent, setEditingStudent] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8080/getStudents");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
      setError("Failed to load students data!");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this student?")) return;
    try {
      await axios.delete(`http://localhost:8080/deleteStudent/${id}`);
      setStudents(students.filter((student) => student.id !== id));
    } catch (error) {
      console.error("Error deleting student:", error);
      setError("Failed to delete student.");
    }
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
    setModalVisible(true);
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:8080/editStudent/${editingStudent.id}`, editingStudent);
      setModalVisible(false);
      fetchStudents();
    } catch (error) {
      console.error("Error updating student:", error);
      setError("Failed to update student.");
    }
  };

  const handleChange = (e) => {
    setEditingStudent({ ...editingStudent, [e.target.name]: e.target.value });
  };

  return (
    <div className="student-list-container">
      <h2 className="fw-bold mb-3">List of Students</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Grade</th>
              <th>Age</th>
              <th>Pickup Stop</th>
              <th>Drop Stop</th>
              <th>Address</th>
              <th>Parent Name</th>
              <th>Parent Email</th>
              <th>Parent Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.length === 0 ? (
              <tr>
                <td colSpan="10" className="text-center">No students found.</td>
              </tr>
            ) : (
              students.map((student) => (
                <tr key={student.id}>
                  <td>{`${student.studentFirstName} ${student.studentLastName}`}</td>
                  <td>{student.studentGrade}</td>
                  <td>{student.studentAge}</td>
                  <td>{student.pickupStop}</td>
                  <td>{student.dropStop}</td>
                  <td>{student.address}</td>
                  <td>{`${student.parentFirstName} ${student.parentLastName}`}</td>
                  <td>{student.email}</td>
                  <td>{student.mobNo}</td>
                  <td>
                    <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(student)}>Edit</button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(student.id)}>Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Student Modal */}
      <Modal show={modalVisible} onHide={() => setModalVisible(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editingStudent && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Student Name</Form.Label>
                <Form.Control
                  type="text"
                  name="studentFirstName"
                  value={editingStudent.studentFirstName}
                  onChange={handleChange}
                />
                <Form.Control
                  type="text"
                  name="studentLastName"
                  value={editingStudent.studentLastName}
                  onChange={handleChange}
                  className="mt-2"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Grade</Form.Label>
                <Form.Control
                  type="text"
                  name="studentGrade"
                  value={editingStudent.studentGrade}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  name="studentAge"
                  value={editingStudent.studentAge}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Pickup Stop</Form.Label>
                <Form.Control
                  type="text"
                  name="pickupStop"
                  value={editingStudent.pickupStop}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Drop Stop</Form.Label>
                <Form.Control
                  type="text"
                  name="dropStop"
                  value={editingStudent.dropStop}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={editingStudent.address}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Parent Name</Form.Label>
                <Form.Control
                  type="text"
                  name="parentFirstName"
                  value={editingStudent.parentFirstName}
                  onChange={handleChange}
                />
                <Form.Control
                  type="text"
                  name="parentLastName"
                  value={editingStudent.parentLastName}
                  onChange={handleChange}
                  className="mt-2"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Parent Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={editingStudent.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Parent Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="mobNo"
                  value={editingStudent.mobNo}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalVisible(false)}>Close</Button>
          <Button variant="primary" onClick={handleSave}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ViewStudent;
