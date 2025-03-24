import React from "react";
import NextPrev from "../../../components/NextPrev";

function BuddyAI() {
    return (
        <div className="container-fluid d-flex flex-column px-5 min-vh-100">
          <h2 className="mb-4">Buddy AI</h2>
    
          <div className="mb-2">
            <h4>What is Buddy AI?</h4>
            <p>
              <strong>Buddy AI</strong> is an in-app chatbot designed to assist users with technical queries.  
              It provides real-time solutions for problems and errors directly within the application.
            </p>
          </div>
    
          <div className="mb-2">
            <h4>How to Access Buddy AI?</h4>
            <p>
              Buddy AI is available at the <strong>bottom-right corner</strong> of the application.  
              Simply click the bot icon to open the chat window.
            </p>
          </div>
    
          <div className="mb-2">
            <h4>What Can Buddy AI Do?</h4>
            <ul>
              <li>Answer technical queries related to the application.</li>
              <li>Help troubleshoot errors and provide solutions.</li>
              <li>Guide users through common workflows within the application.</li>
            </ul>
          </div>
    
          <div className="alert alert-info">
            <strong>Note:</strong> Buddy AI is designed for technical assistance only and does not handle general inquiries.
          </div>
          <NextPrev prev="/docs/guide/configuration" prevTitle="Configuration" next="/docs/guide/terminal" nextTitle="Terminal" />
        </div>
      );
}

export default BuddyAI;