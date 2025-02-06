// import React from 'react'


// const Sidebar = () => {
//   return (
//     <div>
//        {/* <!-- Sidebar --> */}
//       <div className="sidebar" data-background-color="dark">
//         <div className="sidebar-logo">
//           {/* <!-- Logo Header --> */}
//           <div className="logo-header" data-background-color="dark">
//             <a href="index.html" className="logo">
//               <img
//                 src="assets/img/kaiadmin/logo_light.svg"
//                 alt="navbar brand"
//                 className="navbar-brand"
//                 height="20"
//               />
//             </a>
//             <div className="nav-toggle">
//               <button className="btn btn-toggle toggle-sidebar">
//                 <i className="gg-menu-right"></i>
//               </button>
//               <button className="btn btn-toggle sidenav-toggler">
//                 <i className="gg-menu-left"></i>
//               </button>
//             </div>
//             <button className="topbar-toggler more">
//               <i className="gg-more-vertical-alt"></i>
//             </button>
//           </div>
//           {/* <!-- End Logo Header --> */}
//         </div>
//         <div className="sidebar-wrapper scrollbar scrollbar-inner">
//           <div className="sidebar-content">
//             <ul className="nav nav-secondary">
//               <li className="nav-item active">
//                 <a
//                   data-bs-toggle="collapse"
//                   href="#dashboard"
//                   className="collapsed"
//                   aria-expanded="false"
//                 >
//                   <i className="fas fa-home"></i>
//                   <p>Admin Dashboard</p>
//                   {/* <span className="caret"></span> */}
//                 </a>
//               </li>
//               <li className="nav-section">
//                 <span className="sidebar-mini-icon">
//                   <i className="fa fa-ellipsis-h"></i>
//                 </span>
//                 <h4 className="text-section">Components</h4>
//               </li>
//               <li className="nav-item">
//                 <a data-bs-toggle="collapse" href="#base">
//                   <i className="fas fa-layer-group"></i>
//                   <p>Parent Section</p>
//                   <span className="caret"></span>
//                 </a>
//                 <div className="collapse" id="base">
//                   <ul className="nav nav-collapse">
//                     <li>
//                       <a href="components/avatars.html">
//                         <span className="sub-item">Add Parent</span>
//                       </a>
//                     </li>
//                     <li>
//                       <a href="components/buttons.html">
//                         <span className="sub-item">View Parent</span>
//                       </a>
//                     </li>

//                   </ul>
//                 </div>
//               </li>
//               <li className="nav-item">
//                 <a data-bs-toggle="collapse" href="#sidebarLayouts">
//                   <i className="fas fa-th-list"></i>
//                   <p>Driver Section</p>
//                   <span className="caret"></span>
//                 </a>
//                 <div className="collapse" id="sidebarLayouts">
//                   <ul className="nav nav-collapse">
//                     <li>
//                       <a href="sidebar-style-2.html">
//                         <span className="sub-item">Add Driver</span>
//                       </a>
//                     </li>
//                     <li>
//                       <a href="icon-menu.html">
//                         <span className="sub-item">View Driver</span>
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       {/* <!-- End Sidebar --> */}

//     </div>
//   )
// }

// export default Sidebar
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      {/* <!-- Sidebar --> */}
      <div className="sidebar" data-background-color="dark">
        <div className="sidebar-logo">
          {/* <!-- Logo Header --> */}
          <div className="logo-header" data-background-color="dark">
            <Link to="/" className="logo">
              <img
                src="assets/img/kaiadmin/logo_light.svg"
                alt="navbar brand"
                className="navbar-brand"
                height="20"
              />
            </Link>
            <div className="nav-toggle">
              <button className="btn btn-toggle toggle-sidebar">
                <i className="gg-menu-right"></i>
              </button>
              <button className="btn btn-toggle sidenav-toggler">
                <i className="gg-menu-left"></i>
              </button>
            </div>
            <button className="topbar-toggler more">
              <i className="gg-more-vertical-alt"></i>
            </button>
          </div>
          {/* <!-- End Logo Header --> */}
        </div>
        <div className="sidebar-wrapper scrollbar scrollbar-inner">
          <div className="sidebar-content">
            <ul className="nav nav-secondary">
              <li className="nav-item active">
                <Link to="/">
                  <i className="fas fa-home"></i>
                  <p>Admin Dashboard</p>
                </Link>
              </li>
              <li className="nav-section">
                <span className="sidebar-mini-icon">
                  <i className="fa fa-ellipsis-h"></i>
                </span>
                <h4 className="text-section">Components</h4>
              </li>

              {/* Parent Section */}
              <li className="nav-item">
                <a data-bs-toggle="collapse" href="#parentSection">
                  <i className="fas fa-users"></i>
                  <p>Parent Section</p>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="parentSection">
                  <ul className="nav nav-collapse">
                    <li>
                      <Link to="/add-parent">
                        <span className="sub-item">Add Parent</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/view-parent">
                        <span className="sub-item">View Parent</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Student Section */}
              <li className="nav-item">
                <a data-bs-toggle="collapse" href="#studentSection">
                  <i className="fas fa-child"></i>
                  <p>Student Section</p>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="studentSection">
                  <ul className="nav nav-collapse">
                    <li>
                      <Link to="/add-student">
                        <span className="sub-item">Add Student</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/view-student">
                        <span className="sub-item">View Student</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Driver Section */}
              <li className="nav-item">
                <a data-bs-toggle="collapse" href="#driverSection">
                  <i className="fas fa-bus"></i>
                  <p>Driver Section</p>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="driverSection">
                  <ul className="nav nav-collapse">
                    <li>
                      <Link to="/add-driver">
                        <span className="sub-item">Add Driver</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/view-driver">
                        <span className="sub-item">View Driver</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a data-bs-toggle="collapse" href="#busSection">
                  <i className="fas fa-bus"></i>
                  <p>Bus Section</p>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="busSection">
                  <ul className="nav nav-collapse">
                    <li>
                      <Link to="/assign-bus">
                        <span className="sub-item">Assign Bus to Driver</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>
      {/* <!-- End Sidebar --> */}
    </>
  );
};

export default Sidebar;
