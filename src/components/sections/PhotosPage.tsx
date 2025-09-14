import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Calendar, MapPin, Camera } from "lucide-react";
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function PhotosPage() {
  const photoCategories = [
    {
      title: "Travel Adventures",
      images: [
        {
          src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmUlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzU3MTM5MDEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          location: "Banff National Park",
          date: "Summer 2024"
        },
        {
          src: "https://images.unsplash.com/photo-1723173536059-eed65cafefee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90byUyMGNvbGxhZ2UlMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzU3MTc0MjkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          location: "Tokyo Streets",
          date: "Spring 2024"
        },
        {
          src: "https://images.unsplash.com/photo-1626256226202-7989ae22548e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMGNhbWVyYSUyMHZpbnRhZ2V8ZW58MXx8fHwxNzU3MDg5OTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          location: "Vintage Collection",
          date: "Ongoing"
        }
      ]
    }
  ];

  const memoryHighlights = [
    {
      title: "First Solo Trip",
      description: "Backpacking through Europe for 3 months, discovering my love for street photography",
      year: "2019",
      category: "Travel"
    },
    {
      title: "Photo Exhibition",
      description: "Local gallery featured my urban landscape series, sold 5 prints",
      year: "2023",
      category: "Achievement"
    },
    {
      title: "Film Photography",
      description: "Started shooting with vintage film cameras, developing photos in my home darkroom",
      year: "2024",
      category: "Hobby"
    },
    {
      title: "Photography Workshop",
      description: "Taught a weekend workshop on street photography techniques",
      year: "2024",
      category: "Teaching"
    }
  ];

  const currentProjects = [
    {
      title: "365 Photo Challenge",
      description: "Taking one meaningful photo every day for a year",
      progress: "Day 234/365",
      status: "In Progress"
    },
    {
      title: "City Portraits Series",
      description: "Documenting the character of different neighborhoods",
      progress: "12 areas covered",
      status: "Ongoing"
    },
    {
      title: "Film Photography Book",
      description: "Curating my best film shots into a coffee table book",
      progress: "Layout in progress",
      status: "Planning"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="mb-6">Photo Collage</h1>
          <p className="mb-12 text-muted-foreground max-w-2xl">
            A visual journey through my experiences, travels, and creative moments. 
            Photography helps me capture and share the beauty I see in everyday life.
          </p>
          
          {/* Photo Gallery Grid */}
          <div className="mb-16">
            <h2 className="mb-8">Recent Adventures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photoCategories[0].images.map((image, index) => (
                <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback 
                      src={image.src} 
                      alt={`Photo from ${image.location}`}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="w-4 h-4" />
                        <span>{image.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{image.date}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Memory Highlights */}
          <div className="mb-16">
            <h2 className="mb-8">Memory Highlights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {memoryHighlights.map((memory, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="mb-2">{memory.title}</h3>
                      <p className="text-muted-foreground text-sm">{memory.description}</p>
                    </div>
                    <div className="text-right flex-shrink-0 ml-4">
                      <Badge variant="outline">{memory.category}</Badge>
                      <p className="text-sm text-muted-foreground mt-2">{memory.year}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Current Projects */}
          <div className="mb-16">
            <h2 className="mb-8">Current Photography Projects</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {currentProjects.map((project, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Camera className="w-5 h-5 text-primary" />
                    <Badge variant={project.status === 'In Progress' ? 'default' : 'secondary'}>
                      {project.status}
                    </Badge>
                  </div>
                  <h3 className="mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="text-sm">
                    <span className="text-primary">{project.progress}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Photography Philosophy */}
          <div className="text-center">
            <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-0">
              <h2 className="mb-6">Photography Philosophy</h2>
              <blockquote className="text-muted-foreground max-w-3xl mx-auto mb-6 italic">
                "Photography is not just about capturing what you see, but about sharing how you see it. 
                Every photo tells a story, evokes an emotion, or preserves a moment that would otherwise be lost to time."
              </blockquote>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div>
                  <h4 className="mb-2">Favorite Genre</h4>
                  <p className="text-muted-foreground">Street Photography</p>
                </div>
                <div>
                  <h4 className="mb-2">Primary Camera</h4>
                  <p className="text-muted-foreground">Film & Digital Hybrid</p>
                </div>
                <div>
                  <h4 className="mb-2">Dream Destination</h4>
                  <p className="text-muted-foreground">Northern Lights in Iceland</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}