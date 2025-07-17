const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript (ES6+)", "Python", "C", "C++"]
    },
    {
      title: "Technologies & Frameworks", 
      skills: ["PHP", "SQL", "MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js"]
    },
    {
      title: "Frontend Development",
      skills: ["React.js", "Vite", "React Router", "React Hook Form", "Context API", "Tailwind CSS", "ShadCN", "Responsive Design", "Form Validation (Yup)", "Toast Notifications", "Error Handling"]
    },
    {
      title: "Backend Development", 
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "Role-Based Access Control", "CRUD Operations", "Middleware", ".env Configuration"]
    },
    {
      title: "Tools & Workflow",
      skills: ["Git", "GitHub", "GitHub Codespaces", "VS Code"]
    },
    {
      title: "Other Technical Skills",
      skills: ["OOPS", "DBMS"]
    },
    {
      title: "Management Skills",
      skills: ["Team Collaboration", "Time Management", "Leadership", "Organization", "Pitching Ideas", "Critical Thinking", "Adaptability", "Human-Centered Design", "Problem Solving", "Decision Making"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="section-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-4 text-primary">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;