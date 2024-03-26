import "bootstrap/dist/css/bootstrap.min.css";
import Brand from "../assets/logo3.jpeg";
import Signup from "./Signup";
import Login from "./Login";
import Pic1 from "../assets/pexels-ben-mack-5707613.jpg";
import Pic2 from "../assets/pexels-daniel-dan-7708815.jpg";
import Pic3 from "../assets/pexels-ivan-babydov-7788004.jpg";
import React, { useState, useEffect } from "react";
import Admin from "./Admin";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the carousel index
      setCarouselIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 4000); // Change slide every 4 seconds

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, []);
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img
                src={Brand}
                alt="Logo"
                width="30"
                height="24"
                className="d-inline-block align-text-top"
              />
              ` Kreamorn Loan Tracker
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Loan Application
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Track Loan
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/adminLogin">
                    Admin
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Feedback on experience"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Post
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div
              className={`carousel-item ${carouselIndex === 0 ? "active" : ""}`}
            >
              <img src={Pic2} className="d-block w-100" alt="..." />
            </div>
            <div
              className={`carousel-item ${carouselIndex === 1 ? "active" : ""}`}
            >
              <img src={Pic3} className="d-block w-100" alt="..." />
            </div>
            <div
              className={`carousel-item ${carouselIndex === 2 ? "active" : ""}`}
            >
              <img src={Pic1} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div>
        <section className="bg-gray">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-xl-8 col-lg-7">
                <div className="row feature-blocks bg-gray justify-content-between">
                  <div className="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left">
                    <i className="ti-book mb-xl-4 mb-lg-3 mb-4 feature-icon"></i>
                    <h3 className="mb-xl-4 mb-lg-3 mb-4">Get Involved</h3>
                    <div>
                      <ul>
                        <li>
                          Click on <b>Loan Application</b> to apply for a loan
                          with us.
                        </li>
                        <li>
                          Track your loan progress by clicking on the{" "}
                          <b>Track Loan</b> link above.
                        </li>
                        <li>
                          <b>Login</b> to view your loan progress.
                        </li>
                        <li>
                          <b>Signup</b> to apply a loan with us and enjoy our
                          exclusive benefits.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left">
                    <i className="ti-blackboard mb-xl-4 mb-lg-3 mb-4 feature-icon"></i>
                    <h3 className="mb-xl-4 mb-lg-3 mb-4">Our Mission</h3>
                    <p>
                      Our mission is to support financial growth and prosperity
                      by offering responsible lending solutions. With
                      personalized service and innovative approaches, we strive
                      to be a trusted partner in achieving your financial goals.
                    </p>
                  </div>
                  <div className="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left">
                    <i className="ti-agenda mb-xl-4 mb-lg-3 mb-4 feature-icon"></i>
                    <h3 className="mb-xl-4 mb-lg-3 mb-4">Our Vision</h3>
                    <p>
                      To be the leading provider of innovative lending
                      solutions, setting new standards in customer-centric
                      banking. We envision a future where individuals and
                      businesses have seamless access to the financial resources
                      they need to thrive, backed by cutting-edge technology and
                      exceptional service.
                    </p>
                  </div>
                  <div className="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left">
                    <i className="ti-write mb-xl-4 mb-lg-3 mb-4 feature-icon"></i>
                    <h3 className="mb-xl-4 mb-lg-3 mb-4">Overview</h3>
                    <p>
                      Our bank is committed to providing comprehensive lending
                      services to individuals and businesses. We strive to
                      deliver innovative solutions that meet the diverse
                      financial needs of our customers. With a customer-centric
                      approach, advanced technology, and a dedication to
                      financial empowerment, we aim to be a trusted partner in
                      helping our clients achieve their goals and contribute to
                      their long-term success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
