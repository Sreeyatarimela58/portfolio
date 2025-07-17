import { Mail, Phone, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
          Let's Connect
        </h2>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always excited to discuss new opportunities, collaborate on projects, 
          or simply chat about technology. Feel free to reach out!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <a 
            href="mailto:sreeyareddy2204@gmail.com"
            className="section-card group cursor-pointer"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground text-sm">sreeyareddy2204@gmail.com</p>
            </div>
          </a>
          
          <a 
            href="tel:+919392938090"
            className="section-card group cursor-pointer"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Phone</h3>
              <p className="text-muted-foreground text-sm">+91 9392938090</p>
            </div>
          </a>
          
          <a 
            href="#"
            className="section-card group cursor-pointer"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">GitHub</h3>
              <p className="text-muted-foreground text-sm">View Projects</p>
            </div>
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:sreeyareddy2204@gmail.com">
            <Button className="hero-button gap-2">
              <Mail className="w-5 h-5" />
              Send Message
            </Button>
          </a>
          
          <a href="tel:+919392938090">
            <Button variant="outline" className="gap-2 px-6 py-3 font-medium">
              <Phone className="w-5 h-5" />
              Call Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;