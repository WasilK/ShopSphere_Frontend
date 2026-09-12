import { useState } from "react";
import axios from "axios";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
export function Login({ setIsLoggedIn, setIsAdmin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [backendError, setBackendError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setBackendError("");

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          userEmail: email,
          password: password,
        },
      );

      console.log(response.data);

      // If backend returns JWT
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
      setIsLoggedIn(true);
      setIsAdmin(response.data.role === "ADMIN");

      console.log(response.data.role);

      navigate("/");
    } catch (error) {
      setBackendError(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>

      {backendError && <div className="alert alert-danger">{backendError}</div>}

      <form onSubmit={handleLogin}>
        <div className="mb-3 login-form">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>

          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">
            Password
          </label>

          <input
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="login-btn">Login</button>

        <div className="text-center mt-3">
          <span>Don't have an account? </span>
          <Link to="/signup" className="login-link">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}
