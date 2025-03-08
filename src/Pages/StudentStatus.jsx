// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const StudentStatus = () => {
//   const [students, setStudents] = useState([]);
//   const [error, setError] = useState("");
//   const [pickedUp, setPickedUp] = useState({});
//   const [dropped, setDropped] = useState({});

//   useEffect(() => {
//     fetchStudents();
//     loadButtonStates();
//   }, []);

//   const fetchStudents = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/getStudents");
//       setStudents(response.data);
//     } catch (error) {
//       console.error("Error fetching students:", error);
//       setError("Failed to load students data!");
//     }
//   };

//   const loadButtonStates = () => {
//     const today = new Date().toDateString();
//     const storedPickedUp = JSON.parse(localStorage.getItem("pickedUp")) || {};
//     const storedDropped = JSON.parse(localStorage.getItem("dropped")) || {};

//     if (storedPickedUp.date !== today) {
//       localStorage.removeItem("pickedUp");
//       setPickedUp({});
//     } else {
//       setPickedUp(storedPickedUp);
//     }

//     if (storedDropped.date !== today) {
//       localStorage.removeItem("dropped");
//       setDropped({});
//     } else {
//       setDropped(storedDropped);
//     }
//   };

//   const handlePickUp = async (student) => {
//     try {
//       await axios.post(`http://localhost:8080/sendPickupMail/${student.id}`);

//       const updatedPickedUp = { ...pickedUp, [student.id]: true, date: new Date().toDateString() };
//       setPickedUp(updatedPickedUp);
//       localStorage.setItem("pickedUp", JSON.stringify(updatedPickedUp));

//       alert(`Pickup email sent to ${student.email}`);
//     } catch (error) {
//       console.error("Error sending pickup email:", error);
//       alert("Failed to send pickup email.");
//     }
//   };

//   const handleDrop = async (student) => {
//     try {
//       await axios.post(`http://localhost:8080/sendDropMail/${student.id}`);

//       const updatedDropped = { ...dropped, [student.id]: true, date: new Date().toDateString() };
//       setDropped(updatedDropped);
//       localStorage.setItem("dropped", JSON.stringify(updatedDropped));

//       alert(`Drop email sent to ${student.email}`);
//     } catch (error) {
//       console.error("Error sending drop email:", error);
//       alert("Failed to send drop email.");
//     }
//   };

