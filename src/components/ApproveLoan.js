import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImg from "../assets/pexels-pixabay-534229.jpg";

export default function ApproveLoan() {
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
                <u>Approve Loan</u>
              </b>
            </h3>
          </div>
          <div>
            <br />
          </div>
          <div className="col-6">
            <label for="applicationID" className="form-label">
              Application ID
            </label>
            <input
              type="text"
              className="form-control"
              id="applicationID"
              placeholder="Enter Loan Application ID"
            />
          </div>
          <div className="col-6">
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
          <div className="col-md-6">
            <label for="emailAddress" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="emailAddress"
              placeholder="Enter Customer's Email Address"
            />
          </div>
          <div className="col-md-6">
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
                <u>Upload Loan Documents</u>
              </b>
            </h3>
          </div>
          <div>
            <br />
          </div>
          <div class="col-md-6">
            <label for="proofOfIdentity" class="form-label">
              Loan Approval Letter
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
              Disclosure Statements
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
              Repayment Schedule
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
              Contact Information
            </label>
            <input
              class="form-control"
              type="file"
              id="proofOfIncome"
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
              Send
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
