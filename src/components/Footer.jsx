import React from "react";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer p-4 border-top bg-light">
      <div className="container" id="footer-div">
        <div className="row text-center text-md-start">
          <div className="col-12 col-md-4 d-flex flex-column align-items-center">
            <img src={"/KubeBuddy.png"} alt="kubebuddy-logo" style={{ width: "8rem" }} />
            <p className="mt-2">&copy; 2025 Thinknyx Technologies LLP</p>
          </div>
          <div className="col-12 col-md-4 mt-3 mt-md-0">
            <h5>Community</h5>
            <ul className="list-unstyled px-2">
              <li><a href="https://github.com/kubebuddy/kubebuddy" target="_blank" className="fw-semibold">GitHub</a></li>
              <li><a href="https://github.com/kubebuddy/docs" target="_blank" className="fw-semibold">Contribute</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-4 mt-3 mt-md-0">
            <h5>Guides</h5>
            <ul className="list-unstyled px-2">
              <li><NavLink className="navbar-brand fw-semibold" to="/docs/introduction">Introduction</NavLink></li>
              <li><NavLink className="navbar-brand fw-semibold" to="/docs/installation">Installation</NavLink></li>
              <li><NavLink className="navbar-brand fw-semibold" to="/docs/platform">Platform</NavLink></li>
              <li><NavLink className="navbar-brand fw-semibold" to="/docs/guide/getting-started">Getting Started</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
