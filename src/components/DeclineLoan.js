import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import axios from "axios";
import { Toast } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ApproveLoan() {
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    applicationId: null,
    fullName: null,
    emailAddress: null,
    nationalId: null,
    approved: null,
    loanApprovalLetter: null,
    disclosureStatements: null,
    repaymentSchedule: null,
    contactInformation: null,
    declinationLetter: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("applicationId", formData.applicationId);
    data.append("fullName", formData.fullName);
    data.append("emailAddress", formData.emailAddress);
    data.append("nationalId", formData.nationalId);
    data.append("approved", formData.approved);
    data.append("loanApprovalLetter", formData.loanApprovalLetter);
    data.append("disclosureStatements", formData.disclosureStatements);
    data.append("repaymentSchedule", formData.repaymentSchedule);
    data.append("contactInformation", formData.contactInformation);
    data.append("declinationLetter", formData.declinationLetter);

    axios
      .post("http://localhost:5032/api/LoanDetail", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // Handle successful submission
        console.log("Form submitted successfully!");
        setShowSuccessToast(true);
        navigate("/admin");
      })
      .catch((error) => {
        // Handle error
        console.error("Error submitting form:", error);
        setShowErrorToast(true);
        navigate("/admin");
      });
    navigate("/admin");
  };

  return (
    <>
      <div>
        <Toast
          show={showSuccessToast}
          onClose={() => setShowSuccessToast(false)}
          delay={3000}
          autohide
          bg="success"
          text="light"
        >
          <Toast.Body>Saved Successfully!</Toast.Body>
        </Toast>

        <Toast
          show={showErrorToast}
          onClose={() => setShowErrorToast(false)}
          delay={3000}
          autohide
          bg="danger"
          text="light"
        >
          <Toast.Body>Error in submitting the form</Toast.Body>
        </Toast>
      </div>
      <div className="overflow-auto custom-background">
        <div className="container">
          <form className="row g-3" onSubmit={handleSubmit}>
            <div>
              <br />
            </div>
            <div>
              <h3 style={{ color: "hsl(0, 100%, 30%)", fontFamily: "verdana" }}>
                <b>
                  <u>Decline Loan</u>
                </b>
              </h3>
            </div>
            <div>
              <br />
            </div>
            <div className="col-6" style={{ fontFamily: "arial" }}>
              <label htmlFor="applicationID" className="form-label">
                Application ID
              </label>
              <input
                type="text"
                className="form-control"
                id="applicationID"
                placeholder="Enter Loan Application ID"
                value={formData.applicationId || ""}
                onChange={(e) =>
                  setFormData({ ...formData, applicationId: e.target.value })
                }
              />
            </div>
            <div className="col-6" style={{ fontFamily: "arial" }}>
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                placeholder="Enter Full Name"
                value={formData.fullName || ""}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
            </div>
            <div className="col-md-6" style={{ fontFamily: "arial" }}>
              <label htmlFor="emailAddress" className="form-label">
                Email Address
              </label>
              <input
                type="text"
                className="form-control"
                id="emailAdress"
                placeholder="Enter Customer's Email Address"
                value={formData.emailAddress || ""}
                onChange={(e) =>
                  setFormData({ ...formData, emailAddress: e.target.value })
                }
              />
            </div>
            <div className="col-md-6" style={{ fontFamily: "arial" }}>
              <label htmlFor="nationalId" className="form-label">
                National ID
              </label>
              <input
                type="text"
                className="form-control"
                id="nationalId"
                placeholder="Enter National ID"
                value={formData.nationalId || ""}
                onChange={(e) =>
                  setFormData({ ...formData, nationalId: e.target.value })
                }
              />
            </div>
            <div>
              <h5
                style={{ color: "hsl(0, 100%, 30%)", fontFamily: "helvetica" }}
              >
                <b>
                  <u>Upload Loan Documents</u>
                </b>
              </h5>
            </div>
            <div className="col-md-4" style={{ fontFamily: "arial" }}>
              <label htmlFor="loanApprovalLetter" className="form-label">
                Loan Approval Letter
              </label>
              <input
                type="file"
                className="form-control"
                id="loanApprovalLetter"
                //onChange={(e) =>
                //setFormData({
                //...formData,
                //loanApprovalLetter: e.target.files[0],
                //})
                //}
                multiple
              />
            </div>
            <div className="col-md-4" style={{ fontFamily: "arial" }}>
              <label htmlFor="disclosureStatements" className="form-label">
                Disclosure Statements
              </label>
              <input
                type="file"
                className="form-control"
                id="disclosureStatements"
                //onChange={(e) =>
                //setFormData({
                //...formData,
                //disclosureStatements: e.target.files[0],
                //})
                //}
                multiple
              />
            </div>
            <div className="col-md-4" style={{ fontFamily: "arial" }}>
              <label htmlFor="repaymentSchedule" className="form-label">
                Repayment Schedule
              </label>
              <input
                type="file"
                className="form-control"
                id="repaymentSchedule"
                //onChange={(e) =>
                //setFormData({
                //...formData,
                //repaymentSchedule: e.target.files[0],
                //})
                //}
                multiple
              />
            </div>
            <div className="col-md-4" style={{ fontFamily: "arial" }}>
              <label htmlFor="contactInformation" className="form-label">
                Contact Information
              </label>
              <input
                type="file"
                className="form-control"
                id="contactInformation"
                //onChange={(e) =>
                //setFormData({
                //...formData,
                //contactInformation: e.target.files[0],
                //})
                //}
                multiple
              />
            </div>
            <div className="col-md-4" style={{ fontFamily: "arial" }}>
              <label htmlFor="declinationLetter" className="form-label">
                DeclinationLetter
              </label>
              <input
                type="file"
                className="form-control"
                id="declinationLetter"
                //onChange={(e) =>
                //setFormData({
                //...formData,
                //declinationLetter: e.target.files[0],
                //})
                //}
                multiple
              />
            </div>
            <div className="col-md-4" style={{ fontFamily: "arial" }}>
              <label htmlFor="approved" className="form-label">
                Decline Loan
              </label>
              <select
                id="approved"
                className="form-select"
                type="text"
                name="approved"
                value={formData.approved || ""}
                onChange={(e) =>
                  setFormData({ ...formData, approved: e.target.value })
                }
              >
                <option defaultValue="">Select Option</option>
                <option value="No">Yes</option>
                <option value="Yes">No</option>
              </select>
            </div>
            <div>
              <br />
            </div>
            <div
              className="col-12"
              style={{ fontFamily: "helvetica", color: "hsl(0, 100%, 30%)" }}
            >
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  Save Information
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </div>
            <div>
              <br />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
