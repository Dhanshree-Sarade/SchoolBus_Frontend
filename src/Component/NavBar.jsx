// import React, { useEffect, useState } from 'react';

// const NavBar = () => {
//   const [user, setUser] = useState({ firstName: "", lastName: "" });

//   useEffect(() => {
//     try {
//       // Fetch user details from localStorage
//       const storedUserString = localStorage.getItem("userData");
//       console.log("📌 Raw Stored User Data:", storedUserString);

//       if (storedUserString) {
//         const storedUser = JSON.parse(storedUserString);
//         console.log("✅ Parsed User Data:", storedUser);

//         if (storedUser?.firstName && storedUser?.lastName) {
//           setUser({
//             firstName: storedUser.firstName,
//             lastName: storedUser.lastName
//           });
//         } else {
//           console.log("❌ First name or last name missing in stored data.");
//         }
//       } else {
//         console.log("❌ No user data found in localStorage.");
//       }
//     } catch (error) {
//       console.error("❌ Error parsing localStorage data:", error);
//     }
//   }, []);

//   const handleLogout = () => {
//     // Remove user data from localStorage
//     localStorage.removeItem("userData");
  
//     // Redirect to the login page
//     window.location.href = "/login"; // Adjust this based on your route
//   };
  

//   return (
//     <>
//       <nav className="navbar navbar-header navbar-header-transparent navbar-expand-lg border-bottom">
//         <div className="container-fluid">
//           <nav className="navbar navbar-header-left navbar-expand-lg navbar-form nav-search p-0 d-none d-lg-flex">
//             <div className="input-group">
//               <div className="input-group-prepend">
//                 <button type="submit" className="btn btn-search pe-1">
//                   <i className="fa fa-search search-icon"></i>
//                 </button>
//               </div>
//               <input type="text" placeholder="Search ..." className="form-control" />
//             </div>
//           </nav>

//           <ul className="navbar-nav topbar-nav ms-md-auto align-items-center">
//             <li className="nav-item topbar-icon dropdown hidden-caret d-flex d-lg-none">
//               <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">
//                 <i className="fa fa-search"></i>
//               </a>
//               <ul className="dropdown-menu dropdown-search animated fadeIn">
//                 <form className="navbar-left navbar-form nav-search">
//                   <div className="input-group">
//                     <input type="text" placeholder="Search ..." className="form-control" />
//                   </div>
//                 </form>
//               </ul>
//             </li>

//             <li className="nav-item topbar-user dropdown hidden-caret">
//               <a className="dropdown-toggle profile-pic" data-bs-toggle="dropdown" href="#">
//                 <div className="avatar-sm">
//                   <img src="assets/img/profile.jpg" alt="..." className="avatar-img rounded-circle" />
//                 </div>
//                 <span className="profile-username">
//                   <span className="op-7">Hi,</span>
//                   <span className="fw-bold">
//                     {user.firstName || "User"} {user.lastName || ""}
//                   </span>
//                 </span>
//               </a>
//               <ul className="dropdown-menu dropdown-user animated fadeIn">
//                 <div className="dropdown-user-scroll scrollbar-outer">
//                   <li>
//                     <div className="user-box">
//                       <div className="avatar-lg">
//                         <img src="assets/img/profile.jpg" alt="profile" className="avatar-img rounded" />
//                       </div>
//                       <div className="u-text">
//                         <h4>{user.firstName} {user.lastName}</h4>
//                         {/* <p className="text-muted">hello@example.com</p> */}
//                         <a href="profile.html" className="btn btn-xs btn-secondary btn-sm">View Profile</a>
//                       </div>
//                     </div>
//                   </li>
//                   <li>
//                     <div className="dropdown-divider"></div>
//                     {/* <a className="dropdown-item" href="#">My Profile</a>
//                     <a className="dropdown-item" href="#">My Balance</a>
//                     <a className="dropdown-item" href="#">Inbox</a>
//                     <div className="dropdown-divider"></div>
//                     <a className="dropdown-item" href="#">Account Setting</a>
//                     <div className="dropdown-divider"></div> */}
//                     <a className="dropdown-item" href="#" onClick={handleLogout}>Logout</a>
//                   </li>
//                 </div>
//               </ul>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default NavBar;


