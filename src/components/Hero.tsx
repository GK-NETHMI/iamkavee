import { ChevronDown, Download, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-muted-foreground">Hello, I'm</span>
              <br />
              <span className="text-primary glow-text">Gallage Kaveesha</span>
              <br />
              <span className="text-foreground">Nethmi</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
              Full Stack Developer | UI/UX Designer
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              I am a detail-oriented IT undergraduate specializing in Full Stack Development with proven expertise in designing and implementing user-centered solutions. Passionate about solving complex problems and delivering reliable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="hero-gradient text-white font-semibold">
                <Mail className="w-5 h-5 mr-2" />
                Let's Talk
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              <a
                href="https://github.com/GK-NETHMI"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/kaveesha-nethmi-131519215"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end scale-in">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden profile-glow">
                <img
                  src={profilePhoto}
                  alt="Gallage Kaveesha Nethmi"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 hero-gradient rounded-full opacity-70 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 hero-gradient rounded-full opacity-50 blur-lg"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="animate-bounce p-2 rounded-full glass-card hover:text-primary transition-colors"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full opacity-60"></div>
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-primary rounded-full opacity-80"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-primary rounded-full opacity-70"></div>
      </div>
    </section>
  );
};

export default Hero;