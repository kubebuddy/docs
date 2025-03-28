import React from "react";
import NextPrev from "../../../components/NextPrev";
function Configuration() {
  return (
    <div className="container-fluid d-flex flex-column px-5 min-vh-100">
      <h1 className="mb-4">Configuration</h1>

      <div className="mb-2">
        <h4>1. AI Configuration</h4>
        <p>
          The <strong>AI Configuration</strong> tab in the Settings page allows you to configure <strong>Buddy AI</strong>.  
          Currently, the only available AI provider is <strong>Gemini</strong>.  
        </p> 
          <ul>
            <li>Select an AI provider from the dropdown (only Gemini for now).</li>
            <li>Enter and submit your API key to enable AI functionality.</li>
            <li>Delete the API key if you want to disable AI features.</li>
          </ul>
        <img src={"/settings-ai.png"} alt="kubebuddy-settings-ai-configuration" className="img-fluid m-3 p-3 shadow" />
      </div>

      <div className="mb-2">
        <h4>2. Change Password</h4>
        <p>
          In the <strong>Change Password</strong> tab, users can update their password securely.
        </p>
          <ul>
            <li>Enter your current password.</li>
            <li>Provide a new password and confirm it.</li>
            <li>Click the <strong>Update Password</strong> button to apply the changes.</li>
          </ul>
        <img src={"/settings-password.png"} alt="kubebuddy-settings-password" className="img-fluid m-3 p-3 shadow" />
      </div>

      <div className="mb-2">
        <h4>3. Accessing the Documentation Page</h4>
        <p>
            The <strong>Documentation Page</strong> can be accessed from the <strong>Settings</strong> section of the application.
        </p>
        <ul>
            <li>Navigate to <strong>Settings</strong> from the dropdown in the upper-right corner.</li>
            <li>Click on the <strong>Documentation</strong> tab.</li>
            <li>This section provides a brief overview of the project and includes a link to the full documentation.</li>
            <li>Click the provided link to access this detailed documentation page.</li>
        </ul>
        <img src={"/settings-docs.jpg"} alt="kubebuddy-settings-password" className="img-fluid m-3 p-3 shadow" />
        </div>

      <NextPrev prev="/docs/guide/getting-started" prevTitle="Getting-started" next="/docs/guide/buddyai" nextTitle="Buddy AI" />
    </div>
  );
}

export default Configuration;
