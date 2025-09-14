import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-16 text-center">About Me</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="mb-6">
                Passionate about creating digital experiences
              </h3>
              <p className="mb-6 text-muted-foreground">
                With over 5 years of experience in web development and design, I specialize 
                in creating modern, responsive applications that prioritize user experience 
                and performance. I enjoy solving complex problems and turning ideas into 
                reality through clean, efficient code.
              </p>
              <p className="mb-6 text-muted-foreground">
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or enjoying outdoor activities. I believe in 
                continuous learning and staying up-to-date with the latest industry trends.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="mb-2">5+</div>
                    <p className="text-muted-foreground">Years Experience</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="mb-2">50+</div>
                    <p className="text-muted-foreground">Projects Completed</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="w-72 h-72 rounded-xl bg-muted flex items-center justify-center">
                    <p className="text-muted-foreground">Your Photo Here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}