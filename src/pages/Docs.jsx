import React from "react";
import Sidebar from "../components/Sidebar";
import Introduction from "./docs/Introduction";
import Installation from "./docs/Installation";
import Platform from "./docs/Platform";
import GuideGettingStarted from "./docs/guide/GettingStarted";
import GuideConfiguration from "./docs/guide/Configuration";
import GuideBuddyAI from "./docs/guide/BuddyAI";
import GuideTerminal from "./docs/guide/Terminal";
import { Routes, Route, Navigate } from "react-router-dom";

function Docs() {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-4 col-lg-2 p-0 position-sticky d-none d-md-block" >
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-md-9 col-lg-10 p-4 ms-auto">
          <Routes>
            <Route path="/" element={<Navigate to="introduction" replace />} />
            <Route path="introduction" element={<Introduction />} />
            <Route path="installation" element={<Installation />} />
            <Route path="platform" element={<Platform />} />

            {/* Guide and it's subsections */}
            <Route path="guide" element={<Navigate to="guide/getting-started" replace />} />
            <Route path="guide/getting-started" element={<GuideGettingStarted />} />
            <Route path="guide/configuration" element={<GuideConfiguration />} />
            <Route path="guide/buddyai" element={<GuideBuddyAI />} />
            <Route path="guide/terminal" element={<GuideTerminal />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Docs;