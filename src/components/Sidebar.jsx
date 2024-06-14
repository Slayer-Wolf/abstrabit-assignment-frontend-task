// Sidebar.js
import React from "react";
// import {
//   HomeIcon,
//   QuestionMarkCircleIcon,
//   SupportIcon,
// } from "@heroicons/react/outline";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="flex items-center justify-center h-16 bg-gray-900">
        <span className="text-lg font-bold">Dashboard</span>
      </div>
      <div className="flex-grow">
        <nav className="flex flex-col p-4">
          <a
            href="#"
            className="flex items-center p-2 mb-2 hover:bg-gray-700 rounded"
          >
            {/* <HomeIcon className="h-5 w-5 mr-2" /> */}
            Home
          </a>
          <a
            href="#"
            className="flex items-center p-2 mb-2 hover:bg-gray-700 rounded"
          >
            {/* <QuestionMarkCircleIcon className="h-5 w-5 mr-2" /> */}
            FAQs
          </a>
          <a
            href="#"
            className="flex items-center p-2 mb-2 hover:bg-gray-700 rounded"
          >
            {/* <SupportIcon className="h-5 w-5 mr-2" /> */}
            Support
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
