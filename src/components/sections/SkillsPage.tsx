import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Code, Palette, Database, Globe, Zap, Lightbulb } from "lucide-react";

export function SkillsPage() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "Angular", "Svelte"],
      level: "Expert"
    },
    {
      title: "Design & UX",
      icon: <Palette className="w-6 h-6" />,
      skills: ["Figma", "Adobe Creative Suite", "Sketch", "Prototyping", "User Research"],
      level: "Advanced"
    },
    {
      title: "Backend Development",
      icon: <Database className="w-6 h-6" />,
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"],
      level: "Proficient"
    },
    {
      title: "DevOps & Tools",
      icon: <Globe className="w-6 h-6" />,
      skills: ["AWS", "Docker", "Git", "CI/CD", "Webpack", "Vite"],
      level: "Proficient"
    },
    {
      title: "Soft Skills",
      icon: <Lightbulb className="w-6 h-6" />,
      skills: ["Team Leadership", "Project Management", "Client Communication", "Problem Solving"],
      level: "Expert"
    },
    {
      title: "Emerging Tech",
      icon: <Zap className="w-6 h-6" />,
      skills: ["AI/ML Integration", "Web3", "Progressive Web Apps", "WebAssembly"],
      level: "Learning"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "bg-green-100 text-green-800 border-green-200";
      case "Advanced": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Proficient": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Learning": return "bg-purple-100 text-purple-800 border-purple-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="mb-6">Skills & Competencies</h1>
          <p className="mb-12 text-muted-foreground max-w-2xl">
            A comprehensive overview of my technical skills, design capabilities, and professional competencies 
            developed through years of hands-on experience and continuous learning.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      {category.icon}
                    </div>
                    <Badge className={`${getLevelColor(category.level)} border`}>
                      {category.level}
                    </Badge>
                  </div>
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 bg-muted/50 rounded-lg p-8">
            <h2 className="mb-6">Certifications & Learning</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="mb-4">Recent Certifications</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• AWS Certified Developer Associate (2024)</li>
                  <li>• Google UX Design Certificate (2023)</li>
                  <li>• React Advanced Patterns (2023)</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4">Currently Learning</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Machine Learning with TensorFlow</li>
                  <li>• Advanced System Design</li>
                  <li>• Blockchain Development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}