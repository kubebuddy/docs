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
      <code className="text-dark">{children}</code>
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
        <p>Follow these steps to install and set up KubeBuddy.</p>

        <h3>Prerequisites</h3>
        <ul>
          <li>A running Kubernetes cluster</li>
          <li>A kubeconfig file present on your machine</li>
          <li><a href="https://www.python.org/downloads/" target="_blank" style={{textDecoration:'none'}}>Python 3.10</a> or above installed on your system</li>
          <li><a href="https://git-scm.com/downloads" target="_blank" style={{textDecoration:'none'}}>Git</a> installed on your system</li>
        </ul>
        <hr class="border border-secondary-emphasis border-1 opacity-100 my-4"></hr>
        <h3>Installation Steps</h3>
        <Accordion defaultActiveKey="0" alwaysOpen>
          {[
            { title: "Clone the Repository", content: "git clone https://github.com/thinknyx-technologies-llp/kubebuddy.git" },
            { title: "Create a Virtual Environment", content: "python -m venv kubebuddy_env" },
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
                  <CodeBlock>source kubebuddy_env/bin/activate</CodeBlock>
                </Tab>
                <Tab eventKey="windows" title="Windows">
                  <CodeBlock>.\kubebuddy_env\Scripts\activate</CodeBlock>
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
        <hr class="border border-secondary-emphasis border-1 opacity-100 my-4"></hr>
        <h3 className="my-3">Notes</h3>
        <ul>
          <li>You can modify <code>SUPERUSER_USERNAME</code> and <code>SUPERUSER_PASSWORD</code> as needed.</li>
          <li>Ensure your Kubernetes cluster is running before executing these steps.</li>
          <li>Check that your <code>kubeconfig</code> file is correctly set up.</li>
        </ul>
      </div>
      <NextPrev prev="/docs/introduction" prevTitle="Introduction" next="/docs/platform" nextTitle="Platform" />
    </div>
  );
}

export default Installation;

// import React from "react";
// import { useState } from "react";
// import NextPrev from "../../components/NextPrev";

// function Installation() {
//   const [copiedText, setCopiedText] = useState(null);
//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
//     setCopiedText(text);
//   };

//   const CodeBlock = ({ children }) => (
//     <div className="position-relative p-3 rounded border m-3" style={{ backgroundColor: "rgb(240, 239, 239)" }} >
//       <code className="text-dark">{children}</code>
//       <button
//         className="btn btn-sm btn-outline-secondary position-absolute top-0 end-0 m-2"
//         onClick={() => copyToClipboard(children)}
//       >
//         {copiedText === children ? "Copied!" : "Copy"}
//       </button>
//     </div>
//   );

//   return (
//     <div className="container-fluid d-flex flex-column px-5 min-vh-100">
//       <div className="flex-grow-1">
//         <h1>Installation</h1>
//         <p>Follow these steps to install and set up KubeBuddy.</p>

//         <h3>Prerequisites</h3>
//         <ul>
//           <li>A running Kubernetes cluster</li>
//           <li>A <code>.kube/config</code> file present on your machine</li>
//           <li>Python 3.10 or above installed on your system</li>
//           <li>Git installed on your system</li>
//         </ul>

//         <h3>Installation Steps</h3>
//         <h5>1. Clone the Repository</h5>
//         <CodeBlock>git clone https://github.com/thinknyx-technologies-llp/kubebuddy.git</CodeBlock>

//         <h5>2. Create a Virtual Environment</h5>
//         <CodeBlock>python -m venv kubebuddy_env</CodeBlock>

//         <h5>3. Activate the Virtual Environment</h5>
//         <p>On Windows:</p>
//         <CodeBlock>.\\k8s_env\\Scripts\\activate</CodeBlock>
//         <p>On Linux/Mac:</p>
//         <CodeBlock>source k8s_env/bin/activate</CodeBlock>

//         <h5>4. Install Dependencies</h5>
//         <CodeBlock>pip install -r requirements.txt</CodeBlock>

//         <h5>5. Configure Environment Variables</h5>
//         <p>Create a <code>.env</code> file and add:</p>
//         <CodeBlock>SUPERUSER_USERNAME=admin\nSUPERUSER_PASSWORD=admin</CodeBlock>
//         <p>Or export them directly:</p>
//         <CodeBlock>export SUPERUSER_USERNAME=admin\nexport SUPERUSER_PASSWORD=admin</CodeBlock>

//         <h5>6. Apply Database Migrations</h5>
//         <CodeBlock>python manage.py makemigrations</CodeBlock>
//         <p>If no changes are detected, try:</p>
//         <CodeBlock>python manage.py makemigrations main</CodeBlock>
//         <p>and finally run:</p>
//         <CodeBlock>python manage.py migrate</CodeBlock>

//         <h5>7. Run the Application</h5>
//         <CodeBlock>python manage.py runserver</CodeBlock>

//         <h3>Notes</h3>
//         <ul>
//           <li>You can modify <code>SUPERUSER_USERNAME</code> and <code>SUPERUSER_PASSWORD</code> as needed.</li>
//           <li>Ensure your Kubernetes cluster is running before executing these steps.</li>
//           <li>Check that your <code>kube/config</code> file is correctly set up.</li>
//         </ul>
//       </div>
//       <NextPrev prev="/docs/introduction" prevTitle="Introduction" next="/docs/platform" nextTitle="Platform" />
//     </div>
//   );
// }

// export default Installation;
