import React from "react";
import { Link } from "react-router-dom";
import NextPrev from "../../components/NextPrev";
function Introduction() {
  return (
    <div className="container-fluid d-flex flex-column px-5 pt-0 min-vh-100">
      <div className="flex-grow-1">
        <h1>Introduction</h1>
        <p>Welcome to KubeBuddy!</p>

        <p>
          KubeBuddy is an AI-powered, user-friendly Kubernetes UI that simplifies cluster management.  
          Whether you're a beginner or an expert, KubeBuddy helps you interact with your Kubernetes clusters effortlessly.
        </p>

        <h4>Why KubeBuddy?</h4>
        <ul>
          <li>Easy-to-use Interface - No need to memorize complex 'kubectl' commands.</li>
          <li>Cluster Insights - View events, logs, and cluster status.</li>
          <li>AI Assistance - Get intelligent suggestions for troubleshooting Kubernetes issues.</li>
        </ul>

        <h4>Getting Started</h4>
        <p>Jump to the <strong><Link to='/docs/installation'>Installation</Link></strong> section to set up KubeBuddy on your system.</p>
      </div>
      <NextPrev next="/docs/installation" nextTitle="Installation" />
    </div>
  );
}

export default Introduction;
