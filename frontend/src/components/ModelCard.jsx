import React from "react";

const ModelCard = ({ model }) => {
  return (
    <div className="flex justify-center">
      <div className="w-72 bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 text-center">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{model.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{model.description}</p>
        <span className="inline-block text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
          {model.tag}
        </span>
      </div>
    </div>
  );  
};

export default ModelCard;
