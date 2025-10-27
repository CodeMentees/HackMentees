import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Code, Sparkles, Users, Zap, Brain, Palette, Github, BookOpen, Rocket, CheckCircle, ArrowRight } from 'lucide-react'; // Removed ChevronRight as it's not used here
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

// --- FeatureCard Component ---
const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transform transition-all duration-700 ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
      }`}
    >
      <div className="bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-black border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-gray-400 dark:hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-300/30 dark:hover:shadow-white/5 group h-full">
        <div className="bg-gradient-to-br from-gray-200 to-gray-100 dark:from-white/10 dark:to-white/5 w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7 text-gray-900 dark:text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

// --- ContributionStep Component ---
const ContributionStep = ({ number, title, description, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="flex gap-6 items-start group">
        <div className="bg-gradient-to-br from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 text-white dark:text-black font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
          {number}
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
            {title}
          </h4>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

// --- TechIcon Component ---
const TechIcon = ({ name, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    let timer = null; // Initialize timer
    timer = setTimeout(() => setIsVisible(true), delay);
    return () => { if (timer) clearTimeout(timer); }; // Clear timeout on unmount
  }, [delay]);

  const icons = {
    React: '⚛️',
    Vite: '⚡',
    Python: '🐍',
    TensorFlow: '🧠',
    'scikit-learn': '📊',
    GitHub: '🐙',
  };

  return (
    <div
      className={`transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl p-6 hover:border-gray-400 dark:hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-400/20 dark:hover:shadow-white/10 group">
        <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
          {icons[name]}
        </div>
        <div className="text-gray-900 dark:text-white font-semibold text-sm">{name}</div>
      </div>
    </div>
  );
};


