import React, { useEffect, useState } from "react";
import axios from "axios";

const DriverDashboard = () => {
  const [students, setStudents] = useState([]);
  const [issueMessage, setIssueMessage] = useState("");
  const driverEmail = localStorage.getItem("driverEmail"); // Assuming email is stored after login

  useEffect(() => {
    fetchAssignedStudents();
  }, []);

  const fetchAssignedStudents = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/driver/students?email=${driverEmail}`);
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const updateStatus = async (studentId, type) => {
    try {
      await axios.post(`http://localhost:8080/driver/updateStatus`, {
        studentId,
        type,
      });

      fetchAssignedStudents(); // Refresh data
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const reportIssue = async () => {
    try {
      await axios.post("http://localhost:8080/driver/reportIssue", {
        email: driverEmail,
        issue: issueMessage,
      });

      setIssueMessage(""); // Clear issue input
      alert("Issue reported successfully!");
    } catch (error) {
      console.error("Error reporting issue:", error);
    }
  };

  return (
    <div className="driver-dashboard">
      <h2>Driver Dashboard</h2>
      <h3>Manage Student Pickup & Drop</h3>

      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Pickup Status</th>
            <th>Drop Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.pickupStatus || "Pending"}</td>
                <td>{student.dropStatus || "Pending"}</td>
                <td>
                  <button onClick={() => updateStatus(student.id, "pickup")}>Mark Picked Up</button>
                  <button onClick={() => updateStatus(student.id, "drop")}>Mark Dropped</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No students assigned</td>
            </tr>
          )}
        </tbody>
      </table>

      <h3>Report an Issue</h3>
      <input
        type="text"
        value={issueMessage}
        onChange={(e) => setIssueMessage(e.target.value)}
        placeholder="Enter issue (e.g., bus breakdown)"
      />
      <button onClick={reportIssue}>Submit Issue</button>
    </div>
  );
};

export default DriverDashboard;
