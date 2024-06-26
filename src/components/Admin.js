import "bootstrap/dist/css/bootstrap.min.css";
import Brand from "../assets/brand.jpeg";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import backgroundImg from "../assets/client.jpg";

export default function Admin() {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    fetchData(searchName);
  }, [searchName]);

  const fetchData = async (fullName = "") => {
    try {
      let url = "http://localhost:5032/api/PersonalDetail";
      if (fullName !== "") {
        url = `http://localhost:5032/api/PersonalDetail/GetByName/${fullName}`;
      }
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="overflow-auto custom-background"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link to="/admin" className="navbar-brand">
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
                  <Link className="nav-link" to="/approveLoan">
                    Approve A Loan
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/declineLoan">
                    Decline A Loan
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Logout
                  </Link>
                </li>
              </ul>
              <form
                className="d-flex"
                onSubmit={(e) => {
                  e.preventDefault();
                  fetchData(searchName);
                }}
                style={{ fontFamily: "helvetica" }}
              >
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Enter Name To Search"
                  aria-label="Search"
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <div style={{ fontFamily: "arial" }}>
        <div style={{ justifyContent: "center" }}>
          <div className="container">
            <div
              className="table-responsive"
              style={{
                maxHeight: "500px",
                overflowY: "scroll",
                marginTop: "70px",
              }}
            >
              <table className="table table-striped">
                <caption>Loan Applications</caption>
                <thead className="table-dark">
                  <tr>
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>National ID</th>
                    <th>Physical Address</th>
                    <th>Email Address</th>
                    <th>Employer</th>
                    <th>Job Title</th>
                    <th>Monthly Income</th>
                    <th>Loan Amount</th>
                    <th>Loan Tenure</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((personalDetail) => (
                    <tr key={personalDetail.personalDetailId}>
                      <td>{personalDetail.personalDetailId}</td>
                      <td>{personalDetail.fullName}</td>
                      <td>{personalDetail.nationalId}</td>
                      <td>{personalDetail.address}</td>
                      <td>{personalDetail.emailAddress}</td>
                      <td>{personalDetail.employer}</td>
                      <td>{personalDetail.jobTitle}</td>
                      <td>{personalDetail.monthlyIncome}</td>
                      <td>{personalDetail.loanAmount}</td>
                      <td>{personalDetail.loanTenure}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
