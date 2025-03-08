// import { useState } from "react";

// const BusRoutesList = () => {
//   const [routes] = useState([
//     {
//       id: 1,
//       routeName: "Route 1: Downtown to City Mall",
//       stops: ["Main Street", "Central Park", "Library", "Town Hall", "City Mall"],
//     },
//     {
//       id: 2,
//       routeName: "Route 2: Airport to University",
//       stops: ["Airport Terminal", "Metro Station", "Tech Park", "University Gate", "Library"],
//     },
//     {
//       id: 3,
//       routeName: "Route 3: Residential Area to Office Park",
//       stops: ["Greenwood Apartments", "Supermarket", "Community Center", "Tech Hub", "Office Park"],
//     },
//     {
//       id: 4,
//       routeName: "Route 4: Railway Station to Shopping District",
//       stops: ["Railway Station", "Bus Depot", "Stadium", "Downtown", "Shopping District"],
//     },
//   ]);

//   return (
//     <div>
//       <h2>Bus Routes</h2>
//       {routes.map((route) => (
//         <div key={route.id} style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
//           <h3>{route.routeName}</h3>
//           <ul>
//             {route.stops.map((stop, index) => (
//               <li key={index}>{index + 1}. {stop}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BusRoutesList;

import { useState, useEffect } from "react";
import axios from "axios";

