import { useState } from "react";
import axios from "axios";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";

export function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userEmail: "",
    userPassword: "",
    userPhone: "",
  });

  const [errors, setErrors] = useState({});
  const [backendError, setBackendError] = useState("");

  const navigate = useNavigate();

  // --------------------------------
  // Validate one field
  // --------------------------------
  const validateField = (name, value) => {
    let message = "";

    switch (name) {
      case "firstName":
        if (!value.trim()) {
          message = "First name is required";
        } else if (value.length < 3 || value.length > 30) {
          message =
            "First name must be between 3 and 30 characters";
        } else if (!/^[a-zA-Z]+(?: [A-Za-z]+)*$/.test(value)) {
          message = "First name must contain only letters";
        }
        break;

      case "lastName":
        if (!value.trim()) {
          message = "Last name is required";
        } else if (value.length < 3 || value.length > 30) {
          message =
            "Last name must be between 3 and 30 characters";
        } else if (!/^[a-zA-Z]*$/.test(value)) {
          message = "Last name must contain only letters";
        }
        break;

      case "userEmail":
        if (!value.trim()) {
          message = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          message = "Invalid email format";
        }
        break;

      case "userPassword":
        if (!value) {
          message = "Password is mandatory.";
        } else if (
          !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
            value
          )
        ) {
          message =
            "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.";
        }
        break;

      case "userPhone":
        if (!value.trim()) {
          message = "Phone number is mandatory";
        } else if (!/^[0-9]{10}$/.test(value)) {
          message =
            "Phone number must contain exactly 10 digits";
        }
        break;

      default:
        break;
    }

    return message;
  };

  // --------------------------------
  // Handle input
  // --------------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validate immediately while typing
    const message = validateField(name, value);

    setErrors((prev) => ({
      ...prev,
      [name]: message,
    }));

    // Remove old backend error
    setBackendError("");
  };

  // --------------------------------
  // Validate entire form
  // --------------------------------
  const validateForm = () => {
    const newErrors = {};

    Object.keys(formData).forEach((field) => {
      const message = validateField(field, formData[field]);

      if (message) {
        newErrors[field] = message;
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // --------------------------------
  // Submit
  // --------------------------------
  const handleSignup = async (e) => {
    e.preventDefault();

    setBackendError("");

    // Stop here if validation fails
    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/register",
        formData
      );

      console.log(response.data);

      // Registration successful
      navigate("/login");

    } catch (error) {
      console.error("Signup failed:", error);

      if (error.response) {
        setBackendError(
          error.response.data?.message ||
            "Registration failed. Please try again."
        );
      } else if (error.request) {
        setBackendError(
          "Unable to connect to the server. Please try again."
        );
      } else {
        setBackendError(
          "Something went wrong. Please try again."
        );
      }
    }
  };

  return (
    <div className="signup-container">

      <h2 className="signup-title">
        Create Account
      </h2>

      {/* Backend error */}
      {backendError && (
        <div className="alert alert-danger">
          {backendError}
        </div>
      )}

      <form onSubmit={handleSignup} noValidate>

        {/* ================= First Name ================= */}

        <div className="mb-3">

          <label
            htmlFor="firstName"
            className="form-label"
          >
            First Name
          </label>

          <input
            type="text"
            id="firstName"
            name="firstName"
            className={`form-control ${
              errors.firstName ? "is-invalid" : ""
            }`}
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange}
          />

          {errors.firstName && (
            <div className="invalid-feedback">
              {errors.firstName}
            </div>
          )}

        </div>

        {/* ================= Last Name ================= */}

        <div className="mb-3">

          <label
            htmlFor="lastName"
            className="form-label"
          >
            Last Name
          </label>

          <input
            type="text"
            id="lastName"
            name="lastName"
            className={`form-control ${
              errors.lastName ? "is-invalid" : ""
            }`}
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
          />

          {errors.lastName && (
            <div className="invalid-feedback">
              {errors.lastName}
            </div>
          )}

        </div>

        {/* ================= Email ================= */}

        <div className="mb-3">

          <label
            htmlFor="userEmail"
            className="form-label"
          >
            Email
          </label>

          <input
            type="email"
            id="userEmail"
            name="userEmail"
            className={`form-control ${
              errors.userEmail ? "is-invalid" : ""
            }`}
            placeholder="example@gmail.com"
            value={formData.userEmail}
            onChange={handleChange}
          />

          {errors.userEmail && (
            <div className="invalid-feedback">
              {errors.userEmail}
            </div>
          )}

        </div>

        {/* ================= Password ================= */}

        <div className="mb-3">

          <label
            htmlFor="userPassword"
            className="form-label"
          >
            Password
          </label>

          <input
            type="password"
            id="userPassword"
            name="userPassword"
            className={`form-control ${
              errors.userPassword ? "is-invalid" : ""
            }`}
            placeholder="Enter your password"
            value={formData.userPassword}
            onChange={handleChange}
          />

          {errors.userPassword && (
            <div className="invalid-feedback">
              {errors.userPassword}
            </div>
          )}

        </div>

        {/* ================= Phone ================= */}

        <div className="mb-3">

          <label
            htmlFor="userPhone"
            className="form-label"
          >
            Phone Number
          </label>

          <input
            type="tel"
            id="userPhone"
            name="userPhone"
            className={`form-control ${
              errors.userPhone ? "is-invalid" : ""
            }`}
            placeholder="Enter 10 digit phone number"
            value={formData.userPhone}
            onChange={handleChange}
          />

          {errors.userPhone && (
            <div className="invalid-feedback">
              {errors.userPhone}
            </div>
          )}

        </div>

        {/* ================= Submit ================= */}

        <button
          type="submit"
          className="signup-btn"
        >
          Create Account
        </button>

        {/* ================= Login ================= */}

        <div className="text-center mt-3">

          <span>
            Already have an account?{" "}
          </span>

          <Link
            to="/login"
            className="signup-link"
          >
            Login
          </Link>

        </div>

      </form>

    </div>
  );
}

