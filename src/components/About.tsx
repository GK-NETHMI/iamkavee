import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const About = () => {
  const education = [{
    degree: "BSc (Hons) in IT",
    institution: "Sri Lanka Institute of Information Technology",
    period: "2022 – Present",
    status: "Current"
  }, {
    degree: "Higher Diploma in IT",
    institution: "SLIIT",
    period: "2022 – 2024",
    status: "Completed"
  }, {
    degree: "A/L Physical Science",
    institution: "Embilipitiya President College",
    period: "2020",
    status: "Completed"
  }, {
    degree: "O/L",
    institution: "Embilipitiya National College",
    period: "2017",
    status: "Completed"
  }];
  return <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know more about my background, education, and journey in technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <div className="space-y-6 fade-in">
            <h3 className="text-2xl font-semibold mb-4">My Story</h3>
            <p className="text-muted-foreground leading-relaxed">
              I am a detail-oriented IT undergraduate specializing in Full Stack Development with proven expertise in designing and implementing user-centered solutions. Skilled in troubleshooting IT systems, developing web applications, and managing databases.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Passionate about solving complex problems, delivering reliable results, and contributing effectively to team success in dynamic environments. I believe in continuous learning and staying updated with the latest technologies.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Colombo, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Available for Freelance</span>
              </div>
            </div>

            {/* Experience */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold mb-3">Work Experience</h4>
              <Card className="glass-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-semibold">Full Stack Developer</h5>
                      <p className="text-primary text-sm">Leogn</p>
                      <p className="text-muted-foreground text-sm">Feb 2025 – May 2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6 slide-up">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              Education
            </h3>
            
            <div className="space-y-4">
              {education.map((item, index) => <Card key={index} className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-3 h-3 rounded-full mt-2 ${item.status === "Current" ? "bg-primary animate-pulse" : "bg-muted-foreground"}`}></div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <h4 className="font-semibold text-foreground">{item.degree}</h4>
                          <span className={`text-xs px-2 py-1 rounded-full ${item.status === "Current" ? "bg-primary/20 text-primary border border-primary/30" : "bg-muted text-muted-foreground"}`}>
                            {item.status}
                          </span>
                        </div>
                        <p className="text-primary text-sm font-medium">{item.institution}</p>
                        <p className="text-muted-foreground text-sm">{item.period}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;