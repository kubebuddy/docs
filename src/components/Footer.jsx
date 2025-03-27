import React from "react";

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
              <li><a href="https://github.com/kubebuddy/kubebuddy" target="_blank">GitHub</a></li>
              <li><a href="https://github.com/kubebuddy/docs" target="_blank">Contribute</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-4 mt-3 mt-md-0">
            <h5>Guides</h5>
            <ul className="list-unstyled px-2">
              <li><a href="/docs/introduction">Introduction</a></li>
              <li><a href="/docs/installation">Installation</a></li>
              <li><a href="/docs/platform">Platform</a></li>
              <li><a href="/docs/guide/getting-started">Getting Started</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
