import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/MyPIC.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-accent/30 relative overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_0%,transparent_50%)] opacity-5"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Photo */}
          <div className="w-72 h-72 mx-auto mb-8 relative">
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-full h-full rounded-full object-cover object-[35%_0%] border-4 border-primary/20 shadow-lg"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent"></div>
          </div>


          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 tracking-tight">
            Venkata Lokesh Galidevara
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Full-Stack Developer crafting exceptional digital experiences with modern technologies
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-hover transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
            >
              View My Work
            </Button>
          </div>

          {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          {[
            {
              icon: Github,
              href: "https://github.com/GALIDEVARA05",
              label: "GitHub"
            },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/venkata-lokesh-galidevara-567a15292/",
              label: "LinkedIn"
            },
            {
              icon: Mail,
              href: "mailto:galidevaravenkatalokesh05@gmail.com",
              label: "Email"
            }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="p-3 rounded-full border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group"
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>


          {/* Scroll indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce hover:animate-none transition-all duration-300 group"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;