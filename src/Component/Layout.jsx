// import React from "react";
// import { Outlet } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Footer from "./Footer";
// import NavBar from "./NavBar";


// const Layout = () => {
//   return (
//     <div className="wrapper">
//       <Sidebar />
//       <div className="main-panel">
//         <div className="main-header">
//           <div className="main-header-logo">
//             {/* Logo Header */}
//             <div className="logo-header" data-background-color="dark">
//               <a href="/" className="logo">
//                 <img
//                   src="assets/img/kaiadmin/logo_light.svg"
//                   alt="navbar brand"
//                   className="navbar-brand"
//                   height="20"
//                 />
//               </a>
//               <div className="nav-toggle">
//                 <button className="btn btn-toggle toggle-sidebar">
//                   <i className="gg-menu-right"></i>
//                 </button>
//                 <button className="btn btn-toggle sidenav-toggler">
//                   <i className="gg-menu-left"></i>
//                 </button>
//               </div>
//               <button className="topbar-toggler more">
//                 <i className="gg-more-vertical-alt"></i>
//               </button>
//             </div>
//             {/* End Logo Header */}
//           </div>

//           <NavBar />
//         </div>

//         <div className="container">
//           <div className="page-inner">

//             {/* Dynamic content will be rendered here */}
//             <Outlet />
            
//           </div>
//         </div>

//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Layout;

import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar"; // Admin Sidebar
import ParentSidebar from "./ParentSidebar"; // Parent Sidebar
import DriverSidebar from "./DriverSidebar"; // Driver Sidebar
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = () => {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Get the user role from localStorage (make sure the key matches 'userRole')
    const role = localStorage.getItem("userRole"); 
    setUserRole(role);
  }, []);

  // Function to choose the correct sidebar
  const renderSidebar = () => {
    if (userRole === "ADMIN") return <Sidebar />;
    if (userRole === "PARENT") return <ParentSidebar />;
    if (userRole === "DRIVER") return <DriverSidebar />;
    return null; // No sidebar if role is unknown
  };

  return (
    <div className="wrapper">
      {renderSidebar()}  {/* Render Sidebar based on role */}

      <div className="main-panel">
        <div className="main-header">
          <NavBar />
        </div>

        <div className="container">
          <div className="page-inner">
            <Outlet /> {/* Dynamic content */}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
