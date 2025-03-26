import React from "react";
import { Link } from "react-router-dom";
import NextPrev from "../../components/NextPrev";
function Introduction() {
  return (
    <div className="container-fluid d-flex flex-column px-5 pt-0 min-vh-100">
      <div className="flex-grow-1">
        <h1>Introduction</h1>
        <p>
        KubeBuddy is an AI-driven Kubernetes dashboard designed to simplify your Kubernetes experience. It prioritizes ease of use, accessibility, and AI-driven insights to empower teams at every level. With no additional installations required inside your cluster, KubeBuddy offers a clean, intuitive interface that makes Kubernetes management effortless.
        </p>

        <h4>Why KubeBuddy?</h4>
        <ul>
          <li>KubeBuddy simplifies Kubernetes management with a streamlined, user-friendly interface.</li>
          <li>Cluster Insights - View events, logs, and cluster status.</li>
          <li>Discover how AI integrations can improve efficiency by offering real-time error diagnostics and suggestions.</li>
          <li>Understand how KubeBuddy’s no-installation approach on Kubernetes cluster makes it easy to deploy as webapp anywhere without burdening your Kubernetes cluster.</li>
        </ul>

        <h4>Getting Started</h4>
        <p>Jump to the <strong><Link to='/docs/installation'>Installation</Link></strong> section to set up KubeBuddy on your system.</p>
      </div>
      <NextPrev next="/docs/installation" nextTitle="Installation" />
    </div>
  );
}

export default Introduction;
