import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light border-bottom py-2 w-auto position-sticky fixed-top" style={{backgroundColor : "rgb(248, 249, 250)"}}>
      <div className="container-fluid px-4">
        {/* Logo and brand */}
        <div className="navbar-brand d-flex align-items-center" href="/">
        <img src={"/KubeBuddy-no-title.png"} alt="KubeBuddy Logo" className="img-fluid mx-2" style={{ maxWidth: "40px" }} />
            <NavLink className="navbar-brand fw-semibold" to="/"><span className="text-primary fw-bold league-spartan">KUBE</span><span className="fw-bold league-spartan">BUDDY</span></NavLink>
        </div>
        
        {/* Main navigation links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-1">
                <NavLink 
                    className={({ isActive }) => `nav-link px-3 py-2 text-dark fw-medium rounded ${isActive ? "active bg-primary text-white" : "hover-bg-light"}`} 
                    to="/" 
                    end
                >
                    Home
                </NavLink>
            </li>
            <li className="nav-item mx-1">
            <NavLink 
                className={({ isActive }) => `nav-link px-3 py-2 text-dark fw-medium rounded ${isActive ? "active bg-primary text-white" : "hover-bg-light"}`} 
                to="/docs"
              >
                Docs
              </NavLink>
            </li>
          </ul>
        </div>
        
        {/* Right-side items */}
        <div className="d-flex align-items-center">
          {/* External links */}
          
          <a href="https://github.com/kubebuddy/docs" className="text-decoration-none text-dark me-3 d-flex align-items-center" target="_blank" rel="noopener noreferrer">
            GitHub
            <svg className="ms-1" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 6H6C5.4 6 5 6.4 5 7V17C5 17.6 5.4 18 6 18H16C16.6 18 17 17.6 17 17V13" stroke="currentColor" strokeWidth="2" />
              <path d="M14 4H20V10" stroke="currentColor" strokeWidth="2" />
              <path d="M20 4L10 14" stroke="currentColor" strokeWidth="2" />
            </svg>
          </a>
          
          {/* Search box - To be added. */}
          {/* <div className="d-flex align-items-center bg-light rounded px-3 py-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2 text-secondary">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M20 20L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input 
              type="text" 
              className="border-0 bg-light" 
              placeholder="Search" 
              aria-label="Search" 
              style={{outline: 'none', width: '120px'}}
            />
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;