//   return (
//     <div className="student-status-container">
//       <h2 className="fw-bold mb-3">Student Status</h2>
//       {error && <div className="alert alert-danger">{error}</div>}
//       <div className="table-responsive">
//         <table className="table table-bordered">
//           <thead>
//             <tr>
//               <th>Full Name</th>
//               <th>Pickup Stop</th>
//               <th>Drop Stop</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.length === 0 ? (
//               <tr>
//                 <td colSpan="4" className="text-center">No students found.</td>
//               </tr>
//             ) : (
//               students.map((student) => (
//                 <tr key={student.id}>
//                   <td>{`${student.studentFirstName} ${student.studentLastName}`}</td>
//                   <td>{student.pickupStop}</td>
//                   <td>{student.dropStop}</td>
//                   <td>
//                     {!pickedUp[student.id] && (
//                       <button className="btn btn-success btn-sm me-2" onClick={() => handlePickUp(student)}>
//                         Pick Up
//                       </button>
//                     )}
//                     {!dropped[student.id] && (
//                       <button className="btn btn-warning btn-sm" onClick={() => handleDrop(student)}>
//                         Drop
//                       </button>
//                     )}
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default StudentStatus;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const StudentStatus = () => {
//   const [students, setStudents] = useState([]);
//   const [error, setError] = useState("");
//   const [pickedUp, setPickedUp] = useState({});
//   const [dropped, setDropped] = useState({});

//   // Define the stop order for the route
//   const stopOrder = ["Chikhali", "Moi Phata", "Spine Road", "KSB", "Kalewadi"];

//   useEffect(() => {
//     fetchStudents();
//     loadButtonStates();
//   }, []);

//   const fetchStudents = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/getStudents");
//       const sortedStudents = sortStudentsByStop(response.data);
//       setStudents(sortedStudents);
//     } catch (error) {
//       console.error("Error fetching students:", error);
//       setError("Failed to load students data!");
//     }
//   };

//   const loadButtonStates = () => {
//     const today = new Date().toDateString();
//     const storedPickedUp = JSON.parse(localStorage.getItem("pickedUp")) || {};
//     const storedDropped = JSON.parse(localStorage.getItem("dropped")) || {};

//     if (storedPickedUp.date !== today) {
//       localStorage.removeItem("pickedUp");
//       setPickedUp({});
//     } else {
//       setPickedUp(storedPickedUp);
//     }

//     if (storedDropped.date !== today) {
//       localStorage.removeItem("dropped");
//       setDropped({});
//     } else {
//       setDropped(storedDropped);
//     }
//   };

//   // Sort students based on stop order
//   const sortStudentsByStop = (students) => {
//     return students.sort((a, b) => {
//       return stopOrder.indexOf(a.pickupStop) - stopOrder.indexOf(b.pickupStop);
//     });
//   };

//   const handlePickUp = async (student) => {
//     try {
//       await axios.post(`http://localhost:8080/sendPickupMail/${student.id}`);

//       const updatedPickedUp = { ...pickedUp, [student.id]: true, date: new Date().toDateString() };
//       setPickedUp(updatedPickedUp);
//       localStorage.setItem("pickedUp", JSON.stringify(updatedPickedUp));

//       alert(`Pickup email sent to ${student.email}`);
//     } catch (error) {
//       console.error("Error sending pickup email:", error);
//       alert("Failed to send pickup email.");
//     }
//   };

//   const handleDrop = async (student) => {
//     try {
//       await axios.post(`http://localhost:8080/sendDropMail/${student.id}`);

//       const updatedDropped = { ...dropped, [student.id]: true, date: new Date().toDateString() };
//       setDropped(updatedDropped);
//       localStorage.setItem("dropped", JSON.stringify(updatedDropped));

//       alert(`Drop email sent to ${student.email}`);
//     } catch (error) {
//       console.error("Error sending drop email:", error);
//       alert("Failed to send drop email.");
//     }
//   };

//   return (
//     <div className="student-status-container">
//       <h2 className="fw-bold mb-3">Student Status</h2>
//       {error && <div className="alert alert-danger">{error}</div>}
//       <div className="table-responsive">
//         <table className="table table-bordered">
//           <thead>
//             <tr>
//               <th>Full Name</th>
//               <th>Pickup Stop</th>
//               <th>Drop Stop</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.length === 0 ? (
//               <tr>
//                 <td colSpan="4" className="text-center">No students found.</td>
//               </tr>
//             ) : (
//               students.map((student) => (
//                 <tr key={student.id}>
//                   <td>{`${student.studentFirstName} ${student.studentLastName}`}</td>
//                   <td>{student.pickupStop}</td>
//                   <td>{student.dropStop}</td>
//                   <td>
//                     {!pickedUp[student.id] && (
//                       <button className="btn btn-success btn-sm me-2" onClick={() => handlePickUp(student)}>
//                         Pick Up
//                       </button>
//                     )}
//                     {!dropped[student.id] && (
//                       <button className="btn btn-warning btn-sm" onClick={() => handleDrop(student)}>
//                         Drop
//                       </button>
//                     )}
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };



