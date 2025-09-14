import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            Available for new opportunities
          </Badge>
          
          <h1 className="mb-6">
            Hi, I'm <span className="text-primary">Your Name</span>
          </h1>
          <h2 className="mb-6 text-muted-foreground">
            Full Stack Developer & UI/UX Designer
          </h2>
          
          <p className="mb-8 text-muted-foreground max-w-2xl mx-auto">
            I create beautiful, functional, and user-centered digital experiences. 
            With expertise in modern web technologies and design principles, I bring 
            ideas to life through code and creativity.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-4">
            <a 
              href="#" 
              className="p-2 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="p-2 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="p-2 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}