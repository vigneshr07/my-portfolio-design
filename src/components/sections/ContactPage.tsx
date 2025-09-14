import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Instagram, Youtube, Video } from "lucide-react";

export function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "vigneshravi@gmail.com",
      href: "mailto:vigneshravi@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone", 
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, href: "#", label: "GitHub" },
    { icon: <Linkedin className="w-6 h-6" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="w-6 h-6" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="w-6 h-6" />, href: "#", label: "Instagram" },
    { icon: <Youtube className="w-6 h-6" />, href: "#", label: "YouTube" },
    { icon: <Video className="w-6 h-6" />, href: "#", label: "TikTok" }
  ];

  const workingHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM PST" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM PST" },
    { day: "Sunday", hours: "Unavailable" }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="mb-6">Get In Touch</h1>
          <p className="mb-12 text-muted-foreground max-w-2xl">
            I'm always excited to discuss new opportunities, collaborations, or just have a 
            conversation about technology, design, or life. Feel free to reach out through any 
            of the channels below.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors group"
                    >
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">{info.label}</p>
                        <p>{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Social Links */}
              <div>
                <h3 className="mb-4">Connect With Me</h3>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="flex flex-col items-center justify-center p-4 rounded-lg border hover:bg-primary hover:text-primary-foreground transition-colors group"
                      aria-label={link.label}
                    >
                      <div className="mb-2 transition-transform group-hover:scale-110">
                        {link.icon}
                      </div>
                      <span className="text-sm">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
              <div>
                <h3 className="mb-4">Availability</h3>
                <Card>
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      {workingHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-muted-foreground">{schedule.day}</span>
                          <span className={schedule.hours === "Unavailable" ? "text-muted-foreground" : ""}>
                            {schedule.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        Response time: Usually within 24 hours
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send Me a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Have a project in mind? Let's discuss how we can work together.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input 
                          id="firstName" 
                          placeholder="John" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Doe" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input 
                        id="company" 
                        placeholder="Your Company"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input 
                        id="subject" 
                        placeholder="Project inquiry / Collaboration / General question" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell me about your project, timeline, budget, or anything else you'd like to discuss..." 
                        rows={6}
                        required 
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        By sending this message, you agree that I may contact you regarding your inquiry.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <h3 className="mb-3">Quick Response</h3>
              <p className="text-muted-foreground">I typically respond to inquiries within 24 hours</p>
            </Card>
            <Card className="text-center p-6">
              <h3 className="mb-3">Project Discussion</h3>
              <p className="text-muted-foreground">Free 30-minute consultation for potential projects</p>
            </Card>
            <Card className="text-center p-6">
              <h3 className="mb-3">Open to Collaborate</h3>
              <p className="text-muted-foreground">Always interested in exciting new challenges</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}