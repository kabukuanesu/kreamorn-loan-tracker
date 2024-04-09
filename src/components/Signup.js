import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import axios from "axios";
import { Toast } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [currentPage, setCurrentPage] = useState(1);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: null,
    title: null,
    dateOfBirth: null,
    maritalStatus: null,
    address: null,
    phoneNumber: null,
    emailAddress: null,
    workNumber: null,
    nationalId: null,
    employer: null,
    jobTitle: null,
    wageFrequency: null,
    annualSalary: null,
    monthlyIncome: null,
    expense: null,
    benefit: null,
    loanAmount: null,
    loanTenure: null,
    proofOfIdentity: null,
    proofOfResidence: null,
    bankStatement: null,
    proofOfIncome: null,
    benefitDocument: null,
    employmentVerification: null,
    collateralDocument: null,
    otherDocument: null,
    personalPassword: null,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("fullName", formData.fullName);
    data.append("title", formData.title);
    data.append("dateOfBirth", formData.dateOfBirth);
    data.append("maritalStatus", formData.maritalStatus);
    data.append("address", formData.address);
    data.append("phoneNumber", formData.phoneNumber);
    data.append("emailAddress", formData.emailAddress);
    data.append("workNumber", formData.workNumber);
    data.append("nationalId", formData.nationalId);
    data.append("employer", formData.employer);
    data.append("jobTitle", formData.jobTitle);
    data.append("wageFrequency", formData.wageFrequency);
    data.append("annualSalary", formData.annualSalary);
    data.append("monthlyIncome", formData.monthlyIncome);
    data.append("expense", formData.expense);
    data.append("benefit", formData.benefit);
    data.append("loanAmount", formData.loanAmount);
    data.append("loanTenure", formData.loanTenure);
    data.append("proofOfIdentity", formData.proofOfIdentity);
    data.append("proofOfResidence", formData.proofOfResidence);
    data.append("bankStatement", formData.bankStatement);
    data.append("proofOfIncome", formData.proofOfIncome);
    data.append("benefitDocument", formData.benefitDocument);
    data.append("employmentVerification", formData.employmentVerification);
    data.append("collateralDocument", formData.collateralDocument);
    data.append("otherDocument", formData.otherDocument);
    data.append("personalPassword", formData.personalPassword);

    axios
      .post("http://localhost:5032/api/PersonalDetail", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // Handle successful submission
        console.log("Form submitted successfully!");
        setShowSuccessToast(true);
        navigate("/login");
      })
      .catch((error) => {
        // Handle error
        console.error("Error submitting form:", error);
        setShowErrorToast(true);
        navigate("/");
      });
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const renderFormFields = () => {
    switch (currentPage) {
      case 1:
        return (
          <>
            <div>
              <h3>
                <b>
                  <u>Personal Details</u>
                </b>
              </h3>
            </div>
            <div>
              <br />
            </div>
            <div className="col-8">
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
            <div className="col-md-4">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <select
                id="title"
                className="form-select"
                type="text"
                name="title"
                value={formData.title || ""}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              >
                <option defaultValue="">Select Title</option>
                <option value="Mr">Mr.</option>
                <option value="Mrs">Mrs.</option>
                <option value="Miss">Ms.</option>
                <option value="Dr">Dr.</option>
                <option value="Prof">Prof.</option>
                <option value="Eng">Eng.</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="col-8">
              <label htmlFor="dateOfBirth" className="form-label">
                Date Of Birth
              </label>
              <input
                type="text"
                className="form-control"
                id="dateOfBirth"
                value={formData.dateOfBirth || ""}
                onChange={(e) =>
                  setFormData({ ...formData, dateOfBirth: e.target.value })
                }
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="maritalStatus" className="form-label">
                Marital Status
              </label>
              <select
                id="maritalStatus"
                className="form-select"
                type="text"
                name="maritalStatus"
                value={formData.maritalStatus || ""}
                onChange={(e) =>
                  setFormData({ ...formData, maritalStatus: e.target.value })
                }
              >
                <option defaultValue="">Select Marital Status</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Single">Single</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="col-8">
              <label htmlFor="address" className="form-label">
                Physical Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Enter Full Physical Address"
                value={formData.address || ""}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                placeholder="Phone/Mobile Number"
                value={formData.phoneNumber || ""}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="emailAddress" className="form-label">
                Email Address
              </label>
              <input
                type="text"
                className="form-control"
                id="emailAddress"
                placeholder="Enter Your Email Address"
                value={formData.emailAddress || ""}
                onChange={(e) =>
                  setFormData({ ...formData, emailAddress: e.target.value })
                }
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="workNumber" className="form-label">
                Work Number
              </label>
              <input
                type="text"
                className="form-control"
                id="workNumber"
                placeholder="Enter Your Work Number"
                value={formData.workNumber || ""}
                onChange={(e) =>
                  setFormData({ ...formData, workNumber: e.target.value })
                }
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="nationalId" className="form-label">
                National ID
              </label>
              <input
                type="text"
                className="form-control"
                id="nationalId"
                placeholder="National/Passport Number"
                value={formData.nationalId || ""}
                onChange={(e) =>
                  setFormData({ ...formData, nationalId: e.target.value })
                }
              />
            </div>
            <div>
              <br />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div>
              <h3>
                <b>
                  <u>Financial Details</u>
                </b>
              </h3>
            </div>
            <div>
              <br />
            </div>
            <div className="col-8">
              <label htmlFor="employer" className="form-label">
                Employer
              </label>
              <input
                type="text"
                className="form-control"
                id="employer"
                placeholder="Enter Employer/Organization's Name"
                value={formData.employer || ""}
                onChange={(e) =>
                  setFormData({ ...formData, employer: e.target.value })
                }
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="jobTitle" className="form-label">
                Job Title
              </label>
              <input
                type="text"
                className="form-control"
                id="jobTitle"
                placeholder="Job Title/Description"
                value={formData.jobTitle || ""}
                onChange={(e) =>
                  setFormData({ ...formData, jobTitle: e.target.value })
                }
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="wageFrequency" className="form-label">
                Wage Frequency
              </label>
              <select
                id="wageFrequency"
                className="form-select"
                type="text"
                name="maritalStatus"
                value={formData.wageFrequency || ""}
                onChange={(e) =>
                  setFormData({ ...formData, wageFrequency: e.target.value })
                }
              >
                <option defaultValue="">Select Wage Frequency</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Fortinightly">Fortnightly</option>
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="monthlyIncome" className="form-label">
                Monthly Income
              </label>
              <input
                type="text"
                className="form-control"
                id="monthlyIncome"
                placeholder="Gross Monthly Income"
                value={formData.monthlyIncome || ""}
                onChange={(e) =>
                  setFormData({ ...formData, monthlyIncome: e.target.value })
                }
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="annualSalary" className="form-label">
                Annual Salary
              </label>
              <input
                type="text"
                className="form-control"
                id="annualSalary"
                placeholder="Enter Annual Salary"
                value={formData.annualSalary || ""}
                onChange={(e) =>
                  setFormData({ ...formData, annualSalary: e.target.value })
                }
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="expense" className="form-label">
                Expenses
              </label>
              <select
                id="expense"
                className="form-select"
                type="text"
                name="expense"
                value={formData.expense || ""}
                onChange={(e) =>
                  setFormData({ ...formData, expense: e.target.value })
                }
              >
                <option defaultValue="">Select Expenses</option>
                <option value="Subscriptions">Subscriptions</option>
                <option value="Rentals">Rentals</option>
                <option value="Utilities">Utilities</option>
                <option value="Transportation">Transportation</option>
                <option value="Medical">Medical</option>
                <option value="Childcare">Childcare</option>
                <option value="Taxes">Taxes</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="benefit" className="form-label">
                Benefits
              </label>
              <select
                id="benefit"
                className="form-select"
                type="text"
                name="benefit"
                value={formData.benefit || ""}
                onChange={(e) =>
                  setFormData({ ...formData, benefit: e.target.value })
                }
              >
                <option defaultValue="">Select Benefits</option>
                <option value="Employment">Employment Benefits</option>
                <option value="Social Security">
                  Social Security Benefits
                </option>
                <option value="Retirement">Retirement Benefits</option>
                <option value="Unemployment">Unemployment Benefits</option>
                <option value="Veterans">Veterans Benefits</option>
                <option value="Child Support">Child Support Benefits</option>
                <option value="Gvt Assistance">Government Assistance</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="loanAmount" className="form-label">
                Loan Amount
              </label>
              <input
                type="text"
                className="form-control"
                id="loanAmount"
                placeholder="Enter Amount To Be Borrowed"
                value={formData.loanAmount || ""}
                onChange={(e) =>
                  setFormData({ ...formData, loanAmount: e.target.value })
                }
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="loanTenure" className="form-label">
                Loan Tenure
              </label>
              <input
                type="text"
                className="form-control"
                id="loanTenure"
                placeholder="Enter Loan Tenure"
                value={formData.loanTenure || ""}
                onChange={(e) =>
                  setFormData({ ...formData, loanTenure: e.target.value })
                }
              />
            </div>
            <div>
              <br />
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div>
              <h3>
                <b>
                  <u>Proof Documents</u>
                </b>
              </h3>
            </div>
            <div>
              <br />
            </div>
            <div className="col-md-6">
              <label htmlFor="proofOfIdentity" className="form-label">
                Proof Of Identity
              </label>
              <input
                className="form-control"
                type="file"
                id="proofOfIdentity"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    proofOfIdentity: e.target.files[0],
                  })
                }
                multiple
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="proofOfResidence" className="form-label">
                Proof Of Residence
              </label>
              <input
                className="form-control"
                type="file"
                id="proofOfResidence"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    proofOfResidence: e.target.files[0],
                  })
                }
                multiple
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="bankStatement" className="form-label">
                Bank Statements
              </label>
              <input
                className="form-control"
                type="file"
                id="bankStatement"
                onChange={(e) =>
                  setFormData({ ...formData, bankStatement: e.target.files[0] })
                }
                multiple
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="proofOfIncome" className="form-label">
                Proof Of Income
              </label>
              <input
                className="form-control"
                type="file"
                id="proofOfIncome"
                onChange={(e) =>
                  setFormData({ ...formData, proofOfIncome: e.target.files[0] })
                }
                multiple
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="benefitDocument" className="form-label">
                Benefits Documents
              </label>
              <input
                className="form-control"
                type="file"
                id="benefitDocument"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    benefitDocument: e.target.files[0],
                  })
                }
                multiple
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="employmentVerification" className="form-label">
                Employment Verification
              </label>
              <input
                className="form-control"
                type="file"
                id="employmentVerification"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    employmentVerification: e.target.files[0],
                  })
                }
                multiple
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="collateralDocument" className="form-label">
                Collateral Documents
              </label>
              <input
                className="form-control"
                type="file"
                id="collateralDocument"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    collateralDocument: e.target.files[0],
                  })
                }
                multiple
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="otherDocument" className="form-label">
                Other Documents
              </label>
              <input
                className="form-control"
                type="file"
                id="otherDocument"
                onChange={(e) =>
                  setFormData({ ...formData, otherDocument: e.target.files[0] })
                }
                multiple
              />
            </div>
            <div>
              <br />
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div>
              <h4>
                <b>
                  <u>Set Password</u>
                </b>
              </h4>
            </div>
            <div className="col-md-6">
              <label htmlFor="newPassword" className="form-label">
                New Password
              </label>
              <input
                type="password"
                className="form-control"
                id="newPassword"
                placeholder="Enter Password"
                value={formData.personalPassword}
                onChange={(e) =>
                  setFormData({ ...formData, personalPassword: e.target.value })
                }
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {formData.personalPassword !== confirmPassword && (
              <div className="col-8">
                <h6
                  className="text-danger"
                  style={{
                    textAlign: "center",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    justifyItems: "center",
                  }}
                >
                  Passwords do not match !
                </h6>
              </div>
            )}
            <div className="col-12">
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
                Submit
              </button>
            </div>
            <div>
              <br />
            </div>
          </>
        );
      default:
        return null;
    }
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
            {renderFormFields()}
            <div>
              <br />
            </div>
            <div>
              {currentPage !== 1 && (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handlePreviousPage}
                >
                  Previous
                </button>
              )}
              {currentPage !== 4 && (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleNextPage}
                >
                  Next
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
