// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./AdminLogin.css"; // Ensure this CSS file exists

// const AdminLogin = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setErrorMessage("");

//     try {
//       const response = await axios.post("http://localhost:8080/admin/login", null, {
//         params: formData,
//       });

//       alert("Login successful!");
//       console.log("Response:", response.data);

//       // Store authentication token if needed (Assuming JWT)
//       localStorage.setItem("adminToken", response.data.token);

//       // Redirect to admin dashboard
//       navigate("/");
//     } catch (error) {
//       console.error("Login failed:", error);
//       setErrorMessage("Invalid email or password. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="admin-login-container">
//       <div className="admin-login-box">
//         <h2 className="admin-login-title">Admin Login</h2>

//         {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Error Message */}

//         <form onSubmit={handleSubmit}>
//           <div>
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               className="admin-input"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           <div>
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               className="admin-input"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter your password"
//               required
//             />
//           </div>

//           <button type="submit" className="admin-button" disabled={loading}>
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css"; // Ensure this CSS file exists

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await axios.post("http://localhost:8080/login", null, {
        params: formData,
      });

      const { userRole, message } = response.data; // Get userRole and message from response

      alert(message); // Show login success message

      // Store userRole in localStorage
      localStorage.setItem("userRole", userRole);

      // Redirect based on user role
      if (userRole === "ADMIN") {
        navigate("/"); // Redirect to Admin Dashboard
      } else if (userRole === "PARENT") {
        navigate("/parent-dashboard"); // Redirect to Parent Dashboard
      } else if (userRole === "DRIVER") {
        navigate("/driver-dashboard"); // Redirect to Driver Dashboard
      } else {
        setErrorMessage("Invalid login. Please try again.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <h2 className="admin-login-title">Login</h2>

        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Error Message */}

        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="admin-input"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="admin-input"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="admin-button" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
