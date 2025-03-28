import React from "react";
import { ToastContainer, toast, Slide} from 'react-toastify';
import { useEffect } from "react";
function Home() {
    useEffect(()=>{
        toast.info('We are currently working on KubeBuddy.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
            });
    },[])
  return (
    <>
    <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    transition={Slide}
    />
    <div className="d-flex flex-column align-items-center text-center py-5 gradient">
        <img src={"/KubeBuddy.png"} className="w-25 mb-3 img-fluid" alt="KubeBuddy Logo" />
        <h1 className="fw-bold" style={{ fontSize: "3rem", color: "#000" }}>
            AI Powered Kubernetes Dashboard
        </h1>
    </div>

    {/* Youtube video */}
    <div className="youtube-video d-flex flex-column align-items-center justify-content-center m-3 p-3">
        <p className="lead text-center pb-4 w-75">KubeBuddy is an AI-powered Kubernetes dashboard designed to streamline your Kubernetes management. Focused on simplicity, accessibility, and intelligent insights, it empowers teams of all skill levels. With a user-friendly interface and no need for additional in-cluster installations, KubeBuddy makes managing Kubernetes effortless. Check the below video for leanring more about Kubebuddy.</p>
        <div className="ratio ratio-16x9 w-50">
        <iframe src="https://www.youtube-nocookie.com/embed/hSxQl-pWdC4?si=1MpVUfNDqXdBm2-w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>

    {/* Feature Section */}
    
<div id="features" className="container-fluid w-100 text-center py-4" style={{backgroundColor : "#fff"}}>
    <div className="row flex flex-row justify-content-around w-100">
        <div className="col-md-3 mx-3 p-3 feature-card gradient m-4">
            <img src={'/interface.png'} alt="Intuitive Interface" className="features-img mb-3" style={{ width: "8rem" }} />
            <h4 className="fw-bold">Intuitive Interface</h4>
            <p className="text-muted">
                Provides an intuitive interface to interact with Kubernetes clusters, allowing users to view, manage, and switch between clusters effortlessly.
            </p>
        </div>
        <div className="col-md-3 mx-3 p-3 feature-card gradient m-4">
            <img src={"/artificial-intelligence.png"} alt="AI Assistance" className="features-img mb-3" style={{ width: "8rem" }} />
            <h4 className="fw-bold">AI-Powered Assistance</h4>
            <p className="text-muted">
                Features Buddy AI, an in-app chatbot designed specifically for technical queries, helping users troubleshoot errors and navigate the application.
            </p>
        </div>
        <div className="col-md-3 mx-3 p-3 feature-card gradient m-4">
            <img src={"/connect.png"} alt="Integration" className="features-img mb-3" style={{ width: "8rem" }} />
            <h4 className="fw-bold">Seamless Integration</h4>
            <p className="text-muted">
                Runs independently of your Kubernetes clusters, ensuring zero impact on cluster performance. Just connect and manage seamlessly.
            </p>
        </div>
        <div className="col-md-3 mx-3 p-3 feature-card gradient m-4">
            <img src={"/terminal.png"} alt="Integration" className="features-img mb-3" style={{ width: "8rem" }} />
            <h4 className="fw-bold">Inbuilt terminal</h4>
            <p className="text-muted">
            Execute commands directly within the application using the integrated terminal. Interact seamlessly with the host machine without switching contexts.
            </p>
        </div>
        <div className="col-md-3 mx-3 p-3 feature-card gradient m-4">
            <img src={"/commands.png"} alt="Integration" className="features-img mb-3" style={{ width: "8rem" }} />
            <h4 className="fw-bold">No commands</h4>
            <p className="text-muted">
            No need to memorize or use complex 'kubectl' commands! Manage and interact with your Kubernetes cluster effortlessly through an intuitive GUI.
            </p>
        </div>
        <div className="col-md-3 mx-3 p-3 feature-card gradient m-4">
            <img src={"/clusters.png"} alt="Integration" className="features-img mb-3" style={{ width: "8rem" }} />
            <h4 className="fw-bold">Multiple clusters</h4>
            <p className="text-muted">
            Seamlessly manage multiple clusters supporting various k8s providers like kind, minikube and many more.
            </p>
        </div>
  </div>
</div>

    </>
  );
}

export default Home;
