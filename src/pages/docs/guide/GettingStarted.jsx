import React from "react";
import NextPrev from "../../../components/NextPrev";

function GettingStarted() {
  return (
    <div className="container-fluid d-flex flex-column px-5 min-vh-100">
      <h1 className="mb-4">Getting Started with KubeBuddy</h1>
      
      <div className="mb-2">
        <h4>1. Access the Application</h4>
        <p>KubeBuddy runs on any host machine with access to your Kubernetes cluster and allows multiple users to connect via <code>http://localhost:8000</code> using a supported browser.</p>
        <div className="col-md-6 mx-auto">
          <img src={"/localhost.jpg"} alt="kubebuddy-localhost-access" className="img-fluid shadow-lg" />
        </div>
      </div>
      
      <div className="mb-2 mt-4">
        <h4>2. Login</h4>
        <p>The first user will be redirected to the Login page, where they can sign in using the default credentials:
        User: <code>admin</code> , Password: <code>admin</code> (or the credentials set during setup). <br />
        🔒 <i>For security, we strongly recommend changing your password after the first login.</i>
        </p>
        <div className="col-md-5 mx-auto">
        <img src={"/login.png"} alt="kubebuddy-login-page" className="img-fluid shadow-lg"/>
        </div>
      </div>
      
      <div className="mb-2 mt-4">
        <h4>3. Provide Kubeconfig File</h4>
        <p>You will be prompted to enter the path to your <code>kubeconfig</code> file. You can either use the default path or manually enter a custom path. You can provide multiple config files to monitor multiple clusters. Once set, you’ll be redirected to the Cluster Selection page.
        </p>
        <div className="col-md-7 mx-auto">
          <img src={"/config-path.png"} alt="kubebuddy-config-file" className="img-fluid shadow-lg" />
        </div>
      </div>
      
      <div className="mb-2 mt-4">
        <h4>4. Select a Cluster</h4>
        <p>On the Cluster Selection page, you will see all clusters available in your <code>kubeconfig</code> file(s).</p>
        <ul>
          <li>You can add another <code>kubeconfig</code> file using the <strong>Add Cluster</strong> button.</li>
          <li>Each cluster card displays its status and can be clicked to access the cluster.</li>
          <li>An <strong>Auto-Reload</strong> feature is available on this page. If toggled on, the page will automatically reload every 30 seconds to reflect the latest cluster status.</li>
        </ul>
        <div className="mx-auto">
          <img src={"/cluster-select.png"} alt="kubebuddy-cluster-select" className="img-fluid shadow-lg" />
        </div>
      </div>
      
      <div className="mb-2 mt-4">
        <h4>5. Accessing Settings</h4>
        <p>Click the Settings button in the bottom-left corner to customize your KubeBuddy experience. The Settings page includes the following options:</p>
        <ul>
          <li> User Information – View details about your account.</li>
          <div className="my-4">
            <img src={"/settings-user.png"} alt="kubebuddy-settings-user" className="img-fluid shadow-lg" />
          </div>
          <li>Buddy AI Configuration – Integrate Buddy AI by providing your API key. This enables AI-powered assistance for troubleshooting and insights.</li>
          <div className="my-4">
            <img src={"/settings-ai.png"} alt="kubebuddy-settings-ai" className="img-fluid shadow-lg" />
          </div>
          <li>Change Password – Secure your account by updating your password anytime.</li>
          <div className="my-4">
            <img src={"/settings-password.png"} alt="kubebuddy-settings-password" className="img-fluid shadow-lg" />
          </div>
          <li>Documentation – Access helpful guides, FAQs and resources to make the most of KubeBuddy.</li>
          <div className="my-4">
            <img src={"/settings-docs.jpg"} alt="kubebuddy-settings-docs" className="img-fluid shadow-lg" />
          </div>
        </ul>
      </div>
      <NextPrev prev="/docs/platform" prevTitle="Platform" next="/docs/guide/configuration" nextTitle="Configuration" />
    </div>
  );
}

export default GettingStarted;