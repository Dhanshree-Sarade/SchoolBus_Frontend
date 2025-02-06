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
import React, { useState } from "react";
import axios from "axios";

const AddStudent = () => {
  const [formData, setFormData] = useState({
    studentFirstName: "",
    studentLastName: "",
    studentGrade: "",
    studentAge: "",
    parentId: "", // Parent ID will be associated with the student
    pickupStop: "",
    dropStop: "",
    pickupLocation: { lat: null, lon: null }, // Location for pickup
    dropLocation: { lat: null, lon: null }, // Location for drop
  });

  const [error, setError] = useState(""); // State to handle errors
  const [isLoading, setIsLoading] = useState(false); // State to manage loading

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to get the location (latitude, longitude) for a given address
  const getLocation = async (address, type) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${address}`
      );
      const data = await response.json();
      if (data && data.length > 0) {
        const { lat, lon } = data[0];
        setFormData((prevData) => ({
          ...prevData,
          [type]: { lat: parseFloat(lat), lon: parseFloat(lon) },
        }));
      }
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(""); // Reset error before each attempt

    try {
      // Get latitude and longitude for pickup and drop stops
      await getLocation(formData.pickupStop, "pickupLocation");
      await getLocation(formData.dropStop, "dropLocation");

      // Send the form data with pickup and drop location to the server
      const response = await axios.post("http://localhost:8080/addStudent", formData, {
        headers: { "Content-Type": "application/json" },
      });

      // If student is added successfully
      alert("Student added successfully!");
      console.log("Response:", response.data);

      // Reset the form after successful submission
      setFormData({
        studentFirstName: "",
        studentLastName: "",
        studentGrade: "",
        studentAge: "",
        parentId: "",
        pickupStop: "",
        dropStop: "",
        pickupLocation: { lat: null, lon: null },
        dropLocation: { lat: null, lon: null },
      });
    } catch (error) {
      console.error("Error adding student:", error);
      setError("Failed to add student. Please try again!"); // Set error message
    } finally {
      setIsLoading(false); // Stop loading after the request is complete
    }
  };

  return (
    <div className="form-container">
      <h2 className="fw-bold mb-3">Add Student for Bus Service</h2>

      {/* Show error message if exists */}
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <label>Student First Name</label>
            <input
              type="text"
              name="studentFirstName"
              value={formData.studentFirstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label>Student Last Name</label>
            <input
              type="text"
              name="studentLastName"
              value={formData.studentLastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label>Student Grade</label>
            <input
              type="text"
              name="studentGrade"
              value={formData.studentGrade}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label>Student Age</label>
            <input
              type="number"
              name="studentAge"
              value={formData.studentAge}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label>Parent ID (associated with the parent)</label>
            <input
              type="text"
              name="parentId"
              value={formData.parentId}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label>Pickup Stop</label>
            <input
              type="text"
              name="pickupStop"
              value={formData.pickupStop}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label>Drop Stop</label>
            <input
              type="text"
              name="dropStop"
              value={formData.dropStop}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-12 text-center">
            <button type="submit" className="btn-primary" disabled={isLoading}>
              {isLoading ? "Adding..." : "Add Student"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
