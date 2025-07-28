import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold">
            <span className="text-primary">GK</span>
            <span className="text-foreground">Nethmi</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="nav-link hover:scale-105 transition-transform">Home</a>
            <a href="/about" className="nav-link hover:scale-105 transition-transform">About</a>
            <a href="/skills" className="nav-link hover:scale-105 transition-transform">Skills</a>
            <a href="/#services" className="nav-link hover:scale-105 transition-transform" onClick={(e) => {
              e.preventDefault();
              if (window.location.pathname === '/') {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#services';
              }
            }}>Services</a>
            <a href="/projects" className="nav-link hover:scale-105 transition-transform">Projects</a>
            <a href="/#contact" className="nav-link hover:scale-105 transition-transform" onClick={(e) => {
              e.preventDefault();
              if (window.location.pathname === '/') {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#contact';
              }
            }}>Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <a href="/" className="nav-link-mobile">Home</a>
            <a href="/about" className="nav-link-mobile">About</a>
            <a href="/skills" className="nav-link-mobile">Skills</a>
            <a href="/#services" className="nav-link-mobile" onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              if (window.location.pathname === '/') {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#services';
              }
            }}>Services</a>
            <a href="/projects" className="nav-link-mobile">Projects</a>
            <a href="/#contact" className="nav-link-mobile" onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              if (window.location.pathname === '/') {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#contact';
              }
            }}>Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;