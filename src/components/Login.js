import "../css/style.css";
import "../App.css";
import Pic from "../assets/logo1.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
            <img src={Pic} />
            <h2>Empowering Dreams, One Affordable Loan at a Time.</h2>
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
              <a href="#">Forgot password?</a>
              <button className="btn-new">Apply For A New Loan</button>
            </div>
            <p>
              <a href="#">
                <b>Apply Now</b>
              </a>{" "}
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
              <a href="#">Chinese</a>
            </li>
            <li>
              <a href="#">Portuguese (Brazil)</a>
            </li>
            <li>
              <a href="#">Korean</a>
            </li>
            <li>
              <a href="#">Espanol</a>
            </li>
            <li>
              <a href="#">Bahasa (Indonesia)</a>
            </li>
            <li>
              <a href="#">Francais (France)</a>
            </li>
            <li>
              <a href="#">Deutsch</a>
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
