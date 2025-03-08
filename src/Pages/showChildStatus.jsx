import React, { useEffect, useState } from "react";
import axios from "axios";

const ShowChildStatus = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchStudentStatus();
  }, []);

  const fetchStudentStatus = async () => {
    try {
      // Retrieve parent details from localStorage
      const storedUserString = localStorage.getItem("userData");
      if (!storedUserString) {
        setError("User not found in localStorage.");
        setLoading(false);
        return;
      }
      const { email } = JSON.parse(storedUserString);

      // Call the API with the parent's email as query param
      const response = await axios.get("http://localhost:8080/find-student-by-email", {
        params: { email },
      });
      setStudents(response.data);
    } catch (err) {
      console.error("Error fetching student status:", err);
      setError("Failed to load student status.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="fw-bold mb-3">Child Pickup & Drop Status</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : students.length === 0 ? (
        <div className="alert alert-info">No child records found.</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Grade</th>
                <th>Bus Number</th>
                <th>Pickup Stop</th>
                <th>Pickup Time</th>
                <th>Drop Stop</th>
                <th>Drop Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{`${student.studentFirstName} ${student.studentLastName}`}</td>
                  <td>{student.studentGrade}</td>
                  <td>{student.busNumber}</td>
                  <td>{student.pickupStop}</td>
                  <td>{student.pickupTime}</td>
                  <td>{student.dropStop}</td>
                  <td>{student.dropTime}</td>
                  <td>
                    <span
                      className={`badge ${
                        student.status === "Picked Up"
                          ? "bg-success"
                          : student.status === "Dropped"
                          ? "bg-primary"
                          : "bg-warning"
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ShowChildStatus;
