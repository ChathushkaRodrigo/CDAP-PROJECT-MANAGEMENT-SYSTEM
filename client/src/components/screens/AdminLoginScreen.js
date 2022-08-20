import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./LoginScreen.css";


const AdminLoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/adminPrivate");
    }
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/adminAuth/login",
        { email, password },
        config
      );

      localStorage.setItem("authToken", data.token);

      history.push("/adminPrivate");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="login-screen">
      <form onSubmit={loginHandler} className="login-screen__form">
        <h3 className="login-screen__title">Admin Login</h3>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group">
          <label htmlFor="email" id="EmailID">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            tabIndex={1}
            className="placeholder:text-black focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-black text-serif text-b "

          />
        </div>
        <div className="form-group">
          <label htmlFor="password" id="PasswordID">
            Password:{" "}
            <Link to="/forgotpassword" className="login-screen__forgotpassword">
              Forgot Password?
            </Link>
          </label>
          <input
            type="password"
            required
            id="password"
            autoComplete="true"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            tabIndex={2}
            className="placeholder:text-black focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-black text-serif text-b "

          />
        </div>
        <button type="submit" className="" id="Log1Button">
          Login
        </button>

        <span className="login-screen__subtext">
          Don't have an account? <Link to="/register" id="Regs">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default AdminLoginScreen;
