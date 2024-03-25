import "bootstrap/dist/css/bootstrap.min.css";
import Brand from "../assets/logo3.jpeg";
import Signup from "./Signup";
import Login from "./Login";

export default function Admin() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href={Admin}>
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
                    href={Admin}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={Signup}>
                    Approve A Loan
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={Login}>
                    Decline A Loan
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={Login}>
                    Logout
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Enter Name To Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <div>
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
                    <th>Name</th>
                    <th>Department</th>
                    <th>Extension</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Hello</td>
                    <td>People</td>
                    <td>Of</td>
                    <td>Harare</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
