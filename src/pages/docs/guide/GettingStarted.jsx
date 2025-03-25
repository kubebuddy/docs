import React from "react";
import NextPrev from "../../../components/NextPrev";

function GettingStarted() {
  return (
    <div className="container-fluid d-flex flex-column px-5 min-vh-100">
      <h1 className="mb-4">Getting Started with KubeBuddy</h1>
      
      <div className="mb-2">
        <h4>1. Access the Application</h4>
        <p>Open your browser and visit <code>http://localhost:8000</code> to access KubeBuddy.</p>
      </div>
      
      <div className="mb-2">
        <h4>2. Login</h4>
        <p>Log in using the default credentials or the ones provided during setup.</p>
      </div>
      
      <div className="mb-2">
        <h4>3. Provide Kubeconfig Path</h4>
        <p>You will be prompted to enter the path to your <code>kubeconfig</code> file. Once provided, you will be redirected to the Cluster Selection page.</p>
      </div>
      
      <div className="mb-2">
        <h4>4. Select a Cluster</h4>
        <p>On the Cluster Selection page, you will see all clusters available in your <code>kubeconfig</code> file.</p>
        <ul>
          <li>You can add another <code>kubeconfig</code> file using the <strong>Add Cluster</strong> button.</li>
          <li>Each cluster card displays its status and can be clicked to access the cluster.</li>
          <li>An <strong>Auto-Reload</strong> feature is available on this page. If toggled on, the page will automatically reload every 30 seconds to reflect the latest cluster status.</li>
        </ul>
      </div>
      
      <div className="mb-2">
        <h4>5. Access Settings</h4>
        <p>To access settings, use the dropdown menu in the upper right corner.</p>
      </div>
      <NextPrev prev="/docs/platform" prevTitle="Platform" next="/docs/guide/configuration" nextTitle="Configuration" />
    </div>
  );
}

export default GettingStarted;