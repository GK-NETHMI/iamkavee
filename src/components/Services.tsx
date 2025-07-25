import { Palette, Code, Monitor, Server, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces with a focus on user experience and modern design principles.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Web Design",
      description: "Designing responsive and modern websites that look great on all devices and provide excellent user experience.",
      features: ["Responsive Design", "Modern Layouts", "Brand Identity", "Performance Optimization"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Building interactive and responsive web applications using modern technologies like React, HTML5, CSS3, and JavaScript.",
      features: ["React Development", "Responsive Design", "Performance Optimization", "Modern JavaScript"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      description: "Developing robust server-side applications and APIs using Node.js, Express.js, and database management systems.",
      features: ["API Development", "Database Design", "Server Architecture", "Security Implementation"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 slide-up stagger-1">
            My <span className="text-primary glow-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto slide-up stagger-2">
            I offer comprehensive digital solutions to help bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`glass-card group hover-lift transition-all duration-300 scale-in stagger-${index + 1}`}>
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-4`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="ghost" 
                  className="group/btn text-primary hover:text-primary hover:bg-primary/10 p-0"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6">
              Let's collaborate to create something amazing together. I'm here to help bring your vision to reality.
            </p>
            <Button size="lg" className="hero-gradient text-white font-semibold">
              Let's Discuss Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;