import React, { useState, useEffect } from 'react';
import ContributorCard from '@/components/ContributorCard';
import { Card, CardContent } from "@/components/ui/card";
import { Users, Loader2 } from 'lucide-react';

const Contributors = () => {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        setLoading(true);
        // Fetch contributor data dynamically from the GitHub API
        const response = await fetch('https://api.github.com/repos/CodeMentees/HackMentees/contributors');
        if (!response.ok) {
          throw new Error(`GitHub API responded with ${response.status}`);
        }
        const data = await response.json();
        setContributors(data);
      } catch (err) {
        setError(err.message);
        console.error("Failed to fetch contributors:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchContributors();
  }, []);

  return (
    <div className="min-h-screen py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <Users className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Our Contributors
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A huge thank you to everyone who has contributed to the HackMentees project!
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 animate-spin text-primary" />
            <p className="text-muted-foreground mt-4">Loading contributors...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <Card className="text-center py-12 bg-destructive/10 border-destructive">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold text-destructive-foreground">Failed to Load Contributors</h3>
              <p className="text-muted-foreground mt-2">{error}</p>
            </CardContent>
          </Card>
        )}

        {/* Content */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {contributors.map((contributor, index) => (
              <ContributorCard key={contributor.id} contributor={contributor} delay={index * 100}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contributors;