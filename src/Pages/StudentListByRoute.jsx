import React, { useState, useEffect } from "react";
import axios from "axios";

const StudentListByRoute = () => {
  const [busRoutes, setBusRoutes] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState("");
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/bus-routes/all") // Get all routes
      .then((response) => {
        setBusRoutes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching routes:", error);
        setError("Failed to load bus routes.");
      });
  }, []);

  const handleRouteChange = (e) => {
    const route = e.target.value;
    setSelectedRoute(route);

    if (route) {
      axios
        .get(`http://localhost:8080/by-route?routeName=${route}`)
        .then((response) => {
          setStudents(response.data);
        })
        .catch((error) => {
          console.error("Error fetching students:", error);
          setError("Failed to load students.");
        });
    } else {
      setStudents([]);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Find Students by Bus Route</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="form-group">
        <label>Select Route</label>
        <select
          className="form-control"
          value={selectedRoute}
          onChange={handleRouteChange}
        >
          <option value="">Select a Route</option>
          {busRoutes.map((route) => (
            <option key={route.id} value={route.routeName}>
              {route.routeName}
            </option>
          ))}
        </select>
      </div>

      {students.length > 0 && (
        <div className="mt-4">
          <h4>Students Assigned to {selectedRoute}</h4>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Grade</th>
                <th>Pickup Stop</th>
                <th>Parent Name</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>
                    {student.studentFirstName} {student.studentLastName}
                  </td>
                  <td>{student.studentGrade}</td>
                  <td>{student.pickupStop}</td>
                  <td>
                    {student.parentFirstName} {student.parentLastName}
                  </td>
                  <td>{student.mobNo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StudentListByRoute;
