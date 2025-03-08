import React, { useState, useEffect } from "react";
import axios from "axios";

const ReportIssue = () => {
  const [issueType, setIssueType] = useState("");
  const [description, setDescription] = useState("");
  const [driverEmail, setDriverEmail] = useState("");
  const [driverId, setDriverId] = useState(null);
  const [studentsEmails, setStudentsEmails] = useState([]);
  const [busRoutes, setBusRoutes] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Retrieve driver details from localStorage
    const storedUserString = localStorage.getItem("userData");
    if (storedUserString) {
      const storedUser = JSON.parse(storedUserString);
      console.log("Driver ID:", storedUser.userId);
      console.log("Driver Email:", storedUser.email);
      setDriverEmail(storedUser.email);
      setDriverId(storedUser.userId);
      fetchBusRoutes(storedUser.userId);
      fetchStudentsEmails(storedUser.userId);
    } else {
      console.log("No user data found in localStorage.");
      setError("No user data found.");
      setLoading(false);
    }
  }, []);

  // Fetch assigned bus routes for the driver
  const fetchBusRoutes = (driverId) => {
    axios
      .get(`http://localhost:8080/api/assigned-bus/busRouteByDriverId/${driverId}`)
      .then((response) => {
        setBusRoutes(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching bus routes:", error);
        setError("Error fetching bus routes.");
        setLoading(false);
      });
  };

  // Fetch assigned students' emails for the driver
  const fetchStudentsEmails = async (driverId) => {
    try {
      if (!driverId) {
        console.error("Driver ID is undefined");
        return;
      }

      const response = await axios.get(`http://localhost:8080/assigned/${driverId}`);

      if (response.data && Array.isArray(response.data)) {
        const extractedEmails = response.data.map((student) => student.email);
        console.log("Fetched Students Emails:", extractedEmails);
        setStudentsEmails(extractedEmails);
      }
    } catch (error) {
      console.error("Error fetching students:", error);
      alert("Failed to load student data.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!issueType || !description || !selectedRoute || studentsEmails.length === 0) {
      alert("Please select a bus route, fill all fields, and ensure students are assigned.");
      return;
    }

    const issueData = {
      issueType,
      description,
      driverEmail,
      driverId,          // Pass the driver id here
      busRoute: selectedRoute,
      studentsEmails,    // Pass fetched student emails
    };

    try {
      await axios.post("http://localhost:8080/api/assigned-bus/reportIssue", issueData);
      alert("Issue reported successfully! Email sent.");
      setIssueType("");
      setDescription("");
      setSelectedRoute("");
    } catch (error) {
      console.error("Error reporting issue:", error);
      alert("Failed to report issue.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Report an Issue</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Select Bus Route */}
          <div className="mb-3">
            <label className="form-label">Select Bus Route</label>
            <select
              className="form-control"
              value={selectedRoute}
              onChange={(e) => setSelectedRoute(e.target.value)}
              required
            >
              <option value="">Select Route</option>
              {busRoutes.map((route) => (
                <option key={route.routeId} value={route.routeName}>
                  {route.routeName} - {route.busNumber} ({route.busNumberPlate})
                </option>
              ))}
            </select>
          </div>

          {/* Select Issue Type */}
          <div className="mb-3">
            <label className="form-label">Issue Type</label>
            <select
              className="form-control"
              value={issueType}
              onChange={(e) => setIssueType(e.target.value)}
              required
            >
              <option value="">Select Issue</option>
              <option value="Bus Breakdown">Bus Breakdown</option>
              <option value="Accident">Accident</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Issue Description */}
          <div className="mb-3">
            <label className="form-label">Issue Description</label>
            <textarea
              className="form-control"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-danger">
            Submit Report
          </button>
        </form>
      )}
    </div>
  );
};

export default ReportIssue;
