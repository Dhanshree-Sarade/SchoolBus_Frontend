import React, { useEffect, useState } from "react";
import axios from "axios";

const SchoolToHome = () => {

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
      const response = await axios.get(`http://localhost:8080/assignedReverse/${driverId}`);

      console.log("API Response:", response.data); // Debugging step

      // Ensure response.data is an array
      const studentData = Array.isArray(response.data) ? response.data : [];

      const groupedStudents = {};
      studentData.forEach((student) => {
        // Use pickupStop as dropStop
        const dropStop = student.pickupStop;

        console.log("Drop stops : ", dropStop);

        if (!groupedStudents[dropStop]) {
          groupedStudents[dropStop] = { stopId: student.busStopId, students: [] };
        }
        groupedStudents[dropStop].students.push(student);
      });

      // Sorting stops by stopId
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

  // const handleAction = async (student, type) => {
  //   console.log("Driver ID:", driverId);
  //   console.log("Student ID:", student.id);
  //   console.log("Bus Route ID:", busDetails?.busRoute?.id);

  //   // Retrieve stop name from multiple possible structures
  //   let stopName =
  //     student.pickupStop?.stopName || student.busStop?.stopName || student.stopName || "Unknown Stop";

  //   console.log(`Stop Name: ${stopName}`);

  //   try {
  //     // Send email notification
  //     await axios.post(`http://localhost:8080/send${type}Mail/${student.id}`);
  //     alert(`${type} email sent to ${student.email}`);

  //     // Update pickup state
  //     const updatedState = { ...type === "Pickup" ? pickedUp : dropped, [student.id]: true };
  //     if (type === "Pickup") setPickedUp(updatedState);
  //     else if (type === "Drop") setDropped(updatedState);
  //     if (type === "Absent") {
  //       setAbsent((prevAbsent) => ({ ...prevAbsent, [student.id]: true }));
  //     }


  //     // Store updated state in localStorage
  //     localStorage.setItem(type.toLowerCase(), JSON.stringify({ date: todayDate, data: updatedState }));

  //     if (type === "Pickup") {
  //       // Get total students at this stop
  //       const totalStudentsAtStop = students[stopName]?.length || 0;

  //       setPickupCounts((prevCounts) => {
  //         let newCounts = { ...prevCounts };

  //         // Reset count if it's a new stop
  //         if (currentStop !== stopName) {
  //           newCounts = { [stopName]: 0 };
  //           setCurrentStop(stopName);
  //         }

  //         let currentCount = newCounts[stopName] || 0;

  //         if (currentCount < totalStudentsAtStop) {
  //           newCounts[stopName] = currentCount + 1;

  //           console.log(
  //             `Stop "${stopName}": Pickup Count = ${newCounts[stopName]}, Total Students = ${totalStudentsAtStop}`
  //           );
  //           return newCounts;
  //         } else {
  //           console.log(`Stop "${stopName}" has reached limit: ${totalStudentsAtStop}`);
  //           return prevCounts; // Prevent over-counting
  //         }
  //       });
  //     }
  //   } catch (error) {
  //     console.error(`Error handling ${type}:`, error);
  //     alert(`Failed to process ${type}.`);
  //   }
  // };
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

      let updatedState;

      // Update state based on type
      if (type === "Pickup") {
        updatedState = { ...pickedUp, [student.id]: true };
        setPickedUp(updatedState);
      } else if (type === "Drop") {
        updatedState = { ...dropped, [student.id]: true };
        setDropped(updatedState);
      } else if (type === "Absent") {
        updatedState = { ...absent, [student.id]: true };
        setAbsent(updatedState);
      }

      // Store updated state in localStorage
      localStorage.setItem(type.toLowerCase(), JSON.stringify({ date: todayDate, data: updatedState }));

      if (type === "Pickup" || type === "Drop") {
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
              `Stop "${stopName}": ${type} Count = ${newCounts[stopName]}, Total Students = ${totalStudentsAtStop}`
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

  const pickupAllStudents = async () => {
    try {
      alert("Picking up all students...");

      const updatedPickedUp = { ...pickedUp };

      for (const stop of Object.keys(students)) {
        for (const student of students[stop]) {
          // Send Pickup email for each student
          await axios.post(`http://localhost:8080/sendPickupMail/${student.id}`);
          console.log(`Pickup email sent to ${student.email}`);

          // Mark student as picked up
          updatedPickedUp[student.id] = true;
        }
      }

      // Update state
      setPickedUp(updatedPickedUp);

      // Store in localStorage
      localStorage.setItem("pickup", JSON.stringify({ date: todayDate, data: updatedPickedUp }));

      alert("All students marked as picked up and emails sent.");
    } catch (error) {
      console.error("Error picking up students:", error);
      alert("Failed to pick up students.");
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
        {/* <button className="btn btn-danger me-2" onClick={() => resetStatus("Pickup")}>Reset Pickup</button> */}
        <button className="btn btn-warning me-2" onClick={() => resetStatus("Drop")}>Reset Drops</button>
        <button className="btn btn-info" onClick={() => resetStatus("Absent")}>Reset Absent</button>
      </div>
      {/* Common Pickup All Students Button */}
      <div className="text-center mt-3">
        <button className="btn btn-success" onClick={pickupAllStudents}>Pickup All Students</button>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Drop Stop</th>
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
                      students[stop].every((student) => dropped[student.id] || absent[student.id]) && (
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
                            disabled={dropped[student.id]}
                            onClick={() => handleAction(student, "Drop")}
                          >
                            Drop
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

    </div>
  )
}

export default SchoolToHome
