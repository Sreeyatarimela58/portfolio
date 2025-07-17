import { Award, CalendarDays } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Introduction To Machine Learning",
      issuer: "VOIS",
      date: "June 2025",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Performance Evaluation in Machine Learning",
      issuer: "VOIS", 
      date: "June 2025",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Certifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={cert.title}
              className="section-card animate-slide-in-left"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-primary">
                  {cert.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {cert.title}
                  </h3>
                  
                  <p className="text-primary font-medium mb-3">
                    {cert.issuer}
                  </p>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CalendarDays className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;