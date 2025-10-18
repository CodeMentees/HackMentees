import React from "react";

const Sidebar = () => {
  return (
    <div className="w-60 h-screen bg-gray-200 dark:bg-gray-800 p-4 border-r border-gray-300 dark:border-gray-700">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Models</h2>
      <ul>
        <li className="mb-2 cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 text-gray-700 dark:text-gray-300 transition-colors">Home</li>
        <li className="mb-2 cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 text-gray-700 dark:text-gray-300 transition-colors">Contributors</li>
        <li className="mb-2 cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 text-gray-700 dark:text-gray-300 transition-colors">Docs</li>
      </ul>
    </div>
  );
};

export default Sidebar;
