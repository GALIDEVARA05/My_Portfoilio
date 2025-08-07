import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import fakeNewsImg from "@/assets/Fake News Detection Photo.png";


const Projects = () => {
  const projects = [
    {
      title: "Fake News Detection System",
      description: "Fake News Detection system built with React and Flask, featuring real-time content classification, transformer-based NLP model, and a clean, responsive UI for detecting misinformation with high accuracy.",
      technologies: ["React.js", "Flask", "Python", "Tailwind CSS", "Bert-Model", "Vite"],
      image: fakeNewsImg,
      github: "https://github.com",
      demo: "https://demo-ecommerce.com"
    },
    {
      title: "Real-Time Chat Application", 
      description: "Interactive messaging platform with real-time communication, file sharing, and group chat functionality using React and Node.js with Socket.io.",
      technologies: ["React.js", "Node.js", "Socket.io", "MongoDB", "Express.js", "JWT Auth"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=600&q=80",
      github: "https://github.com",
      demo: "https://demo-chat.com"
    },
    {
      title: "Real Time College Portal",
      description: "Comprehensive Student data visualization dashboard built with React and Node.js, featuring interactive designs, real-time metrics, and customizable reporting.",
      technologies: ["React.js", "Node.js", "Chart.js", "PostgreSQL", "Express.js", "REST API"],
      image: "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20250118065033.jpg",
      github: "https://github.com",
      demo: "https://demo-analytics.com"
    },
    // {
    //   title: "Task Management System",
    //   description: "Collaborative project management tool with drag-and-drop functionality, team collaboration features, and progress tracking built with modern technologies.",
    //   technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Material-UI", "WebSocket"],
    //   image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    //   github: "https://github.com",
    //   demo: "https://demo-taskmanager.com"
    // },
    // {
    //   title: "Social Media Platform",
    //   description: "Modern social networking application with user authentication, post sharing, real-time notifications, and responsive design using React and Node.js.",
    //   technologies: ["React.js", "Node.js", "PostgreSQL", "Express.js", "Cloudinary", "JWT"],
    //   image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=600&q=80",
    //   github: "https://github.com",
    //   demo: "https://demo-social.com"
    // },
    // {
    //   title: "Weather Forecast App",
    //   description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics built with React and external APIs.",
    //   technologies: ["React.js", "Node.js", "Weather API", "MapBox", "Express.js", "Chart.js"],
    //   image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=600&q=80",
    //   github: "https://github.com",
    //   demo: "https://demo-weather.com"
    // }
  ];

  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of recent projects that demonstrate my skills and passion for creating innovative solutions
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden hover:shadow-hover transition-all duration-300 border-primary/10 hover:border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-primary/20 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View more button */}
          {/* <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
            >
              {showAll ? "Show Less" : "View All Projects"}
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;