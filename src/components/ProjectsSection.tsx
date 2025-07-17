import { Code, Database, Clock, TestTube } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Online Test Platform",
      description: "A web-based online examination system developed using PHP.",
      icon: <TestTube className="w-6 h-6" />,
      highlights: [
        "Supports user registration, login, and session management.",
        "Timed quiz functionality with automatic scoring and result tracking.",
        "Clean, responsive user interface built using Bootstrap for cross-device compatibility.",
        "Admin backend for managing quiz questions, test schedules, and result analytics."
      ],
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"]
    },
    {
      title: "Grocery Store Management System",
      description: "A Python-based inventory and billing system built for small to medium-scale grocery stores.",
      icon: <Database className="w-6 h-6" />,
      highlights: [
        "Supports role-based access for admin and cashier.",
        "Admin can add, update, or delete stock and receive low-stock alerts.",
        "Displays daily sales summaries and logs all billing activity.",
        "Cashiers can generate bills and their transactions sync in real-time with the admin dashboard."
      ],
      technologies: ["Python", "Flask", "MySQL", "HTML", "CSS", "Bootstrap", "datetime module"]
    },
    {
      title: "Digital Alarm Clock",
      description: "An interactive real-time clock that allows users to manage alarms efficiently.",
      icon: <Clock className="w-6 h-6" />,
      highlights: [
        "Users can set multiple alarms with custom names, dates, and tunes.",
        "Includes an alarm history feature for reusing previous alarms easily.",
        "Allows users to snooze or stop active alarms as needed.",
        "Focused on a clean and user-friendly interface for effective time management.",
        "Designed with real-time interaction and responsiveness in mind."
      ],
      technologies: ["HTML", "CSS", "JavaScript"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="section-card animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 text-primary">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Key Highlights:</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="skill-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;