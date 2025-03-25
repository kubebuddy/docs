import React from "react";
import WelcomeModal from "../utilities/WelcomeModal";
function Home() {
  return (
    <>
    <WelcomeModal />
    <div className="d-flex flex-column align-items-center text-center py-5 gradient">
        <img src={"/KubeBuddy.png"} className="w-25 mb-3" alt="KubeBuddy Logo" />
        <h1 className="fw-bold" style={{ fontSize: "3rem", color: "#000" }}>
            AI Powered Kubernetes UI
        </h1>
    </div>

    {/* Feature Section */}
    
<div id="features" className="container-fluid w-100 text-center py-5" style={{backgroundColor : "#fff"}}>
    <div className="row flex flex-row justify-content-around">
        <div className="col mx-3 px-3 feature-card gradient">
            <img src={'/interface.png'} alt="Intuitive Interface" className="features-img mb-3" style={{ width: "8rem" }} />
            <h4 className="fw-bold">Intuitive Interface</h4>
            <p className="text-muted">
                Provides an intuitive interface to interact with Kubernetes clusters, allowing users to view, manage, and switch between clusters effortlessly.
            </p>
        </div>
        <div className="col mx-3 px-3 feature-card gradient">
            <img src={"/artificial-intelligence.png"} alt="AI Assistance" className="features-img mb-3" style={{ width: "8rem" }} />
            <h4 className="fw-bold">AI-Powered Assistance</h4>
            <p className="text-muted">
                Features Buddy AI, an in-app chatbot designed specifically for technical queries, helping users troubleshoot errors and navigate the application.
            </p>
        </div>
        <div className="col mx-3 px-3 feature-card gradient">
            <img src={"/connect.png"} alt="Integration" className="features-img mb-3" style={{ width: "8rem" }} />
            <h4 className="fw-bold">Seamless Integration</h4>
            <p className="text-muted">
                Runs independently of your Kubernetes clusters, ensuring zero impact on cluster performance. Just connect and manage seamlessly.
            </p>
        </div>
  </div>
</div>

    </>
  );
}

export default Home;
