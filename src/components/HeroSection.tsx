import { Github, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-br from-background to-muted">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
          Sreeya Tarimela
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-medium">
          MERN Stack Developer & Computer Science Student
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Motivated and detail-oriented computer science student with a strong foundation in programming, 
          problem solving, and teamwork. Passionate about learning new technologies and building real-world solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a href="mailto:sreeyareddy2204@gmail.com">
            <Button className="hero-button gap-2">
              <Mail className="w-5 h-5" />
              Get In Touch
            </Button>
          </a>
          
          <a href="tel:+919392938090">
            <Button variant="outline" className="gap-2 px-6 py-3 font-medium">
              <Phone className="w-5 h-5" />
              +91 9392938090
            </Button>
          </a>
        </div>
        
        <div className="flex justify-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors duration-300"
          >
            <Github className="w-6 h-6" />
            <span className="text-lg font-medium">View on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;