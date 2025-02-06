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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/parent-dashboard" element={<ParentDashboard />} />
          <Route path="/driver-dashboard" element={<DriverDashboard />} />
          <Route path="add-parent" element={<AddParent />} />
          <Route path="view-parent" element={<ViewParent />} />
          <Route path="add-student" element={<AddStudent />} />
          <Route path="view-student" element={<ViewStudent />} />
          <Route path="add-driver" element={<AddDriver />} />
          <Route path="assign-bus" element={<AddBusToDriverPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
