import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewStudent = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");

  // Fetch students data on component mount
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:8080/getStudents");
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
        setError("Failed to load students data!");
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="student-list-container">
      <h2 className="fw-bold mb-3">List of Students</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Grade</th>
              <th>Age</th>
              <th>Pickup Stop</th>
              <th>Drop Stop</th>
              <th>Parent ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center">
                  No students found.
                </td>
              </tr>
            ) : (
              students.map((student) => (
                <tr key={student.id}>
                  <td>{student.studentFirstName}</td>
                  <td>{student.studentLastName}</td>
                  <td>{student.studentGrade}</td>
                  <td>{student.studentAge}</td>
                  <td>{student.pickupStop}</td>
                  <td>{student.dropStop}</td>
                  <td>{student.parentId}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewStudent;