// import React, { useEffect, useState } from "react";

// const NavBar = ({ toggleMobileSidebar }) => {
//   const [user, setUser] = useState({ firstName: "", lastName: "" });
//   const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     try {
//       const storedUserString = localStorage.getItem("userData");
//       if (storedUserString) {
//         const storedUser = JSON.parse(storedUserString);
//         if (storedUser?.firstName && storedUser?.lastName) {
//           setUser({
//             firstName: storedUser.firstName,
//             lastName: storedUser.lastName,
//           });
//         }
//       }
//     } catch (error) {
//       console.error("Error parsing localStorage data:", error);
//     }

//     // Listen for window resize to detect mobile/tablet view
//     const handleResize = () => setIsMobileView(window.innerWidth <= 768);
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("userData");
//     window.location.href = "/login";
//   };

//   // Show navbar only in mobile or tablet view
//   if (!isMobileView) return null;

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light d-md-none">
//       <div className="container-fluid">
//         {/* Toggle Sidebar Button for Mobile */}
//         <button className="navbar-toggler" type="button" onClick={toggleMobileSidebar}>
//           <i className="fas fa-bars"></i>
//         </button>

//         <ul className="navbar-nav ms-auto">
//           <li className="nav-item dropdown">
//             <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
//               <img src="assets/img/profile.jpg" alt="Profile" className="rounded-circle" width="30" height="30" />
//               <span className="ms-2">{user.firstName || "User"} {user.lastName}</span>
//             </a>
//             <ul className="dropdown-menu dropdown-menu-end">
//               <li>
//                 <a className="dropdown-item" href="#" onClick={handleLogout}>Logout</a>
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;


// import React, { useEffect, useState } from "react";

// const NavBar = ({ toggleMobileSidebar }) => {
//   const [user, setUser] = useState({ firstName: "", lastName: "" });
//   const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     try {
//       const storedUserString = localStorage.getItem("userData");
//       if (storedUserString) {
//         const storedUser = JSON.parse(storedUserString);
//         if (storedUser?.firstName && storedUser?.lastName) {
//           setUser({
//             firstName: storedUser.firstName,
//             lastName: storedUser.lastName,
//           });
//         }
//       }
//     } catch (error) {
//       console.error("Error parsing localStorage data:", error);
//     }

//     // Detect screen size changes
//     const handleResize = () => setIsMobileView(window.innerWidth <= 768);
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("userData");
//     window.location.href = "/login";
//   };

//   return (
//     <>
//       {/* Desktop Navbar (Hidden on Mobile) */}
//       {/* <nav className="navbar navbar-expand-lg navbar-light bg-light d-none d-md-block" >
//         <div className="container-fluid">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item dropdown">
//               <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
//                 <img src="assets/img/profile.jpg" alt="Profile" className="rounded-circle" width="30" height="30" />
//                 <span className="ms-2">{user.firstName || "User"} {user.lastName}</span>
//               </a>
//               <ul className="dropdown-menu dropdown-menu-end">
//                 <li>
//                   <a className="dropdown-item" href="#" onClick={handleLogout}>Logout</a>
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </div>
//       </nav> */}

//       {/* Mobile Navbar (Hidden on Desktop) */}
//       <nav className="navbar navbar-light bg-light d-md-none" style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//         }}>
//         <div className="container-fluid">
//           <button className="navbar-toggler" type="button" onClick={toggleMobileSidebar}>
//             <i className="fas fa-bars"></i>
//           </button>

//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item dropdown">
//               <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
//                 <img src="assets/img/profile.jpg" alt="Profile" className="rounded-circle" width="30" height="30" />
//                 <span className="ms-2">{user.firstName || "User"} {user.lastName}</span>
//               </a>
//               <ul className="dropdown-menu dropdown-menu-end">
//                 <li>
//                   <a className="dropdown-item" href="#" onClick={handleLogout}>Logout</a>
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default NavBar;


