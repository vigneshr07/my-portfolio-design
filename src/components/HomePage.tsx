import { Card } from "./ui/card";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

export function HomePage({ setCurrentPage }: HomePageProps) {
  const contactInfo = [
    {
      text: "vigneshravi@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:vigneshravi@gmail.com"
    },
    {
      text: "phone icon", 
      icon: <Phone className="w-5 h-5" />,
      href: "tel:+1234567890"
    },
    {
      text: "Linked icon with link",
      icon: <Linkedin className="w-5 h-5" />,
      href: "#"
    },
    {
      text: "Github icon with link",
      icon: <Github className="w-5 h-5" />,
      href: "#"
    },
    {
      text: "Behance icon with link",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.665-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3c3.055 0 2.897 4-.391 4H3v-4h3.391z"/>
        </svg>
      ),
      href: "#"
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-100">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-12">Home page</h1>
          
          <h2 className="mb-12">Vignesh Ravichandran</h2>
          
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-16 max-w-2xl">
            {contactInfo.map((contact, index) => (
              <div key={index} className="flex items-center gap-3">
                <a 
                  href={contact.href}
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  {contact.icon}
                  <span>{contact.text}</span>
                </a>
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <Card 
              className="h-80 flex items-center justify-center bg-gray-300 hover:bg-gray-400 transition-colors cursor-pointer border-0"
              onClick={() => setCurrentPage('skills')}
            >
              <h3 className="text-black">Work</h3>
            </Card>
            
            <Card 
              className="h-80 flex items-center justify-center bg-gray-300 hover:bg-gray-400 transition-colors cursor-pointer border-0"
              onClick={() => setCurrentPage('hobbies')}
            >
              <h3 className="text-black">Personal</h3>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}