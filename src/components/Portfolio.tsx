import { ExternalLink, Github, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      title: "Salon Management System",
      description: "A comprehensive salon management platform with appointment booking, customer management, and service tracking features.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      category: "Full Stack",
      featured: true
    },
    {
      title: "Paddy Sales Management App",
      description: "Mobile application for paddy farmers to manage sales, track inventory, and connect with buyers directly.",
      technologies: ["React Native", "Firebase", "Node.js"],
      category: "Mobile App",
      featured: true
    },
    {
      title: "Life Insurance Website",
      description: "Modern and responsive website for life insurance company with policy management and customer portal.",
      technologies: ["React", "CSS3", "JavaScript", "REST API"],
      category: "Web Development",
      featured: false
    },
    {
      title: "Online Grocery System",
      description: "E-commerce platform for grocery shopping with real-time inventory, order tracking, and payment integration.",
      technologies: ["React", "Spring Boot", "MySQL", "PayPal API"],
      category: "E-commerce",
      featured: true
    },
    {
      title: "Online Pharmacy System",
      description: "Digital pharmacy platform with prescription management, medicine catalog, and delivery tracking.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      category: "Healthcare",
      featured: false
    },
    {
      title: "AI Home Inventory Platform",
      description: "Smart home inventory management system using AI for automatic item recognition and tracking.",
      technologies: ["Python", "TensorFlow", "React", "MongoDB"],
      category: "AI/ML",
      featured: true
    },
    {
      title: "Meal Planning Social Platform",
      description: "Social platform for meal planning and recipe sharing with nutritional tracking and community features.",
      technologies: ["React", "Node.js", "PostgreSQL", "Socket.io"],
      category: "Social Platform",
      featured: false
    },
    {
      title: "Note App",
      description: "Feature-rich note-taking application with cloud sync, markdown support, and collaborative editing.",
      technologies: ["React", "Firebase", "CSS3"],
      category: "Productivity",
      featured: false
    },
    {
      title: "Bloodcare App",
      description: "Healthcare application for blood donation management with donor registration and hospital integration.",
      technologies: ["React Native", "Node.js", "MySQL"],
      category: "Healthcare",
      featured: false
    }
  ];

  const categories = ["All", "Full Stack", "Mobile App", "Web Development", "E-commerce", "Healthcare", "AI/ML", "Social Platform", "Productivity"];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent projects and technical achievements
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className={index === 0 ? "hero-gradient text-white" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card group hover:scale-105 transition-all duration-300 scale-in">
              <CardContent className="p-0">
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;