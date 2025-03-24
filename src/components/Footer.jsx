import React from "react";

function Footer() {
  return (
    <footer className="footer py-3 border-top position-sticky" style={{backgroundColor : "rgb(248, 249, 250)"}}>
      <div className="container text-center">
        <p className="mb-1">&copy; 2025 Thinknyx Technologies LLP</p>
        <div>
          <a href="https://github.com/kubebuddy/docs" target="_blank" rel="noopener noreferrer" className="text-decoration-none me-3">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
