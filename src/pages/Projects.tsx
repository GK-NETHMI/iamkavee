import Navigation from "@/components/Navigation";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground custom-scrollbar">
      <Navigation />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default ProjectsPage;