import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
<<<<<<< HEAD
import ExploreModel from "./pages/ExploreModel";
=======
import Contributors from "./pages/Contributors"; //

>>>>>>> c53ef2e4201185358e359e4eaf741a9b37ece2aa

function App() {
  const [showModels, setShowModels] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const navigate = useNavigate(); //

  const handleExploreModels = () => {
    navigate("/");
    window.scrollTo(0, 0);
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
<<<<<<< HEAD
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}  />
=======
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onExploreModels={handleExploreModels}
      />
>>>>>>> c53ef2e4201185358e359e4eaf741a9b37ece2aa

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
<<<<<<< HEAD
          <Route
  path="/exploremodel"
  element={<ExploreModel darkMode={darkMode} setDarkMode={setDarkMode} />}
/>
=======

          <Route
            path="/contributors"
            element={
              <Contributors
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />
>>>>>>> c53ef2e4201185358e359e4eaf741a9b37ece2aa

        </Routes>
      </div>
    </>
    
  );
}

export default App;