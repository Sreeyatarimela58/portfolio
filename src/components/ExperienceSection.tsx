import { CalendarDays, MapPin } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Work Experience
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-primary/20 hidden md:block"></div>
          
          <div className="space-y-12">
            <div className="relative animate-slide-in-left">
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block"></div>
              
              <div className="md:ml-16 section-card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    MERN Stack Developer Intern
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CalendarDays className="w-4 h-4" />
                    <span>Jun 2025 – Present</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-primary mb-6">
                  <MapPin className="w-4 h-4" />
                  <span className="font-medium">Edubot Tech</span>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-4 text-foreground">
                    Project: E-Ticket Booking System (Web Application)
                  </h4>
                  
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Built a full-stack E-Ticket Booking System using MongoDB, Express.js, React, and Node.js for booking transportation tickets.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Implemented JWT-based authentication, role-based access (Admin/User), and protected routes.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Designed and developed CRUD APIs for users, events, and bookings using Express and Mongoose.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Created a responsive UI with Tailwind CSS, including forms with validation using React Hook Form + Yup.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Managed state and authentication using React Context API; used Axios for backend integration.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Developed key pages: Event list, Booking form (with seat selection), My Bookings, Admin Dashboard.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Followed clean Git practices using GitHub Code spaces for cloud-based development and version control.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;