import "./CustomerLoginPage.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../../auth/useAuth";

const CustomerLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  // const { login } = useAuth();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill the fields");
      return;
    }

    const payload = { email, password };

    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login Successful");
        navigate("/customer");
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (error) {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="page-container">
      <div className="left-side">
        <h1>SpringClean</h1>
      </div>

      <div className="right-side">
        <div className="loginform-container">
          <div className="loginform-header">
            <h2>Customer Login</h2>
            <p>Welcome back! Please log in to continue.</p>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <button className="login-btn" onClick={handleLogin}>
              Log In
            </button>
          </div>

          <p className="signup-text">
            Don’t have an account? <Link to="/Register">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerLoginPage;
