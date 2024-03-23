import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImg from "../assets/pexels-pixabay-534229.jpg";

export default function Signup() {
  return (
    <div
      className="overflow-auto custom-background"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="container">
        <form className="row g-3">
          <div>
            <br />
          </div>
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
            <label for="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Enter Full Name"
            />
          </div>
          <div className="col-md-4">
            <label for="title" className="form-label">
              Title
            </label>
            <select id="title" className="form-select">
              <option selected>Select Title</option>
              <option>Mr.</option>
              <option>Mrs.</option>
              <option>Ms.</option>
              <option>Dr.</option>
              <option>Prof.</option>
              <option>Eng.</option>
              <option>Other</option>
            </select>
          </div>
          <div className="col-8">
            <label for="dateOfBirth" className="form-label">
              Date Of Birth
            </label>
            <input type="date" className="form-control" id="dateOfBirth" />
          </div>
          <div className="col-md-4">
            <label for="maritalStatus" className="form-label">
              Marital Status
            </label>
            <select id="maritalStatus" className="form-select">
              <option selected>Select Marital Status</option>
              <option>Married</option>
              <option>Divorced</option>
              <option>Single</option>
              <option>Other</option>
            </select>
          </div>
          <div className="col-8">
            <label for="physicalAddress" className="form-label">
              Physical Address
            </label>
            <input
              type="text"
              className="form-control"
              id="physicalAddress"
              placeholder="Enter Full Physical Address"
            />
          </div>
          <div className="col-md-4">
            <label for="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              placeholder="Phone/Mobile Number"
            />
          </div>
          <div className="col-md-4">
            <label for="emailAddress" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="emailAddress"
              placeholder="Enter Your Email Address"
            />
          </div>
          <div className="col-md-4">
            <label for="workNumber" className="form-label">
              Work Number
            </label>
            <input
              type="text"
              className="form-control"
              id="workNumber"
              placeholder="Enter Your Work Number"
            />
          </div>
          <div className="col-md-4">
            <label for="nationalId" className="form-label">
              National ID
            </label>
            <input
              type="text"
              className="form-control"
              id="nationalId"
              placeholder="National/Passport Number"
            />
          </div>
          <div>
            <br />
          </div>
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
            <label for="employer" className="form-label">
              Employer
            </label>
            <input
              type="text"
              className="form-control"
              id="employer"
              placeholder="Enter Employer/Organization's Name"
            />
          </div>
          <div className="col-md-4">
            <label for="jobTitle" className="form-label">
              Job Title
            </label>
            <input
              type="text"
              className="form-control"
              id="jobTitle"
              placeholder="Job Title/Description"
            />
          </div>
          <div className="col-md-4">
            <label for="wageFrequency" className="form-label">
              Wage Frequency
            </label>
            <select id="wageFrequency" className="form-select">
              <option selected>Select Wage Frequency</option>
              <option>Daily</option>
              <option>Weekly</option>
              <option>Fortnightly</option>
              <option>Monthly</option>
              <option>Quarterly</option>
              <option>Other</option>
            </select>
          </div>
          <div className="col-md-4">
            <label for="monthlyIncome" className="form-label">
              Monthly Income
            </label>
            <input
              type="text"
              className="form-control"
              id="monthlyIncome"
              placeholder="Gross Monthly Income"
            />
          </div>
          <div className="col-md-4">
            <label for="annualSalary" className="form-label">
              Annual Salary
            </label>
            <input
              type="text"
              className="form-control"
              id="annualSalary"
              placeholder="Enter Annual Salary"
            />
          </div>
          <div className="col-md-6">
            <label for="expense" className="form-label">
              Expenses
            </label>
            <select id="expense" className="form-select">
              <option selected>Select Expenses</option>
              <option>Subscriptions</option>
              <option>Rentals</option>
              <option>Utilities</option>
              <option>Transportation</option>
              <option>Medical</option>
              <option>Childcare</option>
              <option>Taxes</option>
              <option>Other</option>
            </select>
          </div>
          <div className="col-md-6">
            <label for="benefit" className="form-label">
              Benefits
            </label>
            <select id="benefit" className="form-select">
              <option selected>Select Benefits</option>
              <option>Employment Benefits</option>
              <option>Social Security Benefits</option>
              <option>Retirement Benefits</option>
              <option>Unemployment Benefits</option>
              <option>Veterans Benefits</option>
              <option>Child Support Benefits</option>
              <option>Government Assistance</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <br />
          </div>
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
          <div class="col-md-6">
            <label for="proofOfIdentity" class="form-label">
              Proof Of Identity
            </label>
            <input
              class="form-control"
              type="file"
              id="proofOfIdentity"
              multiple
            />
          </div>
          <div class="col-md-6">
            <label for="proofOfResidence" class="form-label">
              Proof Of Residence
            </label>
            <input
              class="form-control"
              type="file"
              id="proofOfResidence"
              multiple
            />
          </div>
          <div class="col-md-6">
            <label for="bankStatement" class="form-label">
              Bank Statements
            </label>
            <input
              class="form-control"
              type="file"
              id="bankStatements"
              multiple
            />
          </div>
          <div class="col-md-6">
            <label for="proofOfIncome" class="form-label">
              Proof Of Income
            </label>
            <input
              class="form-control"
              type="file"
              id="proofOfIncome"
              multiple
            />
          </div>
          <div class="col-md-6">
            <label for="benefitDocument" class="form-label">
              Benefits Documents
            </label>
            <input
              class="form-control"
              type="file"
              id="benefitDocument"
              multiple
            />
          </div>
          <div class="col-md-6">
            <label for="employmentVerification" class="form-label">
              Employment Verification
            </label>
            <input
              class="form-control"
              type="file"
              id="employmentVerification"
              multiple
            />
          </div>
          <div class="col-md-6">
            <label for="collateralDocument" class="form-label">
              Collateral Documents
            </label>
            <input
              class="form-control"
              type="file"
              id="collateralDocument"
              multiple
            />
          </div>
          <div class="col-md-6">
            <label for="otherDocument" class="form-label">
              Other Documents
            </label>
            <input
              class="form-control"
              type="file"
              id="otherDocument"
              multiple
            />
          </div>
          <div>
            <br />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" for="gridCheck">
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
        </form>
      </div>
    </div>
  );
}
