import React, { useEffect, useState } from "react";
import axios from "axios";

const DriverDashboard = () => {
  const [studentCount, setStudentCount] = useState(0);
  const [busRoutes, setBusRoutes] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch driver details from localStorage
  const storedUser = JSON.parse(localStorage.getItem("userData"));
  const driverId = storedUser?.userId || ""; 

  useEffect(() => {
    if (driverId) {
      fetchStudentCount();
      fetchBusRoutes();
    }
  }, [driverId]);

  // Fetch assigned student count
  const fetchStudentCount = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:8080/assigned/${driverId}`);
      setStudentCount(response.data.length || 0); // Get the array length
    } catch (error) {
      console.error("Error fetching student count:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch bus route details
  const fetchBusRoutes = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/assigned-bus/busRouteByDriverId/${driverId}`);
      setBusRoutes(response.data || []);
    } catch (error) {
      console.error("Error fetching bus routes:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Driver Dashboard</h2>

      <div className="row mt-3">
        {/* Student Count Card */}
        <div className="col-md-6">
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">Assigned Students</div>
            <div className="card-body">
              {loading ? <p>Loading...</p> : <h4 className="card-title">{studentCount}</h4>}
            </div>
          </div>
        </div>

        {/* Bus Route Details */}
        <div className="col-md-6">
          <div className="card text-white bg-success mb-3">
            <div className="card-header">Bus Routes</div>
            <div className="card-body">
              {busRoutes.length > 0 ? (
                <ul>
                  {busRoutes.map((route, index) => (
                    <li key={index}>{route.routeName} {route.startLocation}  {route.endLocation}</li>
                  ))}
                </ul>
              ) : (
                <p>No routes assigned</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverDashboard;
