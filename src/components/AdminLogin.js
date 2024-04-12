import "../css/style.css";
import "../App.css";
import Pic from "../assets/login.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toast } from "react-bootstrap";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [ecNumber, setEcNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  const handleLogin = () => {
    const data = {
      ecNumber: ecNumber,
      password: password,
    };

    fetch("http://localhost:5032/api/AdminDetail/Authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          navigate("/admin");
          setShowSuccessToast(true);
        } else {
          console.log("Authentication failed");
          setShowErrorToast(true);
        }
      })
      .catch((error) => {
        console.log("Error occurred during authentication:", error);
      });
  };

  return (
    <div>
      <div>
        <Toast
          show={showSuccessToast}
          onClose={() => setShowSuccessToast(false)}
          delay={3000}
          autohide
          bg="success"
          text="light"
        >
          <Toast.Body>Login Successful!</Toast.Body>
        </Toast>

        <Toast
          show={showErrorToast}
          onClose={() => setShowErrorToast(false)}
          delay={3000}
          autohide
          bg="danger"
          text="light"
        >
          <Toast.Body>Wrong Username or Password</Toast.Body>
        </Toast>
      </div>
      <main>
        <div className="row">
          <div className="colm-logo">
            <img src={Pic} />
            <h2 style={{ fontFamily: "helvetica", color: "hsl(0, 100%, 30%)" }}>
              Let us lend you a helping hand.
            </h2>
          </div>
          <div className="colm-form" style={{ fontFamily: "helvetica" }}>
            <div className="form-container">
              <input
                type="text"
                placeholder="EC Number"
                value={ecNumber}
                onChange={(e) => setEcNumber(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="btn-login" onClick={handleLogin}>
                Login
              </button>
              <Link to="/">Forgot password?</Link>
              <Link to="/">
                <button className="btn-new">Home</button>
              </Link>
            </div>
            <p style={{ fontFamily: "helvetica" }}>
              <Link to="/signup">
                <b>Providing Loans</b>
              </Link>{" "}
              To Unlock Opportunities & Empower Finances.
            </p>
          </div>
        </div>
      </main>
      <footer>
        <div className="footer-contents">
          <ul>
            <li>English (US)</li>
            <li>
              <Link to="#">Chinese</Link>
            </li>
            <li>
              <Link to="#">Portuguese (Brazil)</Link>
            </li>
            <li>
              <Link to="#">Korean</Link>
            </li>
            <li>
              <Link to="#">Espanol</Link>
            </li>
            <li>
              <Link to="#">Bahasa (Indonesia)</Link>
            </li>
            <li>
              <Link to="#">Francais (France)</Link>
            </li>
            <li>
              <Link to="#">Deutsch</Link>
            </li>
            <li>
              <button>+</button>
            </li>
          </ul>
          <small>AK @ 2024</small>
        </div>
      </footer>
    </div>
  );
}
