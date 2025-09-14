import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Calendar, Heart, BookOpen, Lightbulb, Target, Coffee } from "lucide-react";

export function ThoughtsPage() {
  const thoughts = [
    {
      title: "On Creative Problem Solving",
      date: "September 2024",
      category: "Career",
      icon: <Lightbulb className="w-5 h-5" />,
      content: "I've learned that the best solutions often come when I step away from the screen. Whether I'm taking photos, hiking, or just making coffee, these moments of 'non-productive' time are actually when my brain processes complex problems. There's something magical about letting your subconscious work while you're engaged in something completely different.",
      tags: ["creativity", "problem-solving", "work-life-balance"]
    },
    {
      title: "The Beauty of Imperfection",
      date: "August 2024", 
      category: "Life",
      icon: <Heart className="w-5 h-5" />,
      content: "Film photography taught me to embrace imperfection. Unlike digital where you can take hundreds of shots, film forces you to be intentional. Sometimes the 'mistakes' - the light leaks, the slight blurs, the unexpected compositions - create the most compelling images. I try to apply this mindset to my code and designs too.",
      tags: ["photography", "philosophy", "growth"]
    },
    {
      title: "Continuous Learning as a Lifestyle",
      date: "July 2024",
      category: "Growth",
      icon: <BookOpen className="w-5 h-5" />,
      content: "Every technology I learn, every book I read, every conversation I have adds another tool to my toolkit. But more importantly, it changes how I think about problems. Learning isn't just about accumulating knowledge - it's about developing new perspectives and challenging your assumptions.",
      tags: ["learning", "technology", "personal-development"]
    },
    {
      title: "Travel as a Developer",
      date: "June 2024",
      category: "Travel",
      icon: <Target className="w-5 h-5" />,
      content: "Working remotely while traveling has shown me how different cultures approach problems. In Japan, I noticed their attention to detail and minimalism. In Brazil, I saw how they prioritize community and collaboration. These cultural insights have made me a better designer and team member.",
      tags: ["travel", "culture", "remote-work"]
    },
    {
      title: "The Art of Saying No",
      date: "May 2024",
      category: "Career",
      icon: <Coffee className="w-5 h-5" />,
      content: "Learning to say no has been one of the most valuable skills I've developed. Not every project, opportunity, or feature request deserves a yes. By being selective, I can put my best energy into work that truly matters and aligns with my values and goals.",
      tags: ["boundaries", "focus", "career-growth"]
    }
  ];

  const currentMindset = {
    focus: "Building products that matter",
    learning: "System design and architecture patterns",
    reading: "Atomic Habits by James Clear",
    motto: "Progress over perfection, always"
  };

  const coreValues = [
    {
      value: "Authenticity",
      description: "Being genuine in all interactions, admitting when I don't know something"
    },
    {
      value: "Continuous Growth",
      description: "Always learning, always improving, never settling for 'good enough'"
    },
    {
      value: "Impact Over Output",
      description: "Focusing on meaningful results rather than just being busy"
    },
    {
      value: "Empathy",
      description: "Understanding users, teammates, and stakeholders deeply"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Career": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Life": return "bg-green-100 text-green-800 border-green-200";
      case "Growth": return "bg-purple-100 text-purple-800 border-purple-200";
      case "Travel": return "bg-orange-100 text-orange-800 border-orange-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-6">Personal Thoughts</h1>
          <p className="mb-12 text-muted-foreground">
            Random musings on life, work, creativity, and everything in between. These thoughts 
            capture my evolving perspective on what matters most in both personal and professional growth.
          </p>
          
          {/* Current Mindset */}
          <div className="mb-16">
            <h2 className="mb-6">Current Mindset</h2>
            <Card className="p-8 bg-primary/5 border-primary/20">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="mb-2">Focus</h4>
                  <p className="text-muted-foreground mb-4">{currentMindset.focus}</p>
                  <h4 className="mb-2">Currently Learning</h4>
                  <p className="text-muted-foreground">{currentMindset.learning}</p>
                </div>
                <div>
                  <h4 className="mb-2">Reading</h4>
                  <p className="text-muted-foreground mb-4">{currentMindset.reading}</p>
                  <h4 className="mb-2">Personal Motto</h4>
                  <p className="text-primary font-medium italic">"{currentMindset.motto}"</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Recent Thoughts */}
          <div className="mb-16">
            <h2 className="mb-8">Recent Thoughts</h2>
            <div className="space-y-6">
              {thoughts.map((thought, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          {thought.icon}
                        </div>
                        <div>
                          <CardTitle>{thought.title}</CardTitle>
                          <div className="flex items-center gap-2 mt-1">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{thought.date}</span>
                          </div>
                        </div>
                      </div>
                      <Badge className={`${getCategoryColor(thought.category)} border`}>
                        {thought.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {thought.content}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {thought.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h2 className="mb-8">Core Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {coreValues.map((item, index) => (
                <Card key={index} className="p-6">
                  <h3 className="mb-3">{item.value}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Life Philosophy */}
          <div className="text-center">
            <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-0">
              <h2 className="mb-6">Life Philosophy</h2>
              <blockquote className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed italic">
                "Life is a continuous creative project. Every decision, every interaction, every line of code 
                is a brushstroke on the canvas of who I'm becoming. The goal isn't to create a perfect 
                masterpiece, but to keep painting with intention, curiosity, and kindness."
              </blockquote>
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Last updated: September 2024 • Always evolving
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}