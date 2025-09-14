import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { CalendarDays, MapPin, Building2 } from "lucide-react";

export function ExperiencePage() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      type: "Full-time",
      description: "Leading frontend development for enterprise web applications serving 100K+ users. Implemented modern React architectures and mentored junior developers.",
      achievements: [
        "Reduced application load time by 40% through performance optimization",
        "Led migration from legacy jQuery codebase to React ecosystem",
        "Mentored 5 junior developers and established coding standards"
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      duration: "2020 - 2022",
      type: "Full-time",
      description: "Built MVP and scaled the platform from 0 to 10K users. Worked across the full stack from database design to user interface implementation.",
      achievements: [
        "Architected scalable backend infrastructure handling 1M+ API calls daily",
        "Designed and implemented real-time chat system using WebSockets",
        "Contributed to $2M Series A funding through technical demonstrations"
      ],
      technologies: ["Vue.js", "Node.js", "PostgreSQL", "AWS", "Docker"]
    },
    {
      title: "UI/UX Designer & Developer",
      company: "Creative Agency Pro",
      location: "New York, NY",
      duration: "2018 - 2020",
      type: "Full-time",
      description: "Bridged design and development teams, creating pixel-perfect implementations of complex designs for high-profile clients.",
      achievements: [
        "Designed and developed websites for 20+ Fortune 500 companies",
        "Improved client satisfaction scores by 25% through better design systems",
        "Established design-to-development workflow reducing handoff time by 50%"
      ],
      technologies: ["HTML/CSS", "JavaScript", "Figma", "Adobe Creative Suite", "SCSS"]
    },
    {
      title: "Junior Web Developer",
      company: "Digital Marketing Inc",
      location: "Boston, MA",
      duration: "2017 - 2018",
      type: "Full-time",
      description: "Developed responsive websites and landing pages for marketing campaigns, focusing on conversion optimization and performance.",
      achievements: [
        "Created 50+ high-converting landing pages",
        "Implemented A/B testing framework improving conversion rates by 15%",
        "Learned modern development practices and agile methodologies"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full-time": return "bg-green-100 text-green-800 border-green-200";
      case "Contract": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Part-time": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-6">Professional Experience</h1>
          <p className="mb-12 text-muted-foreground">
            My journey through the tech industry, building products that matter and growing 
            from junior developer to senior technical leader.
          </p>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="flex items-center gap-3 mb-2">
                        <Building2 className="w-5 h-5 text-primary" />
                        {exp.title}
                      </CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                        <span className="font-medium">{exp.company}</span>
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <CalendarDays className="w-4 h-4" />
                            {exp.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Badge className={`${getTypeColor(exp.type)} border self-start`}>
                      {exp.type}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{exp.description}</p>
                  
                  <div>
                    <h4 className="mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2">
                          <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Card className="bg-primary text-primary-foreground p-8">
              <h2 className="mb-4">Ready for New Challenges</h2>
              <p className="mb-6 opacity-90">
                I'm always excited to take on new projects and collaborate with talented teams. 
                Let's build something amazing together!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}