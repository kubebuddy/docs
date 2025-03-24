import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Docs from "./pages/Docs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./utilities/ScrollToTop";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs/*" element={<Docs />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
