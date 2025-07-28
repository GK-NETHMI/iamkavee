import Navigation from "@/components/Navigation";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground custom-scrollbar">
      <Navigation />
      <Skills />
      <Footer />
    </div>
  );
};

export default SkillsPage;