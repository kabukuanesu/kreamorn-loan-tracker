import "bootstrap/dist/css/bootstrap.min.css";
import Brand from "../assets/brand.jpeg";
import background1 from "../assets/dashboard1.jpg";
import background2 from "../assets/dashboard2.jpg";
import background3 from "../assets/dashboard3.jpg";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the carousel index
      setCarouselIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 3000); // Change slide every 4 seconds

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
              <form
                className="d-flex"
                role="search"
                style={{ fontFamily: "verdana" }}
              >
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
              <img src={background1} className="d-block w-100" alt="..." />
            </div>
            <div
              className={`carousel-item ${carouselIndex === 1 ? "active" : ""}`}
            >
              <img src={background2} className="d-block w-100" alt="..." />
            </div>
            <div
              className={`carousel-item ${carouselIndex === 2 ? "active" : ""}`}
            >
              <img src={background3} className="d-block w-100" alt="..." />
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
                    <h3
                      className="mb-xl-4 mb-lg-3 mb-4"
                      style={{
                        color: "hsl(0, 100%, 30%)",
                        fontFamily: "verdana",
                      }}
                    >
                      Get Involved
                    </h3>
                    <p style={{ fontFamily: "arial" }}>
                      <ul>
                        <li style={{ fontSize: "13px", color: "black" }}>
                          Click on <b>Loan Application</b> to apply for a loan
                          with us.
                        </li>
                        <li style={{ fontSize: "13px", color: "black" }}>
                          Track your loan progress by clicking on the{" "}
                          <b>Track Loan</b> link above.
                        </li>
                        <li style={{ fontSize: "13px", color: "black" }}>
                          <b>Login</b> to view your loan progress.
                        </li>
                        <li style={{ fontSize: "13px", color: "black" }}>
                          <b>Signup</b> to apply a loan with us and enjoy our
                          exclusive benefits.
                        </li>
                      </ul>
                    </p>
                  </div>
                  <div className="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left">
                    <i className="ti-blackboard mb-xl-4 mb-lg-3 mb-4 feature-icon"></i>
                    <h3
                      className="mb-xl-4 mb-lg-3 mb-4"
                      style={{
                        color: "hsl(0, 100%, 30%)",
                        fontFamily: "verdana",
                      }}
                    >
                      Mission
                    </h3>
                    <p style={{ fontFamily: "arial" }}>
                      <ul>
                        <li style={{ fontSize: "15px", color: "black" }}>
                          To attain maximum stakeholder value through offering
                          innovative financial solutions anchored on mutual
                          partnerships
                        </li>
                      </ul>
                    </p>
                  </div>
                  <div className="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left">
                    <i className="ti-agenda mb-xl-4 mb-lg-3 mb-4 feature-icon"></i>
                    <h3
                      className="mb-xl-4 mb-lg-3 mb-4"
                      style={{
                        color: "hsl(0, 100%, 30%)",
                        fontFamily: "verdana",
                      }}
                    >
                      Vision
                    </h3>
                    <p style={{ fontFamily: "arial" }}>
                      <ul>
                        <li style={{ fontSize: "15px", color: "black" }}>
                          To be preffered global financial solutions provider
                        </li>
                      </ul>
                    </p>
                  </div>
                  <div className="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left">
                    <i className="ti-write mb-xl-4 mb-lg-3 mb-4 feature-icon"></i>
                    <h3
                      className="mb-xl-4 mb-lg-3 mb-4"
                      style={{
                        color: "hsl(0, 100%, 30%)",
                        fontFamily: "verdana",
                      }}
                    >
                      Values
                    </h3>
                    <p style={{ fontFamily: "arial" }}>
                      <ul>
                        <li style={{ fontSize: "14px", color: "black" }}>
                          Dedicated to achieve the Kreamorn dream
                        </li>
                        <li style={{ fontSize: "14px", color: "black" }}>
                          Honest & upright in all dealings
                        </li>
                        <li style={{ fontSize: "14px", color: "black" }}>
                          High competence & skill to become the authorities in
                          the MFI industry
                        </li>
                        <li style={{ fontSize: "14px", color: "black" }}>
                          Oneness in our diversity to achieve a common goal
                        </li>
                        <li style={{ fontSize: "14px", color: "black" }}>
                          Eminence, exceeding expectations
                        </li>
                      </ul>
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
