// import React from 'react'
// import Sidebar from './Sidebar'
// import NavBar from './NavBar'
// import Footer from './Footer'

// const Dashboard = () => {
//     return (
//         <>

//             <div className="wrapper">
//                 <Sidebar />
//                 <div className="main-panel">
//                     <div className="main-header">
//                         <div className="main-header-logo">
//                             {/* <!-- Logo Header --> */}
//                             <div className="logo-header" data-background-color="dark">
//                                 <a href="index.html" className="logo">
//                                     <img
//                                         src="assets/img/kaiadmin/logo_light.svg"
//                                         alt="navbar brand"
//                                         className="navbar-brand"
//                                         height="20"
//                                     />
//                                 </a>
//                                 <div className="nav-toggle">
//                                     <button className="btn btn-toggle toggle-sidebar">
//                                         <i className="gg-menu-right"></i>
//                                     </button>
//                                     <button className="btn btn-toggle sidenav-toggler">
//                                         <i className="gg-menu-left"></i>
//                                     </button>
//                                 </div>
//                                 <button className="topbar-toggler more">
//                                     <i className="gg-more-vertical-alt"></i>
//                                 </button>
//                             </div>
//                             {/* <!-- End Logo Header --> */}
//                         </div>

//                         <NavBar />

//                     </div>
//                     <div className="container">
//                         <div className="page-inner">
//                             <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row pt-2 pb-4">
//                                 <div>
//                                     <h3 className="fw-bold mb-3">Dashboard</h3>
//                                     <h6 className="op-7 mb-2">Free Bootstrap 5 Admin Dashboard</h6>
//                                 </div>
//                                 <div className="ms-md-auto py-2 py-md-0">
//                                     <a href="#" className="btn btn-label-info btn-round me-2">Manage</a>
//                                     <a href="#" className="btn btn-primary btn-round">Add Customer</a>
//                                 </div>
//                             </div>
//                             <div className="row">
//                                 <div className="col-sm-6 col-md-3">
//                                     <div className="card card-stats card-round">
//                                         <div className="card-body">
//                                             <div className="row align-items-center">
//                                                 <div className="col-icon">
//                                                     <div
//                                                         className="icon-big text-center icon-primary bubble-shadow-small"
//                                                     >
//                                                         <i className="fas fa-users"></i>
//                                                     </div>
//                                                 </div>
//                                                 <div className="col col-stats ms-3 ms-sm-0">
//                                                     <div className="numbers">
//                                                         <p className="card-category">Visitors</p>
//                                                         <h4 className="card-title">1,294</h4>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-sm-6 col-md-3">
//                                     <div className="card card-stats card-round">
//                                         <div className="card-body">
//                                             <div className="row align-items-center">
//                                                 <div className="col-icon">
//                                                     <div
//                                                         className="icon-big text-center icon-info bubble-shadow-small"
//                                                     >
//                                                         <i className="fas fa-user-check"></i>
//                                                     </div>
//                                                 </div>
//                                                 <div className="col col-stats ms-3 ms-sm-0">
//                                                     <div className="numbers">
//                                                         <p className="card-category">Subscribers</p>
//                                                         <h4 className="card-title">1303</h4>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-sm-6 col-md-3">
//                                     <div className="card card-stats card-round">
//                                         <div className="card-body">
//                                             <div className="row align-items-center">
//                                                 <div className="col-icon">
//                                                     <div
//                                                         className="icon-big text-center icon-success bubble-shadow-small"
//                                                     >
//                                                         <i className="fas fa-luggage-cart"></i>
//                                                     </div>
//                                                 </div>
//                                                 <div className="col col-stats ms-3 ms-sm-0">
//                                                     <div className="numbers">
//                                                         <p className="card-category">Sales</p>
//                                                         <h4 className="card-title">$ 1,345</h4>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-sm-6 col-md-3">
//                                     <div className="card card-stats card-round">
//                                         <div className="card-body">
//                                             <div className="row align-items-center">
//                                                 <div className="col-icon">
//                                                     <div
//                                                         className="icon-big text-center icon-secondary bubble-shadow-small"
//                                                     >
//                                                         <i className="far fa-check-circle"></i>
//                                                     </div>
//                                                 </div>
//                                                 <div className="col col-stats ms-3 ms-sm-0">
//                                                     <div className="numbers">
//                                                         <p className="card-category">Order</p>
//                                                         <h4 className="card-title">576</h4>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <Footer />
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Dashboard


// import React from "react";