//this is working code 
// export default StudentStatus;
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const StudentStatus = () => {
//   const [students, setStudents] = useState([]);
//   const [busDetails, setBusDetails] = useState(null);
//   const [error, setError] = useState("");
//   const [pickedUp, setPickedUp] = useState({});
//   const [dropped, setDropped] = useState({});

//   // Replace with logged-in driver's ID
//   const driverId = 1;

//   // Define stop order for sorting
//   const stopOrder = ["Chikhali", "Moi Phata", "Spine Road", "KSB", "Kalewadi"];

//   useEffect(() => {
//     fetchBusDetails();
//     fetchStudents();
//     loadButtonStates();
//   }, []);

//   // Fetch assigned bus details for driver
//   const fetchBusDetails = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8080/api/assigned-bus/getBusByDriver/${driverId}`);
//       setBusDetails(response.data);
//     } catch (error) {
//       console.error("Error fetching bus details:", error);
//       setError("Failed to load bus details!");
//     }
//   };

//   // Fetch students assigned to this driver's route
//   const fetchStudents = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8080/assigned/${driverId}`);
//         = sortStudentsByStop(response.data);
//       setStudents(sortedStudents);
//     } catch (error) {
//       console.error("Error fetching students:", error);
//     }
//   };

//   // Load pickup & drop button states from localStorage
//   const loadButtonStates = () => {
//     const today = new Date().toDateString();
//     const storedPickedUp = JSON.parse(localStorage.getItem("pickedUp")) || {};
//     const storedDropped = JSON.parse(localStorage.getItem("dropped")) || {};

//     if (storedPickedUp.date !== today) {
//       localStorage.removeItem("pickedUp");
//       setPickedUp({});
//     } else {
//       setPickedUp(storedPickedUp);
//     }

//     if (storedDropped.date !== today) {
//       localStorage.removeItem("dropped");
//       setDropped({});
//     } else {
//       setDropped(storedDropped);
//     }
//   };

//   // Sort students based on stop order
//   const sortStudentsByStop = (students) => {
//     return students.sort((a, b) => stopOrder.indexOf(a.pickupStop) - stopOrder.indexOf(b.pickupStop));
//   };

//   // // Handle student pickup
//   // const handlePickUp = async (studentIndex) => {
//   //   const student = students[studentIndex];

//   //   try {
//   //     await axios.post(`http://localhost:8080/sendPickupMail/${student.id}`);

//   //     const updatedPickedUp = { ...pickedUp, [student.id]: true, date: new Date().toDateString() };
//   //     setPickedUp(updatedPickedUp);
//   //     localStorage.setItem("pickedUp", JSON.stringify(updatedPickedUp));

//   //     alert(`Pickup email sent to ${student.email}`);

//   //     // Notify next stop students
//   //     const currentStop = student.pickupStop;
//   //     const nextStopIndex = stopOrder.indexOf(currentStop) + 1;

//   //     if (nextStopIndex < stopOrder.length) {
//   //       const nextStop = stopOrder[nextStopIndex];
//   //       await axios.post(`http://localhost:8080/notifyNextStop/${driverId}`, null, {
//   //         params: { currentStop: currentStop },
//   //       });

//   //       alert(`Notification sent to students waiting at ${nextStop}.`);
//   //     }
//   //   } catch (error) {
//   //     console.error("Error sending pickup email or notification:", error);
//   //     alert("Failed to send pickup email or notification.");
//   //   }
//   // };

//   const handlePickUp = async (studentIndex) => {
//   const student = students[studentIndex];

//   try {
//     await axios.post(`http://localhost:8080/sendPickupMail/${student.id}`);

//     const updatedPickedUp = { ...pickedUp, [student.id]: true, date: new Date().toDateString() };
//     setPickedUp(updatedPickedUp);
//     localStorage.setItem("pickedUp", JSON.stringify(updatedPickedUp));

//     alert(`Pickup email sent to ${student.email}`);

//     // Notify next stop students
//     const currentStop = student.pickupStop;
//     const nextStopIndex = stopOrder.indexOf(currentStop) + 1;

//     if (nextStopIndex < stopOrder.length) {
//       const nextStop = stopOrder[nextStopIndex];

//       // Find all students at the next stop
//       const nextStopStudents = students.filter(s => s.pickupStop === nextStop);

//       // Print student IDs and email IDs in the console
//       console.log(`Next Stop (${nextStop}) Students:`);
//       nextStopStudents.forEach(s => {
//         console.log(`ID: ${s.id}, Email: ${s.email}`);
//       });

//       await axios.post(`http://localhost:8080/notifyNextStop/${driverId}`, null, {
//         params: { currentStop: currentStop },
//       });

//       alert(`Notification sent to students waiting at ${nextStop}.`);
//     }
//   } catch (error) {
//     console.error("Error sending pickup email or notification:", error);
//     alert("Failed to send pickup email or notification.");
//   }
// };


//   // Handle student drop-off
//   const handleDrop = async (student) => {
//     try {
//       await axios.post(`http://localhost:8080/sendDropMail/${student.id}`);

//       const updatedDropped = { ...dropped, [student.id]: true, date: new Date().toDateString() };
//       setDropped(updatedDropped);
//       localStorage.setItem("dropped", JSON.stringify(updatedDropped));

//       alert(`Drop email sent to ${student.email}`);
//     } catch (error) {
//       console.error("Error sending drop email:", error);
//       alert("Failed to send drop email.");
//     }
//   };

//   return (
//     <div className="student-status-container">
//       <h2 className="fw-bold mb-3">Student Status</h2>

//       {/* Display Bus Details */}
//       {busDetails ? (
//         <div className="bus-details mb-4">
//           <h5>Bus Details</h5>
//           <div className="row">
//             <div className="col-md-6">
//               <p><strong>Bus Number:</strong> {busDetails.busNumber}</p>
//             </div>
//             <div className="col-md-6">
//               <p><strong>Number Plate:</strong> {busDetails.busNumberPlate}</p>
//             </div>
//             <div className="col-md-6">
//               <p><strong>Cleaner Name:</strong> {busDetails.cleanerName}</p>
//             </div>
//             <div className="col-md-6">
//               <p><strong>Driver Contact:</strong> {busDetails.driverMobile}</p>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="alert alert-warning">No bus assigned to this driver.</div>
//       )}

//       {error && <div className="alert alert-danger">{error}</div>}

//       <div className="table-responsive">
//         <table className="table table-bordered">
//           <thead>
//             <tr>
//               <th>Full Name</th>
//               <th>Pickup Stop</th>
//               <th>Drop Stop</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.length === 0 ? (
//               <tr>
//                 <td colSpan="4" className="text-center">No students found.</td>
//               </tr>
//             ) : (
//               students.map((student, index) => (
//                 <tr key={student.id}>
//                   <td>{`${student.studentFirstName} ${student.studentLastName}`}</td>
//                   <td>{student.pickupStop}</td>
//                   <td>{student.dropStop}</td>
//                   <td>
//                     {!pickedUp[student.id] && (
//                       <button className="btn btn-success btn-sm me-2" onClick={() => handlePickUp(index)}>
//                         Pick Up
//                       </button>
//                     )}
//                     {!dropped[student.id] && (
//                       <button className="btn btn-warning btn-sm" onClick={() => handleDrop(student)}>
//                         Drop
//                       </button>
//                     )}
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// // export default StudentStatus;
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const StudentStatus = () => {
//   const [students, setStudents] = useState([]);
//   const [busDetails, setBusDetails] = useState(null);
//   const [error, setError] = useState("");
//   const [pickedUp, setPickedUp] = useState({});
//   const [dropped, setDropped] = useState({});
//   const [absent, setAbsent] = useState({});
//   const [expandedStops, setExpandedStops] = useState({}); // Track which stops are expanded

//   // Replace with logged-in driver's ID
//   const driverId = 1;

//   // Define stop order for sorting
//   const stopOrder = ["Chikhali", "Moi Phata", "Spine Road", "KSB", "Kalewadi"];

//   useEffect(() => {
//     fetchBusDetails();
//     fetchStudents();
//     loadButtonStates();
//   }, []);

//   // Fetch assigned bus details for driver
//   const fetchBusDetails = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8080/api/assigned-bus/getBusByDriver/${driverId}`);
//       setBusDetails(response.data);
//     } catch (error) {
//       console.error("Error fetching bus details:", error);
//       setError("Failed to load bus details!");
//     }
//   };

//   // Fetch students assigned to this driver's route
//   const fetchStudents = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8080/assigned/${driverId}`);
//       const sortedStudents = sortStudentsByStop(response.data);
//       setStudents(sortedStudents);
//     } catch (error) {
//       console.error("Error fetching students:", error);
//     }
//   };

//   // Load pickup, drop, and absent button states from localStorage
//   const loadButtonStates = () => {
//     const storedPickedUp = JSON.parse(localStorage.getItem("pickedUp")) || {};
//     const storedDropped = JSON.parse(localStorage.getItem("dropped")) || {};
//     const storedAbsent = JSON.parse(localStorage.getItem("absent")) || {};

//     setPickedUp(storedPickedUp);
//     setDropped(storedDropped);
//     setAbsent(storedAbsent);
//   };

//   // Sort students based on stop order
//   const sortStudentsByStop = (students) => {
//     return students.sort((a, b) => stopOrder.indexOf(a.pickupStop) - stopOrder.indexOf(b.pickupStop));
//   };

//   // Handle student pickup
//   const handlePickUp = async (student) => {
//     if (!student || !student.id) {
//         console.error("Invalid student object:", student);
//         return;
//     }

//     console.log("Picking up student:", student);

//     try {
//         await axios.post(`http://localhost:8080/sendPickupMail/${student.id}`);

//         const updatedPickedUp = { ...pickedUp, [student.id]: true };
//         setPickedUp(updatedPickedUp);
//         localStorage.setItem("pickedUp", JSON.stringify(updatedPickedUp));

//         alert(`Pickup email sent to ${student.email}`);
//     } catch (error) {
//         console.error("Error sending pickup email:", error);
//         alert("Failed to send pickup email.");
//     }
// };


//   // Handle student drop-off
//   const handleDrop = async (student) => {
//     try {
//       await axios.post(`http://localhost:8080/sendDropMail/${student.id}`);

//       const updatedDropped = { ...dropped, [student.id]: true };
//       setDropped(updatedDropped);
//       localStorage.setItem("dropped", JSON.stringify(updatedDropped));

//       console.log("Student id is : ", student.id);
//       alert(`Drop email sent to ${student.email}`);
//     } catch (error) {
//       console.error("Error sending drop email:", error);
//       alert("Failed to send drop email.");
//     }
//   };

//   // Handle student absent status
//   const handleAbsent = (student) => {
//     const updatedAbsent = { ...absent, [student.id]: true };
//     setAbsent(updatedAbsent);
//     localStorage.setItem("absent", JSON.stringify(updatedAbsent));

//     alert(`${student.studentFirstName} ${student.studentLastName} marked as absent`);
//   };

//   // Reset all pickup statuses
//   const resetPickups = () => {
//     setPickedUp({});
//     localStorage.removeItem("pickedUp");
//   };

//   // Reset all drop statuses
//   const resetDrops = () => {
//     setDropped({});
//     localStorage.removeItem("dropped");
//   };

//   // Reset all absent statuses
//   const resetAbsent = () => {
//     setAbsent({});
//     localStorage.removeItem("absent");
//   };

//   const toggleStop = (stop) => {
//     setExpandedStops((prev) => ({ ...prev, [stop]: !prev[stop] }));
//   };
//   const groupedStudents = students.reduce((acc, student) => {
//     acc[student.pickupStop] = acc[student.pickupStop] || [];
//     acc[student.pickupStop].push(student);
//     return acc;
//   }, {});

//   return (
//     <div className="student-status-container">
//       <h2 className="fw-bold mb-3">Student Status</h2>

//       {/* Display Bus Details */}
//       {busDetails ? (
//         <div className="bus-details mb-4">
//           <h5>Bus Details</h5>
//           <div className="row">
//             <div className="col-md-6">
//               <p><strong>Bus Number:</strong> {busDetails.busNumber}</p>
//             </div>
//             <div className="col-md-6">
//               <p><strong>Number Plate:</strong> {busDetails.busNumberPlate}</p>
//             </div>
//             <div className="col-md-6">
//               <p><strong>Cleaner Name:</strong> {busDetails.cleanerName}</p>
//             </div>
//             <div className="col-md-6">
//               <p><strong>Driver Contact:</strong> {busDetails.driverMobile}</p>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="alert alert-warning">No bus assigned to this driver.</div>
//       )}

//       {error && <div className="alert alert-danger">{error}</div>}

//       {/* Reset Buttons */}
//       <div className="mb-3">
//         <button className="btn btn-danger me-2" onClick={resetPickups}>
//           Reset Pickups
//         </button>
//         <button className="btn btn-warning me-2" onClick={resetDrops}>
//           Reset Drops
//         </button>
//         <button className="btn btn-info" onClick={resetAbsent}>
//           Reset Absent
//         </button>
//       </div>

//       <div className="table-responsive">
//         <table className="table table-bordered">
//           <thead>
//             <tr>
//               <th>Pickup Stop</th>
//               <th>Total Students</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {stopOrder.map((stop) => {
//               const stopStudents = students.filter((s) => s.pickupStop === stop);

//               return stopStudents.length > 0 ? (
//                 <React.Fragment key={stop}>
//                   {/* Row for Stop - Click to Expand/Collapse */}
//                   <tr className="table-primary" onClick={() => toggleStop(stop)} style={{ cursor: "pointer" }}>
//                     <td>{stop}</td>
//                     <td>{stopStudents.length}</td>
//                     <td>{expandedStops[stop] ? "▲ Hide Students" : "▼ Show Students"}</td>
//                   </tr>

//                   {/* Expand Student List Only if Clicked */}
//                   {expandedStops[stop] &&
//                     stopStudents.map((student) => (
//                       <tr key={student.id} className="table-light">
//                         <td colSpan="3">
//                           {student.studentFirstName} {student.studentLastName}
//                           <button
//                             className="btn btn-success btn-sm ms-2"
//                             disabled={pickedUp[student.id]}
//                             onClick={() => handlePickUp(student)} // ✅ Pass student object instead of index
//                           >
//                             {pickedUp[student.id] ? "Picked Up ✅" : "Pick Up"}
//                           </button>


//                           <button
//                             className="btn btn-warning btn-sm ms-2"
//                             disabled={dropped[student.id]}
//                             onClick={() => handleDrop(student)}
//                           >
//                             {dropped[student.id] ? "Dropped ✅" : "Drop"}
//                           </button>

//                           <button
//                             className="btn btn-danger btn-sm ms-2"
//                             disabled={absent[student.id]}
//                             onClick={() => handleAbsent(student)}
//                           >
//                             {absent[student.id] ? "Absent ❌" : "Absent"}
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                 </React.Fragment>
//               ) : null;
//             })}
//           </tbody>
//         </table>

//       </div>

//     </div>
//   );
// };

// export default StudentStatus;
import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentStatus = () => {
  const [students, setStudents] = useState([]);
  const [busDetails, setBusDetails] = useState(null);
  const [error, setError] = useState("");
  const [pickedUp, setPickedUp] = useState({});
  const [dropped, setDropped] = useState({});
  const [absent, setAbsent] = useState({});
  const [expandedStops, setExpandedStops] = useState({});

  const userDataString = localStorage.getItem("userData");
  let driverId = null;
  if (userDataString) {
    const userData = JSON.parse(userDataString);
    driverId = userData.userId;
  }

  const todayDate = new Date().toISOString().split("T")[0];

  useEffect(() => {
    fetchBusDetails();
    fetchStudents();
    loadButtonStates();
  }, []);

  const fetchBusDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/assigned-bus/getBusByDriver/${driverId}`);
      setBusDetails(response.data);
      console.log("Bus Details : ", response.data);
    } catch (error) {
      console.error("Error fetching bus details:", error);
      setError("Failed to load bus details!");
    }
  };

  const fetchStudents = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/assigned/${driverId}`);

      console.log("API Response:", response.data); // Debugging step

      // Ensure response.data is an array
      const studentData = Array.isArray(response.data) ? response.data : [];

      const groupedStudents = {};
      studentData.forEach((student) => {
        if (!groupedStudents[student.pickupStop]) {
          groupedStudents[student.pickupStop] = { stopId: student.busStopId, students: [] };
        }
        groupedStudents[student.pickupStop].students.push(student);
      });

      const sortedStops = Object.keys(groupedStudents).sort(
        (a, b) => groupedStudents[a].stopId - groupedStudents[b].stopId
      );

      const sortedStudentData = {};
      sortedStops.forEach((stop) => {
        sortedStudentData[stop] = groupedStudents[stop].students;
      });

      setStudents(sortedStudentData);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };


  const loadButtonStates = () => {
    const storedPickedUp = JSON.parse(localStorage.getItem("pickedUp")) || {};
    const storedDropped = JSON.parse(localStorage.getItem("dropped")) || {};
    const storedAbsent = JSON.parse(localStorage.getItem("absent")) || {};

    setPickedUp(storedPickedUp.date === todayDate ? storedPickedUp.data || {} : {});
    setDropped(storedDropped.date === todayDate ? storedDropped.data || {} : {});
    setAbsent(storedAbsent.date === todayDate ? storedAbsent.data || {} : {});
  };

  const [pickupCounts, setPickupCounts] = useState({}); // Track count per stop
  const [currentStop, setCurrentStop] = useState(null); // Track current active stop

  const handleAction = async (student, type) => {
    console.log("Driver ID:", driverId);
    console.log("Student ID:", student.id);
    console.log("Bus Route ID:", busDetails?.busRoute?.id);

    // Retrieve stop name from multiple possible structures
    let stopName =
      student.pickupStop?.stopName || student.busStop?.stopName || student.stopName || "Unknown Stop";

    console.log(`Stop Name: ${stopName}`);

    try {
      // Send email notification
      await axios.post(`http://localhost:8080/send${type}Mail/${student.id}`);
      alert(`${type} email sent to ${student.email}`);

      // Update pickup state
      const updatedState = { ...type === "Pickup" ? pickedUp : dropped, [student.id]: true };
      if (type === "Pickup") setPickedUp(updatedState);
      else if (type === "Drop") setDropped(updatedState);
      if (type === "Absent") {
        setAbsent((prevAbsent) => ({ ...prevAbsent, [student.id]: true }));
      }
      

      // Store updated state in localStorage
      localStorage.setItem(type.toLowerCase(), JSON.stringify({ date: todayDate, data: updatedState }));

      if (type === "Pickup") {
        // Get total students at this stop
        const totalStudentsAtStop = students[stopName]?.length || 0;

        setPickupCounts((prevCounts) => {
          let newCounts = { ...prevCounts };

          // Reset count if it's a new stop
          if (currentStop !== stopName) {
            newCounts = { [stopName]: 0 };
            setCurrentStop(stopName);
          }

          let currentCount = newCounts[stopName] || 0;

          if (currentCount < totalStudentsAtStop) {
            newCounts[stopName] = currentCount + 1;

            console.log(
              `Stop "${stopName}": Pickup Count = ${newCounts[stopName]}, Total Students = ${totalStudentsAtStop}`
            );
            return newCounts;
          } else {
            console.log(`Stop "${stopName}" has reached limit: ${totalStudentsAtStop}`);
            return prevCounts; // Prevent over-counting
          }
        });
      }
    } catch (error) {
      console.error(`Error handling ${type}:`, error);
      alert(`Failed to process ${type}.`);
    }
  };

  const resetStatus = (type) => {
    if (type === "Pickup") setPickedUp({});
    else if (type === "Drop") setDropped({});
    else setAbsent({});
    localStorage.removeItem(type.toLowerCase());
  };

  const toggleStop = (stop) => {
    setExpandedStops((prev) => ({ ...prev, [stop]: !prev[stop] }));
  };

  const handleLeavingStop = async (stop, students, allStops) => {
    // Get the index of the current stop
    const currentStopIndex = allStops.indexOf(stop);

    // Check if there is a next stop
    if (currentStopIndex === -1 || currentStopIndex >= allStops.length - 1) {
      alert("No next stop available.");
      return;
    }

    // Get the next stop
    const nextStop = allStops[currentStopIndex + 1];
    const nextStopStudents = students[nextStop] || [];

    if (nextStopStudents.length === 0) {
      alert("No students found at the next stop.");
      return;
    }

    try {
      // Send email to each student at the next stop
      for (const student of nextStopStudents) {
        console.log(`Sending email to Next Stop Student ID: ${student.id}, Email: ${student.email}`);

        const response = await axios.post(`http://localhost:8080/notifyNextStudent/${student.id}`);

        if (response.status === 200) {
          console.log(`✅ Email sent to: ${student.email}`);
        } else {
          console.log(`❌ Failed to send email to: ${student.email}`);
        }
      }

      alert(`Email notifications sent to students at the next stop: ${nextStop}`);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending emails. Check console for details.");
    }
  };

  const dropAllStudents = async () => {
    try {
      alert("Dropping all students...");

      const updatedDropped = { ...dropped };

      for (const stop of Object.keys(students)) {
        for (const student of students[stop]) {
          // Send Drop email for each student
          await axios.post(`http://localhost:8080/sendDropMail/${student.id}`);
          console.log(`Drop email sent to ${student.email}`);

          // Mark student as dropped
          updatedDropped[student.id] = true;
        }
      }

      // Update state
      setDropped(updatedDropped);

      // Store in localStorage
      localStorage.setItem("drop", JSON.stringify({ date: todayDate, data: updatedDropped }));

      alert("All students marked as dropped and emails sent.");
    } catch (error) {
      console.error("Error dropping students:", error);
      alert("Failed to drop students.");
    }
  };

  return (
    <div className="student-status-container">
      <h2 className="fw-bold mb-3">Student Status</h2>
      {busDetails ? (
        <div className="bus-details mb-4">
          <h5>Bus Details</h5>
          <p><strong>Bus Number:</strong> {busDetails.busNumber}</p>
          <p><strong>Number Plate:</strong> {busDetails.busNumberPlate}</p>
          <p><strong>Cleaner Name:</strong> {busDetails.cleanerName}</p>
          <p><strong>Driver Contact:</strong> {busDetails.driverMobile}</p>
        </div>
      ) : (
        <div className="alert alert-warning">No bus assigned to this driver.</div>
      )}
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="mb-3">
        <button className="btn btn-danger me-2" onClick={() => resetStatus("Pickup")}>Reset Pickups</button>
        {/* <button className="btn btn-warning me-2" onClick={() => resetStatus("Drop")}>Reset Drops</button> */}
        <button className="btn btn-info" onClick={() => resetStatus("Absent")}>Reset Absent</button>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Pickup Stop</th>
              <th>Total Students</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(students).map((stop) => (
              <React.Fragment key={stop}>
                <tr className="table-primary" onClick={() => toggleStop(stop)} style={{ cursor: "pointer" }}>
                  <td>
                    {stop}
                    {/* {students[stop].length > 0 &&
                      students[stop].every((student) => pickedUp[student.id]) && (
                        <button
                          className="btn btn-primary btn-sm ms-2"
                          onClick={() => handleLeavingStop(stop, students, Object.keys(students))}
                        >
                          Leaving Stop
                        </button>
                      )} */}

                    {students[stop].length > 0 &&
                      students[stop].every((student) => pickedUp[student.id] || absent[student.id]) && (
                        <button
                          className="btn btn-primary btn-sm ms-2"
                          onClick={() => handleLeavingStop(stop, students, Object.keys(students))}
                        >
                          Leaving Stop
                        </button>
                      )}
                  </td>

                  <td>{students[stop].length}</td>
                  <td>{expandedStops[stop] ? "▲ Hide Students" : "▼ Show Students"}</td>
                </tr>
                {expandedStops[stop] &&
                  students[stop].map((student) => (
                    <tr key={student.id} className="table-light">
                      <td>
                        <span className="student-name">
                          {student.studentFirstName} {student.studentLastName}
                        </span>
                      </td>
                      <td>
                        <div className="button-group">
                          <button
                            className="btn btn-success btn-sm ms-2"
                            disabled={pickedUp[student.id]}
                            onClick={() => handleAction(student, "Pickup")}
                          >
                            Pick Up
                          </button>
                          {/* <button
                            className="btn btn-warning btn-sm ms-2"
                            disabled={dropped[student.id]}
                            onClick={() => handleAction(student, "Drop")}
                          >
                            Drop
                          </button> */}
                          <button
                            className="btn btn-danger btn-sm ms-2"
                            disabled={absent[student.id]}
                            onClick={() => handleAction(student, "Absent")}
                          >
                            Absent
                          </button>
                        </div>
                      </td>

                    </tr>
                  ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      {/* Common Drop All Students Button */}
      <div className="text-center mt-3">
        <button className="btn btn-warning" onClick={dropAllStudents}>Drop All Students</button>
      </div>
    </div>
  );
};

export default StudentStatus;
