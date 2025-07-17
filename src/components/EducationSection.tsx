import { CalendarDays, GraduationCap, Award } from "lucide-react";

const EducationSection = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech), Computer Science & Engineering",
      institution: "SRM University AP, Amaravati",
      duration: "Expected Graduation: April 2027",
      gpa: "GPA: 9.06",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "Senior Secondary (XII) – Mathematics",
      institution: "Andhra Pradesh Board of Intermediate Education",
      duration: "2022 - 2023",
      gpa: "Percentage: 98.4%",
      icon: <Award className="w-6 h-6" />
    },
    {
      degree: "Secondary School (X) – Mathematics",
      institution: "Andhra Pradesh State Board",
      duration: "2020 - 2021",
      gpa: "GPA: 10",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Education
        </h2>
        
        <div className="space-y-8">
          {educationData.map((education, index) => (
            <div 
              key={education.degree}
              className="section-card animate-slide-in-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0 text-primary">
                  {education.icon}
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {education.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CalendarDays className="w-4 h-4" />
                      <span>{education.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-primary font-medium mb-2">
                    {education.institution}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    <Award className="w-4 h-4" />
                    {education.gpa}
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

export default EducationSection;