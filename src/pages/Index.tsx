import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground custom-scrollbar">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Services />
      
      {/* Call to Action Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground text-lg mb-8">
                Let's collaborate to create something amazing together. I'm here to help bring your vision to reality.
              </p>
              <button 
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 hero-gradient text-white font-semibold hover-lift"
                onClick={() => window.open('https://wa.me/94701415365', '_blank')}
              >
                Let's Discuss Your Project
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
