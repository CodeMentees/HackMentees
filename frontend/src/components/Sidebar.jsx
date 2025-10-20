import React, { useState } from "react";
import { X, Home, Users, FileText, ChevronRight } from "lucide-react";
import { models } from "../data/models";

const Sidebar = ({ isOpen, onClose }) => {
  const [activeModel, setActiveModel] = useState(null);

  const handleModelClick = (modelId) => {
    setActiveModel(modelId);
    // Navigate to model section
    const element = document.getElementById(`model-${modelId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close sidebar on mobile after selection
    if (window.innerWidth < 768) {
      onClose();
    }
  };

  const navigationItems = [
    { name: "Home", icon: Home, path: "/" },
    { name: "Contributors", icon: Users, path: "/contributors" },
    { name: "Docs", icon: FileText, path: "/docs" }
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:sticky top-0 left-0 h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } w-64 flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            ML Hub
          </h2>
          <button
            onClick={onClose}
            className="md:hidden p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Navigation Items */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              Navigation
            </h3>
            <ul className="space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <button
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{item.name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ML Models Section */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              ML Models ({models.length})
            </h3>
            <ul className="space-y-1">
              {models.map((model) => (
                <li key={model.id}>
                  <button
                    onClick={() => handleModelClick(model.id)}
                    className={`w-full group flex items-start gap-2 px-3 py-3 rounded-lg text-left transition-all ${
                      activeModel === model.id
                        ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    <ChevronRight
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 transition-transform ${
                        activeModel === model.id ? "rotate-90" : ""
                      }`}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        {model.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-2">
                        {model.description}
                      </p>
                      <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded">
                        {model.tag}
                      </span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            {models.length} models available
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;