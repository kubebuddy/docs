import React from 'react';
import { Accordion } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div className="container my-5 ">
            <h2 className="mb-4 text-center">Frequently Asked Questions</h2>
            <Accordion defaultActiveKey="0" alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How do I add multiple clusters?</Accordion.Header>
                    <Accordion.Body>
                    You can add as many clusters as you need by clicking the "Add Cluster" button for each one and providing the appropriate kubeconfig file.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" alwaysOpen>
                    <Accordion.Header>What permissions does the AI assistant need?</Accordion.Header>
                    <Accordion.Body>
                    By default, the AI assistant has limited permissions. You can configure which actions the AI is allowed to perform in the AI Configuration tab. For security reasons, we recommend limiting AI permissions to only what's necessary.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" alwaysOpen>
                    <Accordion.Header>How secure is my API key?</Accordion.Header>
                    <Accordion.Body>
                    Your API key is encrypted and stored securely. We never transmit your API key outside of your authenticated sessions, and it's not stored in plain text.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" alwaysOpen>
                    <Accordion.Header>How to view complete events message?</Accordion.Header>
                    <Accordion.Body>
                    You can view the full event message by clicking on the message text to expand it.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;