// --- About Component ---
// Removed unused props like onExploreModels
const About = ({ darkMode, setDarkMode }) => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* 2. REMOVED the duplicate Navbar component from here */}

      {/* Main About Section */}
      <div className="max-w-7xl mx-auto px-6 py-32">
        {/* ... rest of the About page content ... */}
         <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-500 bg-clip-text text-transparent">
            Why Choose HackMentees?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Built by developers, for developers. Everything you need to start contributing to open source.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Brain}
            title="ML Model Hub"
            description="A curated collection of lightweight machine learning models with easy-to-use APIs and comprehensive documentation."
            delay={100}
          />
          <FeatureCard
            icon={Palette}
            title="Modern Frontend"
            description="Built with React and Vite, featuring responsive design, dark mode, and smooth animations for the best user experience."
            delay={200}
          />
          <FeatureCard
            icon={Users}
            title="Beginner Friendly"
            description="Clear contribution guidelines, templates, and mentorship to help newcomers make their first open-source contribution."
            delay={300}
          />
        </div>
      </div>

      {/* What is HackMentees */}
      <div className="bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-900/30 dark:to-black py-20">
         {/* ... rest of the About page content ... */}
         <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">What is HackMentees?</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
              More than just a repository—a learning platform designed to bridge the gap between theoretical knowledge and practical application.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {['overview', 'ml', 'frontend'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-black shadow-2xl shadow-gray-400/20 dark:shadow-white/20'
                    : 'bg-gray-200 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-white/10 border border-gray-300 dark:border-white/10'
                }`}
              >
                {tab === 'overview' ? 'Overview' : tab === 'ml' ? 'For ML' : 'For Frontend'}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-black border border-gray-200 dark:border-gray-800 rounded-2xl p-12 shadow-lg">
            {activeTab === 'overview' && (
             <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Project Overview</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    HackMentees serves as a collaborative platform where developers can contribute machine learning models and enhance frontend components. It's designed to be accessible for beginners while providing value for experienced developers.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 pt-8">
                  <div className="flex items-start gap-4">
                    <Users className="w-8 h-8 text-gray-900 dark:text-white flex-shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Community</h4>
                      <p className="text-gray-600 dark:text-gray-400">Growing developer community</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <BookOpen className="w-8 h-8 text-gray-900 dark:text-white flex-shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Learning</h4>
                      <p className="text-gray-600 dark:text-gray-400">Hands-on experience</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'ml' && (
             <div className="space-y-6">
                <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">For ML Contributors</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-gray-900 dark:text-white flex-shrink-0 mt-1" />
                    <p className="text-gray-600 dark:text-gray-400 text-lg">Add lightweight machine learning models to the repository</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-gray-900 dark:text-white flex-shrink-0 mt-1" />
                    <p className="text-gray-600 dark:text-gray-400 text-lg">Host large models externally and integrate via APIs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-gray-900 dark:text-white flex-shrink-0 mt-1" />
                    <p className="text-gray-600 dark:text-gray-400 text-lg">Document your models with comprehensive guides and examples</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-gray-900 dark:text-white flex-shrink-0 mt-1" />
                    <p className="text-gray-600 dark:text-gray-400 text-lg">Use popular frameworks: TensorFlow, PyTorch, scikit-learn</p>
                  </div>
                </div>
              </div>
            )}
             {activeTab === 'frontend' && (
             <div className="space-y-6">
                <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">For Frontend Contributors</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-gray-900 dark:text-white flex-shrink-0 mt-1" />
                    <p className="text-gray-600 dark:text-gray-400 text-lg">Enhance UI components with modern design patterns</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-gray-900 dark:text-white flex-shrink-0 mt-1" />
                    <p className="text-gray-600 dark:text-gray-400 text-lg">Add cards, sidebars, and interactive elements</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-gray-900 dark:text-white flex-shrink-0 mt-1" />
                    <p className="text-gray-600 dark:text-gray-400 text-lg">Implement dark/light mode themes and smooth animations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-gray-900 dark:text-white flex-shrink-0 mt-1" />
                    <p className="text-gray-600 dark:text-gray-400 text-lg">Integrate model APIs dynamically with React components</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="max-w-7xl mx-auto px-6 py-20">
         {/* ... rest of the About page content ... */}
          <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Technology Stack</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Powered by modern, industry-standard technologies</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <TechIcon name="React" delay={100} />
          <TechIcon name="Vite" delay={200} />
          <TechIcon name="Python" delay={300} />
          <TechIcon name="TensorFlow" delay={400} />
          <TechIcon name="scikit-learn" delay={500} />
          <TechIcon name="GitHub" delay={600} />
        </div>
      </div>

      {/* How to Contribute */}
      <div className="bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-900/30 dark:to-black py-20">
         {/* ... rest of the About page content ... */}
         <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">How to Contribute</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Get started with your first contribution in three simple steps</p>
          </div>

          <div className="space-y-8">
            <ContributionStep
              number="1"
              title="Fork & Clone the Repository"
              description="Start by forking the HackMentees repository to your GitHub account, then clone it to your local machine. Make sure to create a new branch for your contribution."
              delay={100}
            />
            <ContributionStep
              number="2"
              title="Add Your Contribution"
              description="Choose your path: add a lightweight ML model with documentation, enhance the frontend UI with new components or improvements, or integrate model APIs with the React frontend. Follow our contribution templates and guidelines."
              delay={200}
            />
            <ContributionStep
              number="3"
              title="Submit a Pull Request"
              description="Once you've tested your changes locally, push your branch and create a pull request. Our maintainers will review your contribution and provide feedback. Welcome to the community!"
              delay={300}
            />
          </div>

          <div className="mt-16 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-white/5 dark:to-white/0 border border-gray-200 dark:border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-start gap-6">
              <div className="bg-gray-200 dark:bg-white/10 p-4 rounded-xl">
                <Zap className="w-8 h-8 text-gray-900 dark:text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Need Help Getting Started?</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Check out our comprehensive contribution guide, join our Discord community, or reach out to our mentors for support.
                </p>
                <a
                href="https://github.com/CodeMentees/HackMentees/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 dark:hover:bg-gray-200 transition-all duration-300 hover:scale-105 inline-block"
                >
                Read Contribution Guide
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="max-w-7xl mx-auto px-6 py-20">
         {/* ... rest of the About page content ... */}
          <div className="bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-900 dark:to-black border border-gray-200 dark:border-gray-800 rounded-3xl p-12 text-center shadow-lg">
          <Code className="w-16 h-16 mx-auto mb-6 text-gray-900 dark:text-white" />
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Make an Impact?</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of developers contributing to open source. Your first PR starts here.
          </p>
          <a href="https://github.com/CodeMentees/HackMentees" target="_blank" rel="noopener noreferrer" className="bg-gray-900 dark:bg-white text-white dark:text-black px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-700 dark:hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-gray-400/20 dark:hover:shadow-white/20">
            Start Your Journey
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;