import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground custom-scrollbar">
      <Navigation />
      <Services />
      
      {/* Call to Action Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6">
                Let's collaborate to create something amazing together. I'm here to help bring your vision to reality.
              </p>
              <button 
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 hero-gradient text-white font-semibold"
                onClick={() => window.open('https://wa.me/94701415365', '_blank')}
              >
                Let's Discuss Your Project
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;