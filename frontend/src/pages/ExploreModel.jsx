import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { models } from "../data/models";
import ModelCard from "../components/ModelCard";

const ExploreModel = ({ darkMode, setDarkMode }) => {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const timers = models.map((_, index) =>
      setTimeout(() => setVisibleCards(prev => [...prev, index]), 150 * index)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div
      className={
        darkMode
          ? "dark bg-background text-foreground min-h-screen"
          : "bg-white text-gray-900 min-h-screen"
      }
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} activePage="explore" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-500 bg-clip-text text-transparent">
            Explore Models
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Browse all available community-contributed machine learning models.
          </p>
        </div>

        {/* Models Grid */}
        {models.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {models.map((model, index) => (
              <div
                key={model.id}
                className={`transition-all duration-700 ease-out transform ${
                  visibleCards.includes(index)
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
              >
                <ModelCard
                  model={model}
                  className="bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-900/20 dark:to-black"/>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-600 dark:text-gray-300 text-xl">
              No models available yet. Be the first to contribute!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreModel;
