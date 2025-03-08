import { useState, useEffect } from "react";
import axios from "axios";

const AddBusRoute = () => {
  const [routeName, setRouteName] = useState("");
  const [busNumber, setBusNumber] = useState(""); 
  const [busNumberPlate, setBusNumberPlate] = useState(""); // New state for bus number plate
  const [stops, setStops] = useState([{ stopName: "" }]);
  const [busRoutes, setBusRoutes] = useState([]);

  // Fetch existing routes
  useEffect(() => {
    fetchRoutes();
  }, []);

  const fetchRoutes = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/bus-routes/all");
      setBusRoutes(response.data);
    } catch (error) {
      console.error("Error fetching routes", error);
    }
  };

  const handleStopChange = (index, event) => {
    const values = [...stops];
    values[index][event.target.name] = event.target.value;
    setStops(values);
  };

  const addStop = () => {
    setStops([...stops, { stopName: "" }]);
  };

  const removeStop = (index) => {
    const values = [...stops];
    values.splice(index, 1);
    setStops(values);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const routeData = { 
      routeName, 
      busNumber, 
      busNumberPlate, // Include bus number plate in request
      stops: stops.map(stop => ({ stopName: stop.stopName })) 
    };

    try {
      await axios.post("http://localhost:8080/api/bus-routes/add", routeData, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Bus route added successfully!");
      setRouteName("");
      setBusNumber("");
      setBusNumberPlate(""); // Reset bus number plate
      setStops([{ stopName: "" }]);
      fetchRoutes(); // Refresh routes list
    } catch (error) {
      console.error("Error adding route", error);
      alert("Failed to add bus route");
    }
  };

  return (
    <div>
      <h2>Add Bus Route</h2>
      <form onSubmit={handleSubmit}>
        <label>Route Name:</label>
        <input 
          type="text" 
          value={routeName} 
          onChange={(e) => setRouteName(e.target.value)} 
          required 
        />

        <label>Bus Number:</label>
        <input 
          type="text" 
          value={busNumber} 
          onChange={(e) => setBusNumber(e.target.value)} 
          required 
        />

        <label>Bus Number Plate:</label> {/* New field */}
        <input 
          type="text" 
          value={busNumberPlate} 
          onChange={(e) => setBusNumberPlate(e.target.value)} 
          required 
        />

        <h3>Stops:</h3>
        {stops.map((stop, index) => (
          <div key={index}>
            <input
              type="text"
              name="stopName"
              value={stop.stopName}
              onChange={(e) => handleStopChange(index, e)}
              placeholder="Stop Name"
              required
            />
            <button type="button" onClick={() => removeStop(index)}>Remove</button>
          </div>
        ))}

        <button type="button" onClick={addStop}>Add Stop</button>
        <button type="submit">Submit Route</button>
      </form>

      <h2>Existing Bus Routes</h2>
      <ul>
        {busRoutes.map((route) => (
          <li key={route.id}>
            <strong>{route.routeName} (Bus {route.busNumber} - {route.busNumberPlate})</strong> {/* Display bus number plate */}
            <ul>
              {route.stops.map((stop) => (
                <li key={stop.id}>{stop.stopName}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddBusRoute;
