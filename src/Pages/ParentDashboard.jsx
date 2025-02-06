import React, { useEffect, useState } from "react";
import axios from "axios";

const ParentDashboard = () => {
  const [studentStatus, setStudentStatus] = useState([]);
  const parentEmail = localStorage.getItem("parentEmail"); // Assuming email is stored after login

  useEffect(() => {
    fetchStudentStatus();
  }, []);

  const fetchStudentStatus = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/parent/status?email=${parentEmail}`);
      setStudentStatus(response.data);
    } catch (error) {
      console.error("Error fetching student status:", error);
    }
  };

  return (
    <div className="parent-dashboard">
      <h2>Parent Dashboard</h2>
      <h3>Student Pickup & Drop Status</h3>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Pickup Status</th>
            <th>Drop Status</th>
            <th>Driver Issue</th>
          </tr>
        </thead>
        <tbody>
          {studentStatus.length > 0 ? (
            studentStatus.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.pickupStatus || "Not Updated"}</td>
                <td>{student.dropStatus || "Not Updated"}</td>
                <td>{student.issue || "No Issues"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ParentDashboard;
