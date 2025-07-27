import { Code, Palette, Zap, Award, Users, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices"
    },
    {
      icon: Palette,
      title: "UI/UX Focus",
      description: "Creating beautiful, intuitive interfaces that deliver exceptional user experiences"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and seamless functionality"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          </div>

          {/* Main content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Text content */}
            <div className="animate-slide-in">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Creating Digital Experiences That Matter
              </h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  I'm a passionate full-stack developer with expertise in React, Node.js, and modern web technologies. 
                  With a strong foundation in both frontend and backend development, I create scalable applications 
                  that deliver exceptional user experiences.
                </p>
                <p>
                  My approach combines technical excellence with creative problem-solving. I believe that great 
                  software isn't just about writing code—it's about understanding user needs, architecting 
                  robust solutions, and delivering value that makes a difference.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>5+ Years Professional Experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>50+ Successful Projects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Rocket className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Performance-Driven Solutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Code className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Clean, Maintainable Code</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 animate-fade-in">
              {[
                { number: "50+", label: "Projects Completed" },
                { number: "5+", label: "Years Experience" },
                { number: "100%", label: "Client Satisfaction" },
                { number: "24/7", label: "Support Available" }
              ].map((stat, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-hover transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="text-center p-6 hover:shadow-hover transition-all duration-300 group border-primary/10 hover:border-primary/20"
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <highlight.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    {highlight.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;