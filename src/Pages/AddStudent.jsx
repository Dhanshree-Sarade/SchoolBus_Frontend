// import React, { useState } from "react";
// import axios from "axios";


// const AddStudent = () => {
//   const [formData, setFormData] = useState({
//     studentFirstName: "",
//     studentLastName: "",
//     studentGrade: "",
//     studentAge: "",
//     parentId: "",  // Parent ID will be associated with the student
//     pickupStop: "",
//     dropStop: "",
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:8080/addStudent", formData, {
//         headers: { "Content-Type": "application/json" },
//       });
//       alert("Student added successfully!");
//       console.log("Response:", response.data);

//       // Reset the form after successful submission
//       setFormData({
//         studentFirstName: "",
//         studentLastName: "",
//         studentGrade: "",
//         studentAge: "",
//         parentId: "",
//         pickupStop: "",
//         dropStop: "",
//       });

//     } catch (error) {
//       console.error("Error adding student:", error);
//       alert("Failed to add student!");
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2 className="fw-bold mb-3">Add Student for Bus Service</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="row">
//           <div className="col-md-6">
//             <label>Student First Name</label>
//             <input type="text" name="studentFirstName" value={formData.studentFirstName} onChange={handleChange} required />
//           </div>

//           <div className="col-md-6">
//             <label>Student Last Name</label>
//             <input type="text" name="studentLastName" value={formData.studentLastName} onChange={handleChange} required />
//           </div>

//           <div className="col-md-6">
//             <label>Student Grade</label>
//             <input type="text" name="studentGrade" value={formData.studentGrade} onChange={handleChange} required />
//           </div>

//           <div className="col-md-6">
//             <label>Student Age</label>
//             <input type="number" name="studentAge" value={formData.studentAge} onChange={handleChange} required />
//           </div>

//           <div className="col-md-6">
//             <label>Parent ID (associated with the parent)</label>
//             <input type="text" name="parentId" value={formData.parentId} onChange={handleChange} required />
//           </div>

//           <div className="col-md-6">
//             <label>Pickup Stop</label>
//             <input type="text" name="pickupStop" value={formData.pickupStop} onChange={handleChange} required />
//           </div>

//           <div className="col-md-6">
//             <label>Drop Stop</label>
//             <input type="text" name="dropStop" value={formData.dropStop} onChange={handleChange} required />
//           </div>

//           <div className="col-12 text-center">
//             <button type="submit" className="btn-primary">Add Student</button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddStudent;


// import React, { useState } from "react";
// import axios from "axios";

// const AddStudent = () => {
//   const [formData, setFormData] = useState({
//     studentFirstName: "",
//     studentLastName: "",
//     studentGrade: "",
//     studentAge: "",
//     parentId: "", // Parent ID will be associated with the student
//     pickupStop: "",
//     dropStop: "",
//   });

//   const [error, setError] = useState(""); // State to handle errors
//   const [isLoading, setIsLoading] = useState(false); // State to manage loading

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError(""); // Reset error before each attempt

//     try {
//       const response = await axios.post("http://localhost:8080/addStudent", formData, {
//         headers: { "Content-Type": "application/json" },
//       });

//       // If student is added successfully
//       alert("Student added successfully!");
//       console.log("Response:", response.data);

//       // Reset the form after successful submission
//       setFormData({
//         studentFirstName: "",
//         studentLastName: "",
//         studentGrade: "",
//         studentAge: "",
//         parentId: "",
//         pickupStop: "",
//         dropStop: "",
//       });
//     } catch (error) {
//       console.error("Error adding student:", error);
//       setError("Failed to add student. Please try again!"); // Set error message
//     } finally {
//       setIsLoading(false); // Stop loading after the request is complete
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2 className="fw-bold mb-3">Add Student for Bus Service</h2>
      
//       {/* Show error message if exists */}
//       {error && <div className="alert alert-danger">{error}</div>}

//       <form onSubmit={handleSubmit}>
//         <div className="row">
//           <div className="col-md-6">
//             <label>Student First Name</label>
//             <input
//               type="text"
//               name="studentFirstName"
//               value={formData.studentFirstName}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="col-md-6">
//             <label>Student Last Name</label>
//             <input
//               type="text"
//               name="studentLastName"
//               value={formData.studentLastName}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="col-md-6">
//             <label>Student Grade</label>
//             <input
//               type="text"
//               name="studentGrade"
//               value={formData.studentGrade}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="col-md-6">
//             <label>Student Age</label>
//             <input
//               type="number"
//               name="studentAge"
//               value={formData.studentAge}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="col-md-6">
//             <label>Parent ID (associated with the parent)</label>
//             <input
//               type="text"
//               name="parentId"
//               value={formData.parentId}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="col-md-6">
//             <label>Pickup Stop</label>
//             <input
//               type="text"
//               name="pickupStop"
//               value={formData.pickupStop}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="col-md-6">
//             <label>Drop Stop</label>
//             <input
//               type="text"
//               name="dropStop"
//               value={formData.dropStop}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="col-12 text-center">
//             <button type="submit" className="btn-primary" disabled={isLoading}>
//               {isLoading ? "Adding..." : "Add Student"}
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddStudent;
// import React, { useState } from "react";
// import axios from "axios";

