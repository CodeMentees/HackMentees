import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, ArrowRight, Rocket, Sun, Moon } from "lucide-react";

// Reusable component for the "Explore Models" button
const ExploreModelsButton = ({ type, onClick }) => {
  if (type === "desktop") {
    return (
      <Button
        onClick={onClick}
        size="sm"
        className="hidden md:flex group hover:scale-105 transition-all duration-300"
      >
        <Rocket className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
        <span className="hidden lg:inline">Explore Models</span>
        <span className="lg:hidden">Explore</span>
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    );
  }
  if (type === "mobileSheet") {
    return (
      <Button
        onClick={onClick}
        className="w-full group hover:scale-105 transition-all duration-300"
        size="lg"
      >
        <Rocket className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
        Explore Models
        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    );
  }
  return null;
};

const Navbar = ({ onExploreModels, darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // ✅ Get current route

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // Function to check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b dark:bg-gray-900/95 dark:border-gray-700"
          : "bg-transparent dark:bg-transparent"
      } ${darkMode ? "dark" : ""}`}
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo & Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  aria-label="Toggle navigation menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[320px] sm:w-[400px] transition-transform duration-300"
              >
                <SheetHeader className="sr-only">
                  <SheetTitle>Navigation</SheetTitle>
                  <SheetDescription>
                    Primary navigation links for HackMentees.
                  </SheetDescription>
                </SheetHeader>

                <div className="flex flex-col space-y-6 mt-6">
                  {/* Mobile Nav Links */}
                  <div className="flex flex-col space-y-4">
                    <SheetClose asChild>
                      <Link
                        to="/"
                        className={`text-lg font-medium text-left py-2 hover:text-primary transition-colors ${
                          isActive("/")
                            ? "text-primary font-bold"
                            : darkMode
                            ? "text-white"
                            : "text-gray-900"
                        }`}
                      >
                        Home
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        to="/about"
                        className={`text-lg font-medium text-left py-2 hover:text-primary transition-colors ${
                          isActive("/about")
                            ? "text-primary font-bold"
                            : darkMode
                            ? "text-white"
                            : "text-gray-900"
                        }`}
                      >
                        About
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <button
                        onClick={() => scrollToSection("contribute")}
                        className={`text-lg font-medium text-left py-2 hover:text-primary transition-colors`}
                      >
                        Contribute
                      </button>
                    </SheetClose>
                  </div>

                  {/* Mobile Explore Models */}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <SheetClose asChild>
                      <ExploreModelsButton
                        type="mobileSheet"
                        onClick={onExploreModels}
                      />
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-bold text-sm sm:text-lg">
                H
              </span>
            </div>
            <div
              className={`text-lg sm:text-xl lg:text-2xl font-bold ${
                darkMode
                  ? "text-white"
                  : "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
              }`}
            >
              <span className="hidden sm:inline">HackMentees</span>
              <span className="sm:hidden">HM</span>
            </div>
          </div>

          {/* Desktop Nav */}
         <NavigationMenu className="hidden md:flex">
  <NavigationMenuList>
    {[
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Explore Models", path: "/exploremodel" },
    ].map((item) => (
      <NavigationMenuItem key={item.path}>
        <NavigationMenuLink asChild className="relative font-medium text-sm px-4 py-2 cursor-pointer">
          <Link
            to={item.path}
            className={`transition-colors duration-300 ${
              isActive(item.path)
                ? "text-primary font-bold"
                : darkMode
                ? "text-white"
                : "text-gray-900"
            }`}
          >
            {item.name}
            {/* Underline */}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300 ${
                isActive(item.path) ? "w-full" : "w-0"
              }`}
            ></span>
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    ))}
  </NavigationMenuList>
</NavigationMenu>

          {/* Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-3 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-6 h-6 text-yellow-500" />
              ) : (
                <Moon className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
