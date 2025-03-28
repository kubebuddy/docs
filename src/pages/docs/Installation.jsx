import React, { useState } from "react";
import NextPrev from "../../components/NextPrev";
import { Accordion, Tab, Tabs } from "react-bootstrap";

function Installation() {
  const [copiedText, setCopiedText] = useState(null);
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
  };

  const CodeBlock = ({ children }) => (
    <div className="position-relative p-3 rounded border" style={{ backgroundColor: "rgb(240, 239, 239)" }}>
      <code className="text-dark" style={{ whiteSpace: "pre-wrap", display: "block" }}>{children}</code>
      <button
        className="btn btn-sm btn-outline-secondary position-absolute top-0 end-0 m-2"
        onClick={() => copyToClipboard(children)}
      >
        {copiedText === children ? "Copied!" : "Copy"}
      </button>
    </div>
  );

  return (
    <div className="container-fluid d-flex flex-column px-5 min-vh-100">
      <div className="flex-grow-1">
        <h1>Installation</h1>
        <p>Kubebuddy is a versatile solution that can be deployed across multiple platforms, including Linux, Windows, and macOS. Its cross-platform compatibility ensures that organizations can seamlessly integrate it into diverse IT environments.</p>
        <h3>Prerequisites</h3>
        <ul>
          <li>Kubebuddy requires a fully functional Kubernetes cluster to monitor and analyze its resources. The cluster must be properly configured, accessible via kubectl, and have the necessary permissions to retrieve events, logs, and status updates from Kubernetes components. Depending on your needs, you can set up a cluster in different ways:
            <br /><br />
            <ol>
              <li>Native Kubernetes Deployments (Self-Hosted Clusters):
                <ul>
                  <li>Kubebuddy is fully compatible with self-hosted Kubernetes clusters running on bare metal or virtual machines.</li>
                  <li>These are suitable for production environments.</li>
                </ul>
              </li>
              <li>Kind (Kubernetes in Docker):
                <ul>
                  <li>Best suited for local development and testing.</li>
                  <li>Runs an entire Kubernetes cluster inside Docker containers.</li>
                </ul>
              </li>
              <li>Minikube:
                <ul>
                  <li>A lightweight, single-node Kubernetes cluster.</li>
                  <li>Ideal for development and learning.</li>
                </ul>
              </li>
            </ol>
          </li>
          <br />
          <li>A kubeconfig file present on your machine
            <p>The <code>kubeconfig</code> file is crucial for connecting your local system to a Kubernetes cluster. This file contains authentication details, cluster configuration, and access credentials. Default kubeconfig location:</p>
            <ul>
              <li>Linux/macOS: ~/.kube/config</li>
              <li>Windows: %USERPROFILE%\.kube\config</li>
            </ul>
          </li>
          <br />
          <li><a href="https://www.python.org/downloads/" target="_blank" style={{textDecoration:'none'}}>Python 3.10</a> or above installed on your system. Kubebuddy relies on Python for various API interactions. To ensure compatibility, you must install Python 3.10 or later.</li> <br />
          <li><a href="https://git-scm.com/downloads" target="_blank" style={{textDecoration:'none'}}>Git</a> installed on your system. Git is required to clone the Kubebuddy repository, manage source code, and contribute to development. It is an essential version control tool for handling project changes.</li>
        </ul>
        <hr className="border border-secondary-emphasis border-1 opacity-100 my-4"></hr>
        <h3>Installation Steps</h3>
        <Accordion defaultActiveKey="0" alwaysOpen>
          {[
            { title: "Clone the Repository", content: "git clone https://github.com/thinknyx-technologies-llp/kubebuddy.git" },
            { title: "Create a Virtual Environment", content: "python -m venv <your-env-name>" },
          ].map((step, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{`${index + 1}. ${step.title}`}</Accordion.Header>
              <Accordion.Body>
                <CodeBlock>{step.content}</CodeBlock>
              </Accordion.Body>
            </Accordion.Item>
          ))}

          <Accordion.Item eventKey="2">
            <Accordion.Header>3. Activate the Virtual Environment</Accordion.Header>
            <Accordion.Body>
              <Tabs defaultActiveKey="linux-mac" id="activate-env-tabs" className="mb-3">
                <Tab eventKey="linux-mac" title="Linux/Mac">
                  <CodeBlock>source &lt;your-env-name&gt;/bin/activate</CodeBlock>
                </Tab>
                <Tab eventKey="windows" title="Windows">
                  <CodeBlock>.\&lt;your-env-name&gt;\Scripts\activate</CodeBlock>
                </Tab>
              </Tabs>
            </Accordion.Body>
          </Accordion.Item>

          {[
            { title: "Install Dependencies", content: "pip install -r requirements.txt" },
            { title: "Configure Environment Variables", content: "SUPERUSER_USERNAME=admin\nSUPERUSER_PASSWORD=admin" },
            { title: "Apply Database Migrations", content: "python manage.py makemigrations\npython manage.py migrate" },
            { title: "Run the Application", content: "python manage.py runserver" },
          ].map((step, index) => (
            <Accordion.Item eventKey={(index + 3).toString()} key={index + 3}>
              <Accordion.Header>{`${index + 4}. ${step.title}`}</Accordion.Header>
              <Accordion.Body>
                <CodeBlock>{step.content}</CodeBlock>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
        <hr className ="border border-secondary-emphasis border-1 opacity-100 my-4"></hr>
        <h3 className="my-3">Notes</h3>
        <ul>
          <li>You can modify <code>SUPERUSER_USERNAME</code> and <code>SUPERUSER_PASSWORD</code> as needed.</li>
          <li>Ensure your Kubernetes cluster is running before executing these steps.</li>
          <li>Check that your <code>kubeconfig</code> file is correctly set up.</li>
          <li>You can change the application port by providing it when running the application (Step-7): <br />
          <div className="position-relative p-3 rounded border m-2" style={{ backgroundColor: "rgb(240, 239, 239)" }}>
          <code className="text-dark" style={{ whiteSpace: "pre-wrap", display: "block" }}>python manage.py runserver &lt;your-port&gt;</code>
          <button
            className="btn btn-sm btn-outline-secondary position-absolute top-0 end-0 m-2"
            onClick={() => copyToClipboard("python manage.py runserver")}
          >
            {copiedText === "python manage.py runserver" ? "Copied!" : "Copy"}
          </button>
        </div>
          </li>
        </ul>
      </div>
      <NextPrev prev="/docs/introduction" prevTitle="Introduction" next="/docs/platform" nextTitle="Platform" />
    </div>
  );
}

export default Installation;