// const AddStudent = () => {
//   const [formData, setFormData] = useState({
//     // Student Fields
//     studentFirstName: "",
//     studentLastName: "",
//     studentGrade: "",
//     studentAge: "",
//     pickupStop: "",
//     dropStop: "",

//     // Parent Fields
//     parentFirstName: "",
//     parentLastName: "",
//     mobNo: "",
//     address: "",
//     email: "",
//     password: "",

//     // Pickup & Drop Location
//     pickupLocation: { lat: null, lon: null },
//     dropLocation: { lat: null, lon: null },
//   });

//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Function to get location coordinates for pickup & drop stops
//   const getLocation = async (address, type) => {
//     try {
//       const response = await fetch(
//         `https://nominatim.openstreetmap.org/search?format=json&q=${address}`
//       );
//       const data = await response.json();
//       if (data && data.length > 0) {
//         const { lat, lon } = data[0];
//         setFormData((prevData) => ({
//           ...prevData,
//           [type]: { lat: parseFloat(lat), lon: parseFloat(lon) },
//         }));
//       }
//     } catch (error) {
//       console.error("Error fetching location:", error);
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError("");

//     try {
//       // Get pickup & drop locations
//       await getLocation(formData.pickupStop, "pickupLocation");
//       await getLocation(formData.dropStop, "dropLocation");

//       // Send form data to backend
//       const response = await axios.post("http://localhost:8080/addStudent", formData, {
//         headers: { "Content-Type": "application/json" },
//       });

//       alert("Student added successfully!");
//       console.log("Response:", response.data);

//       // Reset form
//       setFormData({
//         studentFirstName: "",
//         studentLastName: "",
//         studentGrade: "",
//         studentAge: "",
//         pickupStop: "",
//         dropStop: "",
//         parentFirstName: "",
//         parentLastName: "",
//         mobNo: "",
//         address: "",
//         email: "",
//         password: "",
//         pickupLocation: { lat: null, lon: null },
//         dropLocation: { lat: null, lon: null },
//       });
//     } catch (error) {
//       console.error("Error adding student:", error);
//       setError("Failed to add student. Please try again!");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2 className="fw-bold mb-3">Add Student for Bus Service</h2>

//       {error && <div className="alert alert-danger">{error}</div>}

//       <form onSubmit={handleSubmit}>
//         <div className="row">
//           {/* Student Details */}
//           <div className="col-md-6">
//             <label>Student First Name</label>
//             <input type="text" name="studentFirstName" value={formData.studentFirstName} onChange={handleChange} required />
//           </div>

//           <div className="col-md-6">
//             <label>Student Last Name</label>
//             <input type="text" name="studentLastName" value={formData.studentLastName} onChange={handleChange} required />
//           </div>

//           <div className="col-md-6">
//             <label>Student Standard</label>
//             <input type="text" name="studentGrade" value={formData.studentGrade} onChange={handleChange} required />
//           </div>

//           <div className="col-md-6">
//             <label>Student Age</label>
//             <input type="number" name="studentAge" value={formData.studentAge} onChange={handleChange} required />
//           </div>

//           <div className="col-md-6">
//             <label>Pickup Stop</label>
//             <input type="text" name="pickupStop" value={formData.pickupStop} onChange={handleChange} required />
//           </div>

//           <div className="col-md-6">
//             <label>Drop Stop</label>
//             <input type="text" name="dropStop" value={formData.dropStop} onChange={handleChange} required />
//           </div>

//           {/* Parent Details */}
//           <h4 className="mt-4">Parent Details</h4>

//           <div className="col-md-6">
//             <label>Parent First Name</label>
//             <input type="text" name="parentFirstName" value={formData.parentFirstName} onChange={handleChange} required />
//           </div>

//           <div className="col-md-6">
//             <label>Parent Last Name</label>
//             <input type="text" name="parentLastName" value={formData.parentLastName} onChange={handleChange} required />
//           </div>

//           <div className="col-md-6">
//             <label>Mobile Number</label>
//             <input type="text" name="mobNo" value={formData.mobNo} onChange={handleChange} required />
//           </div>

//           <div className="col-md-6">
//             <label>Address</label>
//             <input type="text" name="address" value={formData.address} onChange={handleChange} required />
//           </div>

//           <div className="col-md-6">
//             <label>Email</label>
//             <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//           </div>

