import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Camera, Music, BookOpen, Plane, Gamepad2, Mountain, Palette, Code2 } from "lucide-react";

export function HobbiesPage() {
  const hobbies = [
    {
      title: "Photography",
      icon: <Camera className="w-8 h-8" />,
      description: "Capturing moments through street photography and landscapes. I love exploring urban environments and natural scenes with my camera.",
      details: [
        "Street photography in urban environments",
        "Landscape and nature photography",
        "Film photography with vintage cameras",
        "Photo editing and post-processing"
      ],
      timeInvested: "5+ years"
    },
    {
      title: "Music Production",
      icon: <Music className="w-8 h-8" />,
      description: "Creating electronic music and beats in my home studio. I enjoy experimenting with different genres and sound design.",
      details: [
        "Electronic music production",
        "Beat making and sampling",
        "Sound design and synthesis",
        "Live performance and DJing"
      ],
      timeInvested: "3+ years"
    },
    {
      title: "Reading & Learning",
      icon: <BookOpen className="w-8 h-8" />,
      description: "Continuous learning through books on technology, psychology, and personal development. Always curious about new ideas.",
      details: [
        "Tech and programming books",
        "Psychology and human behavior",
        "Biographies of inspiring people",
        "Science fiction and fantasy novels"
      ],
      timeInvested: "Lifelong"
    },
    {
      title: "Travel & Exploration",
      icon: <Plane className="w-8 h-8" />,
      description: "Exploring new cultures and places around the world. I believe travel broadens perspectives and inspires creativity.",
      details: [
        "Cultural immersion experiences",
        "Solo backpacking adventures",
        "Food exploration and cooking",
        "Learning local languages"
      ],
      timeInvested: "10+ years"
    },
    {
      title: "Gaming & Esports",
      icon: <Gamepad2 className="w-8 h-8" />,
      description: "Competitive gaming and game development as a hobby. I appreciate both the technical and artistic aspects of games.",
      details: [
        "Strategy and puzzle games",
        "Indie game development",
        "Game design and mechanics",
        "Community building and streaming"
      ],
      timeInvested: "15+ years"
    },
    {
      title: "Hiking & Outdoors",
      icon: <Mountain className="w-8 h-8" />,
      description: "Regular hiking and outdoor activities to stay active and connect with nature. It's my way to disconnect and recharge.",
      details: [
        "Weekend hiking trips",
        "Rock climbing and bouldering",
        "Camping and wilderness survival",
        "Outdoor photography"
      ],
      timeInvested: "7+ years"
    },
    {
      title: "Digital Art",
      icon: <Palette className="w-8 h-8" />,
      description: "Creating digital illustrations and experimenting with AI art generation. I enjoy combining technology with artistic expression.",
      details: [
        "Digital illustration and painting",
        "AI art generation and curation",
        "3D modeling and rendering",
        "Generative art programming"
      ],
      timeInvested: "4+ years"
    },
    {
      title: "Open Source",
      icon: <Code2 className="w-8 h-8" />,
      description: "Contributing to open source projects and building tools for the developer community. Giving back to the tech ecosystem.",
      details: [
        "Contributing to popular libraries",
        "Creating developer tools",
        "Writing technical documentation",
        "Mentoring new contributors"
      ],
      timeInvested: "6+ years"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="mb-6">Hobbies & Interests</h1>
          <p className="mb-12 text-muted-foreground max-w-2xl">
            Beyond coding and design, I'm passionate about various activities that keep me inspired, 
            creative, and balanced. These hobbies often influence my professional work in unexpected ways.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {hobbies.map((hobby, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      {hobby.icon}
                    </div>
                    <div>
                      <CardTitle>{hobby.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{hobby.timeInvested}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{hobby.description}</p>
                  
                  <div>
                    <h4 className="mb-3">What I Enjoy:</h4>
                    <ul className="space-y-2">
                      {hobby.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2">
                          <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                          <span className="text-muted-foreground text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-0">
              <CardContent className="p-8 text-center">
                <h2 className="mb-4">Life Philosophy</h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  I believe that diverse interests and experiences make us more creative problem solvers. 
                  Each hobby teaches me something different - photography sharpens my eye for design, 
                  music teaches me about rhythm and timing in user interfaces, and travel exposes me to 
                  different ways of thinking that influence how I approach technical challenges.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <h3 className="mb-2">Current Focus</h3>
              <p className="text-muted-foreground">Learning film photography and developing my own photos</p>
            </Card>
            <Card className="text-center p-6">
              <h3 className="mb-2">Next Adventure</h3>
              <p className="text-muted-foreground">Planning a solo backpacking trip through Southeast Asia</p>
            </Card>
            <Card className="text-center p-6">
              <h3 className="mb-2">Latest Project</h3>
              <p className="text-muted-foreground">Building a web app to track and share hiking routes</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}