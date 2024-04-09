import "../css/style.css";
import "../App.css";
import logo from "../assets/login.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toast } from "react-bootstrap";

export default function Login() {
  const navigate = useNavigate();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const handleLogin = () => {
    const data = {
      emailAddress: emailAddress,
      password: password,
    };

    fetch("http://localhost:5032/api/PersonalDetail/Authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          navigate("/client");
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
            <img src={logo} />
            <h2>Let us lend you a helping hand.</h2>
          </div>
          <div className="colm-form">
            <div className="form-container">
              <input
                type="text"
                id="emailAddress"
                placeholder="Email Address"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
              />
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="btn-login" onClick={handleLogin}>
                Login
              </button>
              <Link to="/">Forgot password?</Link>
              <Link to="/signup">
                <button className="btn-new">Apply For A New Loan</button>
              </Link>
            </div>
            <p>
              <Link to="/signup">
                <b>Apply Now</b>
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
