import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar bg-light border-end p-3 min-vh-100">
      <h5 className="fw-bold">Documentation</h5>
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

         {/* Guide Section with Subsections */}
         <li className="nav-item">
          <h6 className="fw-bold text-dark m-3">Guide</h6>
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
  );
}

export default Sidebar;