const BusRoutesList = () => {
  const [routes, setRoutes] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [routeForm, setRouteForm] = useState({
    id: "",
    routeName: "",
    busNumber: "",
    busNumberPlate: "",
    stops: [],
  });

  useEffect(() => {
    fetchRoutes();
  }, []);

  const fetchRoutes = () => {
    axios.get("http://localhost:8080/api/bus-routes/all").then((response) => {
      setRoutes(response.data);
      console.log("data", response.data);
    });
  };

  const fetchStops = () => {
    axios.get("http://localhost:8080/api/bus-stops/all").then((response) => {
      console.log("Fetched Routes:", response.data); // Debugging
      // Instead of replacing routes, update the selected route with the new stops
      if (selectedRoute) {
        setRouteForm((prevState) => ({
          ...prevState,
          stops: response.data.filter(stop => stop.routeId === prevState.id), // Filter stops for the selected route
        }));
      }
    });
  };


  const handleEditClick = (route) => {
    setSelectedRoute(route);
    setRouteForm({
      id: route.id,
      routeName: route.routeName,
      busNumber: route.busNumber,
      busNumberPlate: route.busNumberPlate,
      stops: route.stops || [], // Ensure stops are not null
    });
  };

  const handleInputChange = (e) => {
    setRouteForm({ ...routeForm, [e.target.name]: e.target.value });
  };

  // const handleStopChange = (index, e) => {
  //   const updatedStops = [...routeForm.stops];
  //   updatedStops[index][e.target.name] = e.target.value;
  //   setRouteForm({ ...routeForm, stops: updatedStops });
  // };

  // const addNewStop = () => {
  //   setRouteForm({
  //     ...routeForm,
  //     stops: [...routeForm.stops, { stopName: "", stopLocation: "" }],
  //   });
  // };

  const removeStop = (index) => {
    const updatedStops = routeForm.stops.filter((_, i) => i !== index);
    setRouteForm({ ...routeForm, stops: updatedStops });
  };

  const handleUpdateRoute = () => {
    axios
      .put(`http://localhost:8080/api/bus-routes/update/${routeForm.id}`, routeForm)
      .then(() => {
        fetchRoutes();
        setSelectedRoute(null);
      })
      .catch((error) => {
        console.error("Error updating route:", error);
      });
  };

  // const handleStopChange = (index, e) => {
  //   const updatedStops = [...routeForm.stops];
  //   updatedStops[index][e.target.name] = e.target.value;
  //   setRouteForm({ ...routeForm, stops: updatedStops });

  //   // Send API request to update the stop immediately
  //   axios
  //     .put(`http://localhost:8080/api/bus-stops/stops/update/${updatedStops[index].id}`, updatedStops[index])
  //     .then(() => {

  //       console.log("Bus stop updated successfully")
  //     })
  //     .catch((error) => console.error("Error updating bus stop:", error));
  // };

  const handleStopChange = (index, e) => {
    const updatedStops = [...routeForm.stops];
    updatedStops[index][e.target.name] = e.target.value;
    setRouteForm({ ...routeForm, stops: updatedStops });
  
    // Only update if the stop has a valid ID
    if (updatedStops[index].id) {
      axios
        .put(`http://localhost:8080/api/bus-stops/stops/update/${updatedStops[index].id}`, updatedStops[index])
        .then(() => {
          console.log("Bus stop updated successfully");
        })
        .catch((error) => console.error("Error updating bus stop:", error));
    } else {
      console.warn("Skipping update: Stop ID is undefined (newly added stop).");
    }
  };
  

  const saveStops = () => {
    alert("button clicked..");
    if (!routeForm.id) {
      console.error("No bus route selected");
      return;
    }
  
    const stopsToSave = routeForm.stops.map(stop => ({
      stopName: stop.stopName,
      stopLocation: stop.stopLocation || "", // Handle undefined values
      busRouteId: routeForm.id
    }));
  
    console.log("Saving Stops:", stopsToSave);
    console.log("Bus Route Id : ", routeForm.id);
  
    axios.post("http://localhost:8080/api/bus-stops/add", stopsToSave)
      .then(response => {
        console.log("Bus stops added successfully:", response.data);
        alert("Bus stops added successfully!");
      })
      .catch(error => {
        console.error("Error adding bus stops:", error);
      });
  };
  

  const addNewStop = () => {
    alert("button clicked..");
    if (!routeForm.id) {
      console.error("No bus route selected");
      return;
    }

    const newStop = {
      stopName: "",
      //stopLocation: "",
      busRouteId: routeForm.id // Include the selected route ID
    };

    console.log("New Stop Data Sent:", newStop);

    console.log("Bus Route Id is : ", routeForm.id);
    axios
      .post("http://localhost:8080/api/bus-stops/add", newStop)
      .then((response) => {
        // Add the newly created stop to the UI immediately
        const updatedStops = [...routeForm.stops, response.data];
        setRouteForm((prevState) => ({
          ...prevState,
          stops: updatedStops,
        }));
      })
      .catch((error) => {
        console.error("Error adding new bus stop:", error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/bus-routes/delete/${id}`)
      .then(() => {
        fetchRoutes();
      })
      .catch((error) => {
        console.error("Error deleting route:", error);
      });
  };


  return (
    <div>
      <style>
        {`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .modal-content {
            background: white;
            padding: 20px;
            border-radius: 10px;
            width: 400px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            max-height: 80vh;
            overflow-y: auto;
          }
          .modal-content label {
            display: block;
            margin: 10px 0 5px;
          }
          .modal-content input {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
          .modal-content button {
            margin-top: 10px;
            padding: 10px;
            border: none;
            cursor: pointer;
            border-radius: 5px;
          }
          .modal-content button:first-of-type {
            background-color: green;
            color: white;
          }
          .modal-content button:last-of-type {
            background-color: gray;
            color: white;
            margin-left: 10px;
          }
          .stop-container {
            border: 1px solid #ccc;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
          }
          .remove-stop {
            background: red;
            color: white;
            padding: 5px;
            border: none;
            cursor: pointer;
            border-radius: 3px;
            margin-top: 5px;
          }
        `}
      </style>

      <h2>Bus Routes</h2>
      {routes.map((route) => (
        <div key={route.id} style={{ marginBottom: "20px", padding: "10px", border: "1px solid #ccc" }}>
          <h3>{route.routeName}</h3>
          <ul>
            {route.stops.map((stop, index) => (
              <li key={index}>{index + 1}. {stop.stopName}</li>
            ))}
          </ul>
          <button onClick={() => handleEditClick(route)} style={{ marginRight: "10px", backgroundColor: "blue", color: "white", padding: "5px", cursor: "pointer" }}>
            Edit
          </button>
          <button onClick={() => handleDelete(route.id)} style={{ backgroundColor: "red", color: "white", padding: "5px", cursor: "pointer" }}>
            Delete Route
          </button>
        </div>
      ))}

      {selectedRoute && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Edit Bus Route</h2>
            <label>Route Name:</label>
            <input type="text" name="routeName" value={routeForm.routeName} onChange={handleInputChange} />
            <label>Bus Number:</label>
            <input type="text" name="busNumber" value={routeForm.busNumber} onChange={handleInputChange} />
            <label>Bus Number Plate:</label>
            <input type="text" name="busNumberPlate" value={routeForm.busNumberPlate} onChange={handleInputChange} />
            <h3>Bus Stops</h3>
            {routeForm.stops.map((stop, index) => (
              <div key={index} className="stop-container">
                <label>Stop Name:</label>
                <input
                  type="text"
                  name="stopName"
                  value={stop.stopName}
                  onChange={(e) => handleStopChange(index, e)}
                />
                <button className="remove-stop" onClick={() => removeStop(index)}>Remove</button>
              </div>
            ))}

            {/* Button to add a new input field */}
            <button
              onClick={() => {
                const newStop = { stopName: "", stopLocation: "", busRouteId: routeForm.id };
                setRouteForm((prevState) => ({
                  ...prevState,
                  stops: [...prevState.stops, newStop],
                }));
              }}
              style={{ backgroundColor: "blue", color: "white", padding: "5px", cursor: "pointer", marginTop: "10px" }}
            >
              Add Stop
            </button>

            {/* Button to save all stops to the backend */}
            <button
              onClick={saveStops}
              style={{ backgroundColor: "green", color: "white", padding: "5px", cursor: "pointer", marginTop: "10px", marginLeft: "10px" }}
            >
              Save Stops
            </button>


            <button onClick={handleUpdateRoute}>Save</button>
            <button onClick={() => setSelectedRoute(null)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusRoutesList;
