import React, { useState } from "react";
import { models } from "../data/models";
import ModelCard from "../components/ModelCard";
import Sidebar from "../components/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navbar from "../components/Navbar"; 
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { Github, Star, GitFork, Zap, Heart, Code, Users, Rocket, Brain, Globe, 
ChevronRight, ArrowRight, ExternalLink, Trophy, Target, Sparkles, Book, MessageCircle } from "lucide-react"; 


export default function Home({darkMode, setDarkMode }) {
  return (
    <div className={darkMode ? "dark" : ""}>
      {/* ✅ Use Navbar component here */}
      <Navbar  
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 md:pt-20 lg:pt-16">

          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 tracking-tight dark:text-white">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                HackMentees
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl lg:text-3xl mb-12 text-muted-foreground dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A <span className="font-semibold text-primary">beginner-friendly</span> hub for 
              <span className="font-semibold text-primary"> machine learning</span> models and 
              <span className="font-semibold text-primary"> frontend</span> contributions
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                variant="outline" 
                size="lg" 
                className="group text-lg hover:scale-105 transition-all duration-300 flex items-center"
                asChild
              >
                <a href="#features" className="flex items-center dark:text-white">
                  Learn More
                  <ChevronRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <Card className="border-primary/20 hover:border-primary/40 transition-colors dark:border-gray-700 dark:bg-gray-800">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground dark:text-gray-300 font-medium">Contributors</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 hover:border-primary/40 transition-colors dark:border-gray-700 dark:bg-gray-800">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <div className="text-muted-foreground dark:text-gray-300 font-medium">ML Models</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 hover:border-primary/40 transition-colors dark:border-gray-700 dark:bg-gray-800">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground dark:text-gray-300 font-medium">Open Source</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contribute" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:50px_50px]" />
          <div className="container mx-auto text-center relative">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
                Ready to Start Contributing?
                <Sparkles className="inline-block w-8 h-8 ml-2" />
              </h2>
              <p className="text-xl sm:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
                Join our community of developers and make your mark in the world of open source. 
                Whether you're a seasoned developer or just starting out, we have opportunities for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="hover:scale-105 transition-transform duration-300"
                  asChild
                >
                  <a href="https://github.com/CodeMentees/HackMentees" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Github className="w-5 h-5 mr-2" />
                    View on GitHub
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="hover:scale-105 transition-transform duration-300"
                  asChild
                >
                  <a href="https://github.com/CodeMentees/HackMentees/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="flex items-center text-black dark:text-white">
                    <Zap className="w-5 h-5 mr-2 text-black dark:text-white" />
                    Start Contributing
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-background border-t">
          <div className="container mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-primary-foreground font-bold text-lg">H</span>
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  HackMentees
                </div>
              </div>
              <p className="text-muted-foreground mb-8 text-lg">Built with ❤️ for the open-source community</p>
              
              <div className="flex justify-center items-center space-x-6 mb-8">
                <Button variant="default" size="sm" className="hover:bg-muted/50" asChild>
                  <a href="https://github.com/CodeMentees/HackMentees" className="flex items-center">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button variant="default" size="sm" className="hover:bg-muted/50 flex items-center">
                  <Book className="w-4 h-4 mr-2" />
                  Documentation
                </Button>
                <Button variant="default" size="sm" className="hover:bg-muted/50 flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Community
                </Button>
                <Button variant="default" size="sm" className="hover:bg-muted/50 flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Blog
                </Button>
              </div>
              
              <Separator className="mb-8" />
              <p className="text-muted-foreground text-sm">
                &copy; 2025 HackMentees. Open source project for Hacktoberfest contributors.
              </p>
            </div>
          </div>
        </footer>
      </div>
  );
}
