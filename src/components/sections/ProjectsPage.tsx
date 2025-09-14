import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function ProjectsPage() {
  const projects = [
    {
      title: "E-Commerce Analytics Dashboard",
      category: "Web Application",
      description: "A comprehensive admin dashboard for e-commerce businesses featuring real-time analytics, inventory management, and customer insights. Built with modern React patterns and responsive design.",
      image: "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTcwNzAxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
      timeline: "3 months",
      status: "Completed",
      features: [
        "Real-time sales analytics with interactive charts",
        "Advanced filtering and data export capabilities",
        "Mobile-responsive design with offline support",
        "Integration with popular payment gateways"
      ],
      liveUrl: "#",
      githubUrl: "#",
      caseStudyUrl: "#"
    },
    {
      title: "Mobile Banking App Redesign",
      category: "Mobile Application",
      description: "Complete UX/UI redesign and frontend development of a mobile banking application, focusing on accessibility, security, and user experience improvements.",
      image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU3MDczNjc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React Native", "Redux", "Figma", "Biometric Auth", "REST APIs"],
      timeline: "4 months",
      status: "Live in Production",
      features: [
        "Intuitive account management and transaction history",
        "Advanced security with biometric authentication",
        "Budget tracking and financial insights",
        "Seamless money transfer and bill payment"
      ],
      liveUrl: "#",
      githubUrl: "#",
      caseStudyUrl: "#"
    },
    {
      title: "SaaS Platform for Content Creators",
      category: "Full-Stack Application",
      description: "A complete SaaS platform helping content creators manage their workflow, analytics, and monetization. Includes subscription management and payment processing.",
      image: "https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlLWNvbW1lcmNlJTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NTcxMjMwNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Next.js", "Prisma", "Stripe", "AWS", "TailwindCSS"],
      timeline: "6 months",
      status: "Beta Testing",
      features: [
        "Content scheduling and analytics dashboard",
        "Integrated payment processing and subscriptions",
        "Multi-platform social media integration",
        "AI-powered content optimization suggestions"
      ],
      liveUrl: "#",
      githubUrl: "#",
      caseStudyUrl: "#"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live in Production": return "bg-green-100 text-green-800 border-green-200";
      case "Completed": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Beta Testing": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "In Development": return "bg-purple-100 text-purple-800 border-purple-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="mb-6">Key Projects</h1>
          <p className="mb-12 text-muted-foreground max-w-2xl">
            A showcase of significant projects that demonstrate my technical expertise, 
            problem-solving abilities, and impact on business outcomes.
          </p>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-80 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle>{project.title}</CardTitle>
                        <Badge className={`${getStatusColor(project.status)} border`}>
                          {project.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {project.timeline}
                        </span>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-0 space-y-6">
                      <p className="text-muted-foreground">{project.description}</p>
                      
                      <div>
                        <h4 className="mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2">
                              <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                              <span className="text-muted-foreground text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="p-0 mt-6">
                      <div className="flex flex-wrap gap-2">
                        <Button variant="default" size="sm" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Live
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Source Code
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer">
                            Case Study
                          </a>
                        </Button>
                      </div>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="mb-4">More Projects</h2>
            <p className="mb-6 text-muted-foreground max-w-2xl mx-auto">
              These are just a few highlights from my portfolio. I've worked on many more 
              projects across different industries and technologies.
            </p>
            <Button variant="outline" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}