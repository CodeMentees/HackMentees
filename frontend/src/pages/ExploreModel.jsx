import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { models } from "../data/models";
import ModelCard from "../components/ModelCard";

const ExploreModel = ({ darkMode, setDarkMode }) => {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const timers = models.map((_, index) =>
      setTimeout(() => setVisibleCards(prev => [...prev, index]), 100 * index)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className={darkMode ? "dark bg-background text-foreground min-h-screen" : "bg-white text-gray-900 min-h-screen"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} activePage="explore" />

      {/* Page Header */}
      <header className="pt-24 px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-500 bg-clip-text text-transparent">
           Explore Models
          </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-12">
          Browse all available community-contributed machine learning models.
        </p>
      </header>

      {/* Models Grid */}
      <main className="max-w-7xl mx-auto px-6 pb-20">
        {models.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {models.map((model, index) => (
              <div
                key={model.id}
                className={`transition-all duration-700 transform ${
                  visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <ModelCard
                  model={model}
                  className="h-80 bg-gray-900 dark:bg-gray-800 text-white rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                />
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
      </main>
    </div>
  );
};

export default ExploreModel;
