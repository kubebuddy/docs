import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Docs from "./pages/Docs";
import FAQ from "./pages/FAQ";
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
          <Route path="/faqs" element={<FAQ />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
