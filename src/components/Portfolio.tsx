import { Github, Star, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

// Import project images
import salonManagement from "@/assets/salon-management.jpg";
import paddySales from "@/assets/paddy-sales.jpg";
import lifeInsurance from "@/assets/life-insurance.jpg";
import onlineGrocery from "@/assets/online-grocery.jpg";
import noteApp from "@/assets/note-app.jpg";
import bloodcareApp from "@/assets/bloodcare-app.jpg";

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  
  const projects = [
    {
      title: "Salon Management System",
      description: "Designed and developed a salon management platform featuring online appointment booking, service/pricing management, and an admin dashboard. Integrated secure payment gateway and email notification system.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      category: "Full Stack",
      featured: true,
      image: salonManagement
    },
    {
      title: "Meal Planning Social Platform",
      description: "Built a web-based social platform to support healthy lifestyles through meal planning, progress tracking, and community interaction. Custom meal plans, post sharing, achievements, notifications, messaging, and user interaction tools (likes, comments, follow system).",
      technologies: ["React", "Spring Boot", "PostgreSQL", "Socket.io"],
      category: "Social Platform",
      featured: true,
      image: "/lovable-uploads/f82584b3-bb62-4385-8a53-0328198c9a0d.png"
    },
    {
      title: "AI Home Inventory Platform",
      description: "A smart home inventory tracking website that helps users manage their belongings, analyze budgets with AI, and get personalized purchase suggestions. AI-powered inventory management, budget tracking, smart shopping recommendations, online grocery shopping, and home repair services.",
      technologies: ["React", "Spring Boot", "Python", "TensorFlow"],
      category: "AI/ML",
      featured: true,
      image: "/lovable-uploads/67a6e798-da12-4e43-b373-d4f8b088862e.png"
    },
    {
      title: "Paddy Sales Management App",
      description: "Created a streamlined web application for paddy sales with inventory management, role-based user access, and real-time tracking. Implemented customer reviews and ratings system.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      category: "Full Stack",
      featured: true,
      image: paddySales
    },
    {
      title: "Life Insurance Website",
      description: "Developed a dynamic website for life insurance services with policy search, online applications, and customer portals. Integrated admin panels for agents to track applications.",
      technologies: ["PHP", "Java", "JavaScript", "MySQL"],
      category: "Web Development",
      featured: false,
      image: lifeInsurance
    },
    {
      title: "Online Grocery System",
      description: "Built an e-commerce platform for groceries with search filters, product catalogs, and a shopping cart system. Designed admin inventory management tools.",
      technologies: ["HTML", "PHP", "CSS", "MySQL"],
      category: "E-commerce",
      featured: true,
      image: onlineGrocery
    },
    {
      title: "Online Pharmacy System",
      description: "Web-based platform for purchasing medications and managing pharmacy inventory with prescription management and delivery tracking.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      category: "Healthcare",
      featured: false,
      image: "/lovable-uploads/41a80b36-d550-425f-9c72-2c831fa4b0f3.png"
    },
    {
      title: "Event Manager Platform",
      description: "An intuitive event management platform designed to help users plan, organize, and manage events effortlessly. From guest registration to real-time updates, our site simplifies every step of the event journey.",
      technologies: ["Figma", "UI/UX Design"],
      category: "Design",
      featured: false,
      image: "/lovable-uploads/b1aa689b-a52b-4920-a3d5-2a78b00a5b0d.png",
      isDesign: true
    },
    {
      title: "Bloodcare App",
      description: "Developing a mobile app to connect blood banks, donors, and users for effective blood donation coordination. Location-based blood requests and donor matching system.",
      technologies: ["Kotlin", "SQLite"],
      category: "Mobile App",
      featured: false,
      image: bloodcareApp
    },
    {
      title: "Note App",
      description: "Task manager app with features for creating, editing, and storing tasks persistently with intuitive mobile interface.",
      technologies: ["Kotlin", "SQLite"],
      category: "Mobile App",
      featured: false,
      image: noteApp
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 5);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent projects and technical achievements
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <Card key={index} className="glass-card group hover:scale-105 transition-all duration-300 scale-in">
              <CardContent className="p-0">
                {/* Project Image */}
                  <div className="h-48 relative overflow-hidden rounded-t-lg bg-gradient-to-br from-background to-muted">
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="max-w-[80%] max-h-[80%] object-contain rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="bg-white/20 backdrop-blur-sm"
                      onClick={() => window.open(
                        project.isDesign 
                          ? 'https://www.figma.com/design/fj5kMrgOOOo8zF4LYXCc0J/Event-Management-Web?node-id=0-1&t=UQeP8UH2RRETykmC-1'
                          : 'https://github.com/GK-NETHMI', 
                        '_blank'
                      )}
                    >
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
                  
                  <p className="text-muted-foreground text-sm mb-4">
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

        {/* View More Button */}
        {!showAll && projects.length > 5 && (
          <div className="text-center">
            <Button 
              onClick={() => setShowAll(true)}
              variant="outline"
              className="hover-scale animate-fade-in"
            >
              View More Projects
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Portfolio;