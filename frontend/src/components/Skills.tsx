import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "Tailwind CSS", "JavaScript ES6+", "HTML5/CSS3", "Responsive Design"],
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400"
    },
    {
      title: "Backend Development", 
      skills: ["Node.js", "Express.js", "RESTful APIs", "PostgreSQL", "MongoDB", "Authentication"],
      color: "bg-green-500/10 text-green-600 dark:text-green-400"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git/GitHub","Vercel", "Firebase", "Hugging Face","Render"],
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A diverse toolkit that enables me to build full-stack applications from concept to deployment
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="animate-fade-in hover:shadow-hover transition-all duration-300 border-primary/10 hover:border-primary/20 hover:scale-[1.025] transform"

                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl text-center text-foreground">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className={`text-sm px-3 py-1.5 font-medium transition-all duration-300 hover:scale-105 ${category.color} border-0`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;