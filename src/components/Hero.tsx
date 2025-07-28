import { ChevronDown, Download, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";
const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left slide-in-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-muted-foreground fade-in stagger-1">Hello, I'm</span>
              <br />
              <span className="text-primary glow-text fade-in stagger-2 hover-glow">Gallage Kaveesha</span>
              <br />
              <span className="text-foreground fade-in stagger-3">Nethmi</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium fade-in stagger-4">
              Full Stack Developer | UI/UX Designer
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed fade-in stagger-5">Creative web developer with a passion for clean design and smooth user experiences. I build responsive, functional websites from frontend to backend with care and curiosity.</p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 fade-in stagger-6">
              <Button size="lg" className="hero-gradient text-white font-semibold shimmer hover-lift" onClick={() => window.open('https://wa.me/94701415365', '_blank')}>
                <Mail className="w-5 h-5 mr-2" />
                Let's Talk
              </Button>
              <Button variant="outline" size="lg" className="group hover-lift" onClick={() => {
                const link = document.createElement('a');
                link.href = '/cv.pdf';
                link.download = 'G_K_NETHMI_CV.pdf';
                link.click();
              }}>
                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 slide-up stagger-6">
              <a href="https://github.com/GK-NETHMI" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-card hover:text-primary transition-colors hover-glow stagger-1">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/kaveesha-nethmi-131519215" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-card hover:text-primary transition-colors hover-glow stagger-2">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/_kavee_neth/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-card hover:text-primary transition-colors hover-glow stagger-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/kaveesha.nethmi.128131/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-card hover:text-primary transition-colors hover-glow stagger-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden glow-effect hover-lift">
                <img src="/lovable-uploads/70f1542a-2b89-4f98-bc32-0963109eae92.png" alt="Gallage Kaveesha Nethmi" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 hero-gradient rounded-full opacity-70 blur-xl float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 hero-gradient rounded-full opacity-50 blur-lg float" style={{
              animationDelay: '1s'
            }}></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button onClick={scrollToAbout} className="animate-bounce p-2 rounded-full glass-card hover:text-primary transition-colors">
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
    </section>;
};
export default Hero;