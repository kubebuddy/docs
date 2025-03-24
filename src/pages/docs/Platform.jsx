import React, { useState } from "react";
import NextPrev from "../../components/NextPrev";

function Platform() {
  return (
    <div className="container-fluid d-flex flex-column px-5 min-vh-100">
      <div className="flex-grow-1">
        <h1>Platform</h1>
        <p>
          KubeBuddy is designed to work across multiple environments, including different web browsers
          and Kubernetes providers.
        </p>

        <h3>Browser Compatibility</h3>
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>Browser</th>
              <th>Supported</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Google Chrome</td>
              <td>✅</td>
              <td>Fully Supported</td>
            </tr>
            <tr>
              <td>Mozilla Firefox</td>
              <td>✅</td>
              <td>Fully Supported</td>
            </tr>
            <tr>
              <td>Microsoft Edge</td>
              <td>✅</td>
              <td>Fully Supported</td>
            </tr>
            <tr>
              <td>Safari</td>
              <td>✅</td>
              <td>May have minor UI inconsistencies</td>
            </tr>
          </tbody>
        </table>

        <hr class="border border-secondary-emphasis border-1 opacity-100 my-4"></hr>
        {/* ✅❌❓ */}
        <h3>Kubernetes Provider Support</h3>
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>Provider</th>
              <th>Supported</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AWS EKS</td>
              <td>❓ Testing</td>
            </tr>
            <tr>
              <td>Google GKE</td>
              <td>❓ Testing</td>
            </tr>
            <tr>
              <td>Azure AKS</td>
              <td>❓ Testing</td>
            </tr>
            <tr>
              <td>DigitalOcean Kubernetes</td>
              <td>❓ Testing</td>
            </tr>
            <tr>
              <td>Minikube</td>
              <td>✅ Yes</td>
            </tr>
            <tr>
              <td>Kind</td>
              <td>✅ Yes</td>
            </tr>
            <tr>
              <td>Docker Desktop</td>
              <td>✅ Yes</td>
            </tr>
            <tr>
              <td>Native Kubernetes</td>
              <td>✅ Yes</td>
            </tr>
          </tbody>
        </table>
        <hr class="border border-secondary-emphasis border-1 opacity-100 my-4"></hr>
        <h3>Notes</h3>
        <ul>
          <li>Ensure your browser is updated for the best experience.</li>
          <li>For Kubernetes providers, install the required CLI tools before running setup commands.</li>
          <li>Cloud providers may require authentication before configuring clusters.</li>
        </ul>
      </div>

      <NextPrev prev="/docs/installation" prevTitle="Installation" next="/docs/guide/getting-started" nextTitle="Getting-started" />
    </div>
  );
}

export default Platform;
