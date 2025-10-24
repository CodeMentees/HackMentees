import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ExploreModel from "./pages/ExploreModel";

function App() {
  const [showModels, setShowModels] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const handleExploreModels = () => {
    setShowModels(true);
  };

  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      {/* Global Navbar:visible on all pages */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}  />

      <div className={`min-h-screen ${darkMode ? "bg-background text-foreground" : "bg-white text-gray-900"}`}>
        <Routes>
          <Route path="/" element={
              <Home
                showModels={showModels}
                setShowModels={setShowModels}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                onExploreModels={handleExploreModels}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                onExploreModels={handleExploreModels}
              />
            }
          />
          <Route
  path="/exploremodel"
  element={<ExploreModel darkMode={darkMode} setDarkMode={setDarkMode} />}
/>

        </Routes>
      </div>
    </>
    
  );
}

export default App;