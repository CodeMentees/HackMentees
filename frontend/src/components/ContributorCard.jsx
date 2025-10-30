import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

const ContributorCard = ({ contributor, delay }) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);
    if (!contributor) {
        return null;
    }

  const { login, avatar_url, html_url, contributions } = contributor;

  // Fallback for avatar
  const fallback = login ? login.slice(0, 2).toUpperCase() : "??";

  return (
    
    <Card className={`"flex flex-col h-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg dark:hover:shadow-white/10" ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`}
    >{/**/}
      <CardHeader className="flex flex-col items-center text-center flex-grow">
        <Avatar className="w-24 h-24 mb-4 border-4 border-transparent group-hover:border-primary transition-colors">
          <AvatarImage src={avatar_url} alt={`${login}'s avatar`} />
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
        <CardTitle className="text-xl font-bold">{login}</CardTitle>
        <Badge variant="secondary" className="mb-4">
          {contributions} {contributions > 1 ? 'Contributions' : 'Contribution'}
        </Badge>
      </CardHeader>
      <CardFooter>
        <Button asChild variant="outline" className="w-full group">
          <a href={html_url} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            View Profile
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ContributorCard;