// import React, { useEffect, useState } from "react";

// const NavBar = ({ toggleMobileSidebar }) => {
//   const [user, setUser] = useState({ firstName: "", lastName: "" });
//   const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1024); // Include tablet sizes

//   useEffect(() => {
//     try {
//       const storedUserString = localStorage.getItem("userData");
//       if (storedUserString) {
//         const storedUser = JSON.parse(storedUserString);
//         if (storedUser?.firstName && storedUser?.lastName) {
//           setUser({
//             firstName: storedUser.firstName,
//             lastName: storedUser.lastName,
//           });
//         }
//       }
//     } catch (error) {
//       console.error("Error parsing localStorage data:", error);
//     }

//     // Detect screen size changes
//     const handleResize = () => setIsMobileView(window.innerWidth <= 1024);
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("userData");
//     window.location.href = "/login";
//   };

//   return (
//     <>
//       {/* Laptop/Desktop Navbar (Visible for > 1024px) */}
//       {!isMobileView && (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <div className="container-fluid">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
//                   <img
//                     src="assets/img/profile.jpg"
//                     alt="Profile"
//                     className="rounded-circle"
//                     width="30"
//                     height="30"
//                   />
//                   <span className="ms-2">
//                     {user.firstName || "User"} {user.lastName}
//                   </span>
//                 </a>
//                 <ul className="dropdown-menu dropdown-menu-end">
//                   <li>
//                     <a className="dropdown-item" href="#" onClick={handleLogout}>
//                       Logout
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       )}

//       {/* Mobile & Tablet Navbar (Visible for ≤ 1024px) */}
//       {isMobileView && (
//         <nav
//           className="navbar navbar-light bg-light"
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//           }}
//         >
//           <div className="container-fluid">
//             <button className="navbar-toggler" type="button" onClick={toggleMobileSidebar}>
//               <i className="fas fa-bars"></i>
//             </button>

//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
//                   <img
//                     src="assets/img/profile.jpg"
//                     alt="Profile"
//                     className="rounded-circle"
//                     width="30"
//                     height="30"
//                   />
//                   <span className="ms-2">
//                     {user.firstName || "User"} {user.lastName}
//                   </span>
//                 </a>
//                 <ul className="dropdown-menu dropdown-menu-end">
//                   <li>
//                     <a className="dropdown-item" href="#" onClick={handleLogout}>
//                       Logout
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       )}
//     </>
//   );
// };

// export default NavBar;

import React, { useEffect, useState } from "react";
import "./sidebar.css";
import "./Sidebar.jsx";

const NavBar = () => {
  const [user, setUser] = useState({ firstName: "", lastName: "" });
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1024); 



  const toggleMobileSidebar = () => {
    alert("Sidebar toggled!");
};



  useEffect(() => {
    try {
      const storedUserString = localStorage.getItem("userData");
      if (storedUserString) {
        const storedUser = JSON.parse(storedUserString);
        if (storedUser?.firstName && storedUser?.lastName) {
          setUser({ firstName: storedUser.firstName, lastName: storedUser.lastName });
        }
      }
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
    }

    const handleResize = () => setIsMobileView(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    window.location.href = "/login";
  };

  return (
    <>
      {!isMobileView && (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                  <img src="assets/img/profile.jpg" alt="Profile" className="rounded-circle" width="30" height="30"/>
                  <span className="ms-2">{user.firstName || "User"} {user.lastName}</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><a className="dropdown-item" href="#" onClick={handleLogout}>Logout</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      )}

      {isMobileView && (
        <nav className="navbar navbar-light bg-light" style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
          <div className="container-fluid">
          <button id="menu-btn" className="navbar-toggler"  type="button" onClick={toggleMobileSidebar}>
              <i className="fas fa-bars"></i>
            </button>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                  <img src="assets/img/profile.jpg" alt="Profile" className="rounded-circle" width="30" height="30"/>
                  <span className="ms-2">{user.firstName || "User"} {user.lastName}</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><a className="dropdown-item" href="#" onClick={handleLogout}>Logout</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBar;