//           <div className="col-md-6">
//             <label>Password</label>
//             <input type="password" name="password" value={formData.password} onChange={handleChange} required />
//           </div>

//           <div className="col-12 text-center">
//             <button type="submit" className="btn-primary" disabled={isLoading}>
//               {isLoading ? "Adding..." : "Add Student"}
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
import axios from "axios";

const AddStudent = () => {
  const [formData, setFormData] = useState({
    studentFirstName: "",
    studentLastName: "",
    studentGrade: "",
    studentAge: "",
    pickupStop: "",
    dropStop: "English Medium School",
    parentFirstName: "",
    parentLastName: "",
    mobNo: "",
    address: "",
    email: "",
    password: "",
  });

  const [busStops, setBusStops] = useState([]);
  const [pickupDetails, setPickupDetails] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/bus-stops/all")
      .then((response) => {
        console.log("Bus Stops Data:", response.data);
        setBusStops(response.data);
      })
      .catch((error) => {
        console.error("Error fetching bus stops:", error);
        setError("Failed to load bus stops.");
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePickupChange = (e) => {
    const stopName = e.target.value;
    setFormData({ ...formData, pickupStop: stopName });

    if (stopName) {
      axios
        .get(`http://localhost:8080/api/bus-stops/details?stopName=${stopName}`)
        .then((response) => {
          if (response.data.busRoute) {
            setPickupDetails(response.data.busRoute);
          } else {
            setPickupDetails(null);
          }
        })
        .catch((error) => {
          console.error("Error fetching pickup details:", error);
          setPickupDetails(null);
        });
    } else {
      setPickupDetails(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:8080/addStudent",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      alert("Student added successfully!");
      setFormData({
        studentFirstName: "",
        studentLastName: "",
        studentGrade: "",
        studentAge: "",
        pickupStop: "",
        dropStop: "English Medium School",
        parentFirstName: "",
        parentLastName: "",
        mobNo: "",
        address: "",
        email: "",
        password: "",
      });
      setPickupDetails(null);
    } catch (error) {
      console.error("Error adding student:", error);
      setError("Failed to add student. Please try again!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="fw-bold mb-3">Add Student for Bus Service</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* Student Details */}
          <h4 className="mt-3">Student Details</h4>

          <div className="col-md-6">
            <label>First Name</label>
            <input
              type="text"
              name="studentFirstName"
              className="form-control"
              value={formData.studentFirstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label>Last Name</label>
            <input
              type="text"
              name="studentLastName"
              className="form-control"
              value={formData.studentLastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label>Grade</label>
            <input
              type="text"
              name="studentGrade"
              className="form-control"
              value={formData.studentGrade}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label>Age</label>
            <input
              type="number"
              name="studentAge"
              className="form-control"
              value={formData.studentAge}
              onChange={handleChange}
              required
            />
          </div>

          {/* Pickup Stop */}
          <div className="col-md-6">
            <label>Pickup Stop</label>
            <select
              name="pickupStop"
              className="form-control"
              value={formData.pickupStop}
              onChange={handlePickupChange}
              required
            >
              <option value="">Select Pickup Stop</option>
              {busStops.map((stop) => (
                <option key={stop.id} value={stop.stopName}>
                  {stop.stopName}
                </option>
              ))}
            </select>
          </div>

          {/* Drop Stop (Fixed) */}
          <div className="col-md-6">
            <label>Drop Stop (School)</label>
            <input
              type="text"
              name="dropStop"
              className="form-control"
              value={formData.dropStop}
              readOnly
            />
          </div>

          {/* Display Route Details */}
          {pickupDetails && (
            <div className="col-12 mt-3">
              <h5>Route Details</h5>
              <div className="card p-3">
                <p><strong>Route Name:</strong> {pickupDetails.routeName}</p>
                <p><strong>Bus Number:</strong> {pickupDetails.busNumber}</p>
                <p><strong>Number Plate:</strong> {pickupDetails.busNumberPlate}</p>
              </div>
            </div>
          )}

          {/* Parent Details */}
          <h4 className="mt-4">Parent Details</h4>

          <div className="col-md-6">
            <label>First Name</label>
            <input
              type="text"
              name="parentFirstName"
              className="form-control"
              value={formData.parentFirstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label>Last Name</label>
            <input
              type="text"
              name="parentLastName"
              className="form-control"
              value={formData.parentLastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label>Mobile Number</label>
            <input
              type="text"
              name="mobNo"
              className="form-control"
              value={formData.mobNo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* New Address Field */}
          <div className="col-md-6">
            <label>Address</label>
            <input
              type="text"
              name="address"
              className="form-control"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          {/* New Password Field */}
          <div className="col-md-6">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-12 text-center mt-4">
            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? "Adding..." : "Add Student"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
