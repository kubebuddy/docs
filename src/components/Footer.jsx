import React from "react";

function Footer() {
  return (
    <footer className="footer p-5 d-flex flex-row justify-content-around border-top">
      <div className="d-flex flex-column align-items-center">
        <img src={"/KubeBuddy.png"} alt="kubebuddy-logo" style={{ width: "8rem" }}/>
        <p>&copy; 2025 Thinknyx Technologies LLP</p>
      </div>
      <div>
        <h5>Community</h5>
        <ul>
          <li><a href="https://github.com/kubebuddy/docs" target="_blank">Github</a></li>
        </ul>
      </div>
      <div>
        <h5>Guides</h5>
        <ul>
          <li><a href="/docs/introduction">Introduction</a></li>
          <li><a href="/docs/installation">Installation</a></li>
          <li><a href="/docs/platform">Platform</a></li>
          <li><a href="/docs/guide/getting-started">Getting Started</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
