import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImg from "../assets/pexels-gdtography-911738.jpg";
import Brand from "../assets/logo3.jpeg";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Client() {
  const [nationalId, setNationalId] = useState("");
  const [fullName, setFullName] = useState("");
  const [approved, setApproved] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isProcessed, setIsProcessed] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [isRejected, setIsRejected] = useState(false);
  const fundedButtonRef = useRef();

  useEffect(() => {
    if (nationalId) {
      fetchData();
    }
  }, [nationalId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `http://localhost:5032/api/LoanDetail/NationalId/${nationalId}`
      );
      const data = await response.json();
      if (data.length > 0) {
        setFullName(data[0].fullName);
        setApproved(data[0].approved);
        setIsProcessed(true);
        document.getElementById("processed").click(); // Click on the 'processed' button
        document.getElementById("notProcessed").classList.remove("active");
        if (data[0].approved === "Yes") {
          setIsAccepted(true);
          setIsRejected(false);
        } else {
          setIsAccepted(false);
          setIsRejected(true);
        }
      } else {
        setFullName("");
        setApproved("");
        setIsProcessed(false);
        document.getElementById("notProcessed").click(); // Click on the 'notProcessed' button
        document.getElementById("notProcessed").classList.add("active");
        setIsAccepted(false);
        setIsRejected(false);
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
    setIsLoading(false);
  };

  const handleReview = () => {
    document.getElementById("notFunded").checked = true;
  };

  const handleReject = () => {
    document.getElementById("rejected").click();
    document.getElementById("notFunded").click();
    setIsAccepted(false);
    setIsRejected(true);
  };

  const handleAccept = () => {
    fundedButtonRef.current.click();
    document.getElementById("notFunded").classList.add("active");
    setIsAccepted(true);
    setIsRejected(false);
  };

  const handleClickProcessed = () => {
    if (!isProcessed) {
      setIsProcessed(true);
      document.getElementById("notProcessed").classList.remove("active");
    }
  };

  const handleClickNotProcessed = () => {
    if (isProcessed) {
      setIsProcessed(false);
      document.getElementById("notProcessed").classList.add("active");
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
            <a className="navbar-brand" href={Client}>
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
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    New Loan Application
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Track Another Loan
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search" onSubmit={handleSubmit}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Enter National ID"
                  aria-label="Search"
                  value={nationalId}
                  onChange={(e) => setNationalId(e.target.value)}
                />
                <button className="btn btn-outline-success" type="submit">
                  Enter
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <br />
      </div>
      <div>
        <h1 style={{ textAlign: "center" }}>
          Welcome To Kreamorn Loan Tracker
        </h1>
      </div>
      <div>
        <br />
        <br />
      </div>
      <div style={{ textAlign: "center" }}>
        <h3> {fullName} Application Status</h3>
      </div>
      <div>
        <br />
        <br />
      </div>
      <div style={{ textAlign: "center" }}>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic checkbox toggle button group"
        >
          <input
            type="checkbox"
            className="btn-check"
            id="submitted"
            autocomplete="off"
            defaultChecked
          />
          <label className="btn btn-outline-primary" htmlFor="submitted">
            &#128077; Submitted
          </label>

          <input
            type="checkbox"
            className="btn-check"
            id="processed"
            autoComplete="off"
            disabled={!isProcessed}
            onClick={handleClickProcessed}
          />
          <label className="btn btn-outline-primary" htmlFor="processed">
            &#128077; Processed
          </label>

          <input
            type="checkbox"
            className="btn-check"
            id="accepted"
            autoComplete="off"
            disabled={!isProcessed || isRejected}
            checked={isAccepted}
            onClick={handleAccept}
          />
          <label className="btn btn-outline-primary" htmlFor="accepted">
            &#128077; Accepted
          </label>

          <input
            type="checkbox"
            className="btn-check"
            id="funded"
            autocomplete="off"
            onClick={() => {}}
            ref={fundedButtonRef}
          />
          <label className="btn btn-outline-primary" htmlFor="funded">
            &#128077; Funded
          </label>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic checkbox toggle button group"
        >
          <input
            type="radio"
            className="btn-check"
            name="vbtn-radio"
            id="notSubmitted"
            autocomplete="off"
          />
          <label className="btn btn-outline-danger" htmlFor="notSubmitted">
            Not Submitted
          </label>

          <input
            type="radio"
            className="btn-check"
            name="vbtn-radio"
            id="notProcessed"
            autoComplete="off"
            disabled={isProcessed}
            onClick={handleClickNotProcessed}
          />
          <label className="btn btn-outline-danger" htmlFor="notProcessed">
            Not Processed
          </label>

          <input
            type="checkbox"
            className="btn-check"
            id="rejected"
            autoComplete="off"
            disabled={!isProcessed || isAccepted}
            checked={isRejected}
            onClick={handleReject}
          />
          <label className="btn btn-outline-danger" htmlFor="rejected">
            &#128078; Rejected
          </label>

          <input
            type="checkbox"
            className="btn-check"
            id="notFunded"
            autoComplete="off"
            checked={isRejected}
            onClick={handleReject}
          />
          <label className="btn btn-outline-danger" htmlFor="notFunded">
            Not Funded
          </label>
        </div>
      </div>
      <div>
        <br />
      </div>
      <div style={{ justifyContent: "center" }}>
        <div className="container">
          <div
            className="table-responsive"
            style={{
              maxHeight: "500px",
              overflowY: "scroll",
              marginTop: "30px",
              marginLeft: "250px",
              marginRight: "250px",
            }}
          >
            <table className="table table-striped">
              <caption>Check Your Email For The Above Documents.</caption>
              <thead className="table-dark">
                <tr>
                  <th>Loan Approval Letter</th>
                  <th>Disclosure Statements</th>
                  <th>Repayment Schedule</th>
                  <th>Contact Information</th>
                  <th>Declination Letter</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Letter.pdf</td>
                  <td>Disclosure.pdf</td>
                  <td>Repayment.pdf</td>
                  <td>Contact.pdf</td>
                  <td>Declination.pdf</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <input className="form-check-input" type="checkbox" id="gridCheck" />
        <label className="form-check-label" htmlFor="gridCheck">
          I accept the Terms & Conditions mentioned in the above documents.
        </label>
      </div>
      <div
        style={{
          textAlign: "center",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <h6>
          After you review the above documents, please accept or reject the
          approved loan.
        </h6>
        <div>
          {approved === "Yes" ? (
            <div>
              <input
                type="checkbox"
                className="btn-check"
                id="acceptButton" // Update the id to "acceptButton"
                autoComplete="off"
                disabled={!isProcessed || isRejected}
                checked={isAccepted}
                onClick={handleAccept}
              />
              <label className="btn btn-outline-primary" htmlFor="acceptButton">
                Accept
              </label>
              <button
                id="reject"
                className="btn btn-outline-danger"
                onClick={handleReject}
              >
                Reject
              </button>
            </div>
          ) : (
            <div>
              <Link to="/signup">
                <button id="review" className="btn btn-outline-warning">
                  Review
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div style={{ textAlign: "center" }}>
        <footer>AK @ 2024</footer>
      </div>
    </div>
  );
}
