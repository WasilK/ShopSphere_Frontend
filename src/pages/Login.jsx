import "./Login.css";
import { Link } from "react-router-dom";
export function Login() {
  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>

      <div className="mb-3 login-form">
        <label htmlFor="inputEmail4" className="form-label">
          Email
        </label>

        <input
          type="email"
          className="form-control"
          id="inputEmail4"
          placeholder="example@gmail.com"
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
        />
      </div>

      <button className="login-btn">Login</button>

      <div className="text-center mt-3">
        <span>Don't have an account? </span>
        <Link to="/signup" className="login-link">
          Register
        </Link>
      </div>
    </div>
  );
}
