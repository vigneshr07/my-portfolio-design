import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Code, Palette, Database, Globe } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-6 h-6" />,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "Angular"]
    },
    {
      title: "Design",
      icon: <Palette className="w-6 h-6" />,
      skills: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator", "Prototyping"]
    },
    {
      title: "Backend",
      icon: <Database className="w-6 h-6" />,
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express", "Django"]
    },
    {
      title: "Tools & Others",
      icon: <Globe className="w-6 h-6" />,
      skills: ["Git", "Docker", "AWS", "Vercel", "Jest", "Cypress"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-6 text-center">Skills & Technologies</h2>
          <p className="mb-16 text-center text-muted-foreground max-w-2xl mx-auto">
            I work with a diverse set of technologies and tools to bring ideas to life. 
            Here are some of the key areas where I have expertise.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      {category.icon}
                    </div>
                  </div>
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
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
        </div>
      </div>
    </section>
  );
}