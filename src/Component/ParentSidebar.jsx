import React from "react";
import { Link } from "react-router-dom";

const ParentSidebar = () => {
  return (
    <div className="sidebar" data-background-color="dark">
      <div className="sidebar-logo">
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
      </div>
      <div className="sidebar-wrapper scrollbar scrollbar-inner">
        <div className="sidebar-content">
          <ul className="nav nav-secondary">
            <li className="nav-item active">
              <Link to="/parent-dashboard">
                <i className="fas fa-home"></i>
                <p>Parent Dashboard</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/daily-status">
                <i className="fas fa-calendar-day"></i>
                <p>Daily Status</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/monthly-status">
                <i className="fas fa-calendar-alt"></i>
                <p>Monthly Status</p>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default ParentSidebar;
