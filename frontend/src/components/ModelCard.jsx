import React from "react";

const ModelCard = ({ model }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow hover:shadow-lg transition-all duration-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750">
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{model.name}</h3>
      <p className="text-sm mb-2 text-gray-600 dark:text-gray-300">{model.description}</p>
      <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">{model.tag}</span>
    </div>
  );
};

export default ModelCard;
