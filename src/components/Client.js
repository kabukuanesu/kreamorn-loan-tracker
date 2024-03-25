import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImg from "../assets/pexels-gdtography-911738.jpg";
import Brand from "../assets/logo3.jpeg";
import Signup from "./Signup";
import Login from "./Login";

export default function Client() {
  const name = "Anesu";
  const ecNumber = "45645465";
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
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href={Client}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={Signup}>
                    New Loan Application
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={Login}>
                    Track Another Loan
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
        <br />
      </div>
      <div style={{ textAlign: "center" }}>
        <h3>
          {name} {ecNumber} Application Status
        </h3>
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
            id="btncheck1"
            autocomplete="off"
          />
          <label className="btn btn-outline-primary" for="btncheck1">
            &#128077; Submitted
          </label>

          <input
            type="checkbox"
            className="btn-check"
            id="btncheck2"
            autocomplete="off"
          />
          <label className="btn btn-outline-primary" for="btncheck2">
            &#128077; Processed
          </label>

          <input
            type="checkbox"
            className="btn-check"
            id="btncheck3"
            autocomplete="off"
          />
          <label className="btn btn-outline-primary" for="btncheck3">
            &#128077; Accepted
          </label>

          <input
            type="checkbox"
            className="btn-check"
            id="btncheck4"
            autocomplete="off"
          />
          <label className="btn btn-outline-primary" for="btncheck4">
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
            id="vbtn-radio1"
            autocomplete="off"
          />
          <label className="btn btn-outline-danger" for="vbtn-radio1">
            &#128078; Submitted
          </label>

          <input
            type="radio"
            className="btn-check"
            name="vbtn-radio"
            id="vbtn-radio2"
            autocomplete="off"
          />
          <label className="btn btn-outline-danger" for="vbtn-radio2">
            &#128078; Processed
          </label>

          <input
            type="radio"
            className="btn-check"
            name="vbtn-radio"
            id="vbtn-radio3"
            autocomplete="off"
          />
          <label className="btn btn-outline-danger" for="vbtn-radio3">
            &#128078; Rejected
          </label>

          <input
            type="radio"
            className="btn-check"
            name="vbtn-radio"
            id="vbtn-radio4"
            autocomplete="off"
          />
          <label className="btn btn-outline-danger" for="vbtn-radio4">
            &#128078; Funded
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
              marginTop: "70px",
              marginLeft: "250px",
              marginRight: "250px",
            }}
          >
            <table className="table table-striped">
              <caption>Check Your Email For The Above Documents.</caption>
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
