import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground flex items-center gap-2">
              © 2025 Gallage Kaveesha Nethmi.
            </p>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full glass-card hover:text-primary transition-colors group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;