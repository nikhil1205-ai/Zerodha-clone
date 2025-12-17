import React, { useState } from "react";
import { Link } from 'react-router-dom';
import api from "../../api";
import AlertDialog from "../../AlertDialog"
export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      await api.post("/user/login",
        {
          email: formData.email,
          password: formData.password,
        });
      window.location.href = "http://localhost:5173/"; 
    } catch (err) {
      console.error(err);
      alert("Invalid email or password");
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="card shadow-sm p-4" style={{ maxWidth: "380px", width: "100%" }}>
        <h4 className="fw-bold text-center mb-3">Login</h4>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-primary w-100" onClick={handleLogin}>
          Login
        </button>

        <p className="text-center mt-3 text-muted">
          Don’t have an account? <Link to="/signup" style={{textDecoration:"none"}}>Sign up</Link>
        </p>
      </div>
    </div>
  );
}