// const Dashboard = () => {
//   return (
//     <>
//       <div className="container">
//         <div className="page-inner">
//           <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row pt-2 pb-4">
//             <div>
//               <h3 className="fw-bold mb-3">Dashboard</h3>
//               <h6 className="op-7 mb-2">Free Bootstrap 5 Admin Dashboard</h6>
//             </div>
//             <div className="ms-md-auto py-2 py-md-0">
//               <a href="#" className="btn btn-label-info btn-round me-2">
//                 Manage
//               </a>
//               <a href="#" className="btn btn-primary btn-round">
//                 Add Customer
//               </a>
//             </div>
//           </div>
//           <div class="row">
//             <div class="col-sm-6 col-md-3">
//               <div class="card card-stats card-round">
//                 <div class="card-body">
//                   <div class="row align-items-center">
//                     <div class="col-icon">
//                       <div
//                         class="icon-big text-center icon-primary bubble-shadow-small"
//                       >
//                         <i class="fas fa-users"></i>
//                       </div>
//                     </div>
//                     <div class="col col-stats ms-3 ms-sm-0">
//                       <div class="numbers">
//                         <p class="card-category">Visitors</p>
//                         <h4 class="card-title">1,294</h4>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="col-sm-6 col-md-3">
//               <div class="card card-stats card-round">
//                 <div class="card-body">
//                   <div class="row align-items-center">
//                     <div class="col-icon">
//                       <div
//                         class="icon-big text-center icon-info bubble-shadow-small"
//                       >
//                         <i class="fas fa-user-check"></i>
//                       </div>
//                     </div>
//                     <div class="col col-stats ms-3 ms-sm-0">
//                       <div class="numbers">
//                         <p class="card-category">Subscribers</p>
//                         <h4 class="card-title">1303</h4>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="col-sm-6 col-md-3">
//               <div class="card card-stats card-round">
//                 <div class="card-body">
//                   <div class="row align-items-center">
//                     <div class="col-icon">
//                       <div
//                         class="icon-big text-center icon-success bubble-shadow-small"
//                       >
//                         <i class="fas fa-luggage-cart"></i>
//                       </div>
//                     </div>
//                     <div class="col col-stats ms-3 ms-sm-0">
//                       <div class="numbers">
//                         <p class="card-category">Sales</p>
//                         <h4 class="card-title">$ 1,345</h4>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="col-sm-6 col-md-3">
//               <div class="card card-stats card-round">
//                 <div class="card-body">
//                   <div class="row align-items-center">
//                     <div class="col-icon">
//                       <div
//                         class="icon-big text-center icon-secondary bubble-shadow-small"
//                       >
//                         <i class="far fa-check-circle"></i>
//                       </div>
//                     </div>
//                     <div class="col col-stats ms-3 ms-sm-0">
//                       <div class="numbers">
//                         <p class="card-category">Order</p>
//                         <h4 class="card-title">576</h4>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;


import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="container">
        <div className="page-inner">
          <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row pt-2 pb-4">
            <div>
              <h3 className="fw-bold mb-3">Dashboard</h3>
              <h6 className="op-7 mb-2">School Bus Tracking System</h6>
            </div>
            {/* <div className="ms-md-auto py-2 py-md-0">
              <a href="#" className="btn btn-label-info btn-round me-2">
                Manage
              </a>
              <a href="#" className="btn btn-primary btn-round">
                Add Customer
              </a>
            </div> */}
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <div className="card card-stats card-round">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-icon">
                      <div className="icon-big text-center icon-primary bubble-shadow-small">
                        <i className="fas fa-users"></i>
                      </div>
                    </div>
                    <div className="col col-stats ms-3 ms-sm-0">
                      <div className="numbers">
                        <p className="card-category">Students</p>
                        <h4 className="card-title">45</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="card card-stats card-round">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-icon">
                      <div className="icon-big text-center icon-info bubble-shadow-small">
                        <i className="fas fa-bus"></i>
                      </div>
                    </div>
                    <div className="col col-stats ms-3 ms-sm-0">
                      <div className="numbers">
                        <p className="card-category">Buses</p>
                        <h4 className="card-title">5</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="card card-stats card-round">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-icon">
                      <div className="icon-big text-center icon-success bubble-shadow-small">
                        <i className="fas fa-user-tie"></i>
                      </div>
                    </div>
                    <div className="col col-stats ms-3 ms-sm-0">
                      <div className="numbers">
                        <p className="card-category">Drivers</p>
                        <h4 className="card-title">3</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="card card-stats card-round">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-icon">
                      <div className="icon-big text-center icon-secondary bubble-shadow-small">
                        <i className="fas fa-user-friends"></i>
                      </div>
                    </div>
                    <div className="col col-stats ms-3 ms-sm-0">
                      <div className="numbers">
                        <p className="card-category">Parents</p>
                        <h4 className="card-title">30</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
