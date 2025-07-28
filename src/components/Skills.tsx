import { Code, Database, Palette, Users, Lightbulb, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 88 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 82 },
    { name: "Spring Boot", level: 75 },
    { name: "MySQL", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "Java", level: 88 },
    { name: "Python", level: 85 },
    { name: "C/C++", level: 78 },
    { name: "Figma", level: 90 },
    { name: "Power BI", level: 75 },
    { name: "Kotlin", level: 70 }
  ];

  const softSkills = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Effective teamwork and cross-functional collaboration"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Analytical thinking and creative solution development"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Leadership",
      description: "Project management and team coordination"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Communication",
      description: "Clear verbal and written communication skills"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time Management",
      description: "Efficient task prioritization and deadline management"
    }
  ];

  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "Kotlin"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "Spring Boot", "MySQL", "MongoDB", "PHP"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design & Tools",
      skills: ["Framer", "Figma", "Power BI", "Canva", "WebFlow"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and soft skills
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card text-center scale-in">
              <CardContent className="p-8">
                <div className="text-primary mb-4 flex justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="fade-in">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <Code className="w-8 h-8 text-primary" />
              Technical Skills
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {technicalSkills.map((skill, index) => (
                <Card key={index} className={`glass-card hover-lift stagger-${(index % 6) + 1} group hover:scale-110 transition-all duration-300`}>
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                      {/* Language Icons */}
                      {skill.name === "HTML" && <div className="text-2xl">🌐</div>}
                      {skill.name === "CSS" && <div className="text-2xl">🎨</div>}
                      {skill.name === "JavaScript" && <div className="text-2xl">⚡</div>}
                      {skill.name === "React" && <div className="text-2xl">⚛️</div>}
                      {skill.name === "Node.js" && <div className="text-2xl">🟢</div>}
                      {skill.name === "Express.js" && <div className="text-2xl">🚀</div>}
                      {skill.name === "Spring Boot" && <div className="text-2xl">🍃</div>}
                      {skill.name === "MySQL" && <div className="text-2xl">🐬</div>}
                      {skill.name === "MongoDB" && <div className="text-2xl">🍃</div>}
                      {skill.name === "Java" && <div className="text-2xl">☕</div>}
                      {skill.name === "Python" && <div className="text-2xl">🐍</div>}
                      {skill.name === "C/C++" && <div className="text-2xl">⚙️</div>}
                      {skill.name === "Figma" && <div className="text-2xl">🎯</div>}
                      {skill.name === "Power BI" && <div className="text-2xl">📊</div>}
                      {skill.name === "Kotlin" && <div className="text-2xl">📱</div>}
                    </div>
                    <h4 className="font-medium text-xs group-hover:text-primary transition-colors">
                      {skill.name}
                    </h4>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* SVG Gradient Definition */}
            <svg className="w-0 h-0 absolute">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--gradient-start))" />
                  <stop offset="100%" stopColor="hsl(var(--gradient-end))" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Soft Skills */}
          <div className="slide-up">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <Users className="w-8 h-8 text-primary" />
              Soft Skills
            </h3>
            
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <Card key={index} className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-primary flex-shrink-0">
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{skill.title}</h4>
                        <p className="text-muted-foreground text-sm">{skill.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;