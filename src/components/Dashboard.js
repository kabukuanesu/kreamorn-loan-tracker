import "bootstrap/dist/css/bootstrap.min.css";
import Brand from "../assets/logo3.jpeg";
import Signup from "./Signup";
import Login from "./Login";
import Pic1 from "../assets/pexels-pixabay-50987 (1).jpg";
import Pic2 from "../assets/logo2.jpeg";
import Pic3 from "../assets/logo3.jpeg";
import React, { useState, useEffect } from "react";

export default function Dashboard() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the carousel index
      setCarouselIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, []);
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href={Dashboard}>
              <img
                src={Brand}
                alt="Logo"
                width="30"
                height="24"
                className="d-inline-block align-text-top"
              />
              ` Kreamorn Loan Tracker
            </a>
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
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href={Dashboard}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={Signup}>
                    Loan Application
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={Login}>
                    Track Loan
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={Login}>
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={Signup}>
                    Signup
                  </a>
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
      <div className="container">
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
    </div>
  );
}
