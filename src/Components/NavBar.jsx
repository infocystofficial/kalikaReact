import React from "react";
import "../index.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  id="home"
                  className="nav-link active"
                  aria-current="page"
                  href="../index.html"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../index.html">
                  About us
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="../index.html">
                  News
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../index.html">
                  Online Result
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../index.html">
                  Policy
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown"
                  href="../index.html"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Program
                </a>
                {/* <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="../index.html">
                      Science
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="../index.html">
                      Management
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="../index.html">
                      Education
                    </a>
                  </li>
                </ul> */}
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown"
                  href="../index.html"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gallary
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="../index.html">
                      Photo Galary
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="../index.html">
                      Video Galary
                    </a>
                  </li>
                </ul>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact
                  </a>
                </li>
                <div className="button">
                  <button id="firstbtn">login</button>
                  <button id="secondbtn">Admission</button>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
