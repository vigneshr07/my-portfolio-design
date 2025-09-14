import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu, Search, Facebook, Instagram, Linkedin, Twitter, Video, Youtube } from "lucide-react";

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const menuItems = {
    professional: {
      title: "PROFESSIONAL PROFILE",
      items: [
        { label: "Skills & Competencies", id: "skills" },
        { label: "Experience", id: "experience" },
        { label: "Key Projects", id: "projects" }
      ]
    },
    personal: {
      title: "PERSONAL LIFE", 
      items: [
        { label: "Hobbies", id: "hobbies" },
        { label: "Photo Collage", id: "photos" },
        { label: "Personal thoughts", id: "thoughts" }
      ]
    },
    contact: {
      title: "GET IN TOUCH",
      items: [
        { label: "Contact", id: "contact" }
      ]
    }
  };

  const socialIcons = [
    { icon: <Facebook className="w-5 h-5" />, href: "#" },
    { icon: <Instagram className="w-5 h-5" />, href: "#" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#" },
    { icon: <Twitter className="w-5 h-5" />, href: "#" },
    { icon: <Video className="w-5 h-5" />, href: "#" },
    { icon: <Youtube className="w-5 h-5" />, href: "#" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <button 
            onClick={() => setCurrentPage('home')}
            className="hover:text-primary transition-colors"
          >
            Vignesh Ravichandran
          </button>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="w-5 h-5" />
            </Button>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[400px] bg-slate-900 text-white border-slate-800">
                <div className="py-8">
                  {Object.entries(menuItems).map(([key, section]) => (
                    <div key={key} className="mb-12">
                      <h3 className="text-sm text-gray-400 mb-6 tracking-wider">
                        {section.title}
                      </h3>
                      <div className="space-y-4">
                        {section.items.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => {
                              setCurrentPage(item.id);
                            }}
                            className="block w-full text-left text-lg hover:text-gray-300 transition-colors"
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <div className="mt-12">
                    <div className="flex gap-4 justify-center">
                      {socialIcons.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}