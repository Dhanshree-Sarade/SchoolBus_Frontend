import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Component/Layout";
import Dashboard from "./Component/Dashboard";
import AddParent from "./Pages/AddParent";
import AddStudent from "./Pages/AddStudent";
import AddDriver from "./Pages/AddDriver";
import AddBusToDriverPage from "./Pages/AddBusToDriverPage";
import ViewParent from "./Pages/ViewParent";
import AdminLogin from "./Pages/AdminLogin";
import ParentDashboard from "./Pages/ParentDashboard";
import DriverDashboard from "./Pages/DriverDashboard";
import ViewStudent from "./Pages/ViewStudent";
import AddBusRoute from "./Pages/AddBusRoute";
import BusRoutesList from "./Pages/BusRoutesList";
import StudentStatus from "./Pages/StudentStatus";
import StudentList from "./Pages/StudentListByRoute";
import StudentListByRoute from "./Pages/StudentListByRoute";
import ViewDrivers from "./Pages/ViewDrivers";
import ShowChildStatus from "./Pages/showChildStatus";
import SchoolToHome from "./Pages/SchoolToHome";
import ReportIssue from "./Pages/ReportIssue";
import "./Pages/responsive.css"; // ✅ Importing CSS for responsiveness



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/parent-dashboard" element={<ParentDashboard />} />
          <Route path="/driver-dashboard" element={<DriverDashboard />} />
          {/* <Route path="add-parent" element={<AddParent />} />
          <Route path="view-parent" element={<ViewParent />} /> */}
          <Route path="add-student" element={<AddStudent />} />
          <Route path="view-student" element={<ViewStudent />} />
          <Route path="add-driver" element={<AddDriver />} />
          <Route path="view-driver" element={<ViewDrivers />} />
          <Route path="assign-bus" element={<AddBusToDriverPage />} />
          <Route path="add-bus-route" element={<AddBusRoute />}/>
          <Route path="view-bus-routes" element={<BusRoutesList />}/>
          <Route path="student-status" element={<StudentStatus />}/>
          <Route path="student-status-reverse" element={<SchoolToHome />}/>
          <Route path="/students-list" element={<StudentListByRoute />} />
          <Route path="/daily-status" element={<ShowChildStatus />} />
          <Route path="/report-issue" element={<ReportIssue />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
