import React from "react";
import NextPrev from "../../../components/NextPrev";

function Terminal() {
  return (
    <div className="container-fluid d-flex flex-column px-5 min-vh-100">
      <h2 className="mb-4">Terminal</h2>

      <div>
        <p>
          The application provides an integrated <strong>Terminal</strong> that allows users to interact with the host machine  
          where the application is running. This enables users to execute commands without leaving the application.
        </p>
      </div>

      <div className="px-5 py-3 mb-4">
      <img src={"/buddy-terminal.png"} alt="kubebuddy-terminal" className="img-fluid shadow" />
      </div>

      <div className="mb-2">
        <h4>How to Access the Terminal?</h4>
        <p>
          The terminal can be accessed from within the application interface via a button present in the <strong>bottom right corner</strong> of the browser window. It provides a command-line interface  
          to execute supported commands directly from the browser.
        </p>
      </div>

      <div className="mb-2">
        <h4>Usage Restrictions</h4>
        <ul>
          <li>The terminal is restricted to the <strong>application directory</strong> .</li>
          <li>Users <strong>cannot edit files</strong> from the terminal.</li>
        </ul>
      </div>

      <div className="alert alert-warning">
        <strong>Important:</strong> While you can execute commands, the terminal is restricted to the application directory  
        and does not allow modifying files.
      </div>
      <NextPrev prev="/docs/guide/buddyai" prevTitle="Buddy AI" />
    </div>
  );
}

export default Terminal;
