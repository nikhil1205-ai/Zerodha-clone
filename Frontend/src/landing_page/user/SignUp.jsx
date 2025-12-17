import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import api from "../../api";
import AlertDialog from "../../AlertDialog"

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    mobile_no: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      const res = await api.post("/user/signup",{
        username: formData.username,
        mobile_no: formData.mobile_no,
        email: formData.email,
        password: formData.password,
      });
      setShowDialog(true);
      window.location.href = "http://localhost:5173/";
    } catch (err) {
      console.error(err);
      alert("Signup failed");
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="card shadow-sm p-4" style={{ maxWidth: "420px", width: "100%" }}>
        <h4 className="fw-bold text-center mb-3">Create Account</h4>

        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            name="username"
            type="text"
            className="form-control"
            placeholder="Enter username"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Mobile Number</label>
          <input
            name="mobile_no"
            type="number"
            className="form-control"
            placeholder="Enter mobile number"
            onChange={handleChange}
          />
        </div>

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

        <button className="btn btn-primary w-100" onClick={handleSignup} >
          Create Account
        </button>

        <p className="text-center mt-3 text-muted">
          Already have an account? <Link to="/login" style={{textDecoration:"none"}}>Login</Link>
        </p>
      </div>
    </div>
  );
}
