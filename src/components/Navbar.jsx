import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light border-bottom py-2 w-auto position-sticky fixed-top" style={{ backgroundColor: "rgb(248, 249, 250)" }}>
      <div className="container-fluid px-4">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Logo and brand */}
        <div className="navbar-brand d-flex align-items-center justify-content-center">
          <img src={"/KubeBuddy-no-title.png"} alt="KubeBuddy Logo" className="img-fluid mx-2" style={{ maxWidth: "40px" }} />
          <NavLink className="navbar-brand fw-semibold" to="/"><span className="text-primary fw-bold league-spartan">KUBE</span><span className="fw-bold league-spartan">BUDDY</span></NavLink>
        </div>

        {/* Navigation Links for Docs page (Visible only in /docs and Mobile View) */}
        { (isMobile && location.pathname.includes("/docs")) ? (
          <div className="collapse navbar-collapse m-2" id="navbarNav">
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link text-dark fw-medium rounded ${isActive ? "active bg-primary text-white" : "hover-bg-light"}`} to="/docs/introduction">Introduction</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link text-dark fw-medium rounded ${isActive ? "active bg-primary text-white" : "hover-bg-light"}`} to="/docs/installation">Installation</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link text-dark fw-medium rounded ${isActive ? "active bg-primary text-white" : "hover-bg-light"}`} to="/docs/platform">Platform</NavLink>
              </li>

              {/* Guide Section */}
              <li className="nav-item">
                <h6 className="fw-bold text-dark m-2">Guide</h6>
                <ul className="nav flex-column ps-3">
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => `nav-link text-dark fw-medium rounded ${isActive ? "active bg-primary text-white" : "hover-bg-light"}`} to="/docs/guide/getting-started">Getting Started</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => `nav-link text-dark fw-medium rounded ${isActive ? "active bg-primary text-white" : "hover-bg-light"}`} to="/docs/guide/configuration">Configuration</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => `nav-link text-dark fw-medium rounded ${isActive ? "active bg-primary text-white" : "hover-bg-light"}`} to="/docs/guide/buddyai">Buddy AI</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => `nav-link text-dark fw-medium rounded ${isActive ? "active bg-primary text-white" : "hover-bg-light"}`} to="/docs/guide/terminal">Terminal</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        ) :
        <div className="collapse navbar-collapse m-2" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-1">
              <NavLink className={({ isActive }) => `nav-link px-3 py-2 text-dark fw-medium rounded ${isActive ? "active bg-primary text-white" : "hover-bg-light"}`} to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-1">
              <NavLink className={({ isActive }) => `nav-link px-3 py-2 text-dark fw-medium rounded ${isActive ? "active bg-primary text-white" : "hover-bg-light"}`} to="/docs">
                Docs
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => `nav-link px-3 py-2 text-dark fw-medium rounded ${isActive ? "active bg-primary text-white" : "hover-bg-light"}`} to="/faqs">
                FAQs
              </NavLink>
            </li>
          </ul>
        </div>}

        {/* Right-side items */}
        <div className="d-flex align-items-center">
          <a href="https://github.com/kubebuddy/kubebuddy" className="text-decoration-none text-dark me-3 d-flex align-items-center" target="_blank">
            GitHub
            <svg className="ms-1" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 6H6C5.4 6 5 6.4 5 7V17C5 17.6 5.4 18 6 18H16C16.6 18 17 17.6 17 17V13" stroke="currentColor" strokeWidth="2" />
              <path d="M14 4H20V10" stroke="currentColor" strokeWidth="2" />
              <path d="M20 4L10 14" stroke="currentColor" strokeWidth="2" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
