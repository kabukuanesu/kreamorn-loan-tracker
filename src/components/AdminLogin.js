import "../css/style.css";
import "../App.css";
import Pic from "../assets/logo1.png";

export default function AdminLogin() {
  return (
    <div>
      <main>
        <div className="row">
          <div className="colm-logo">
            <img src={Pic} />
            <h2>Empowering Dreams, One Affordable Loan at a Time.</h2>
          </div>
          <div className="colm-form">
            <div className="form-container">
              <input type="text" placeholder="Email or EC Number" />
              <input type="password" placeholder="Password" />
              <button className="btn-login">Login</button>
              <a href="#">Forgot password?</a>
              <button className="btn-new">Home</button>
            </div>
            <p>
              <a href="#">
                <b>Providing Loans</b>
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
