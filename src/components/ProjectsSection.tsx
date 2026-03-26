import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Layers } from "lucide-react";

const projects = [
  {
    title: "Student Management System",
    description: "A comprehensive system to manage student records, grades, and attendance with a clean interface.",
    tech: ["Java", "MySQL", "Swing"],
    color: "from-primary/20 to-accent/20",
  },
  {
    title: "Portfolio Website",
    description: "A modern, animated personal portfolio showcasing projects and skills with glassmorphism design.",
    tech: ["React", "TypeScript", "Tailwind"],
    color: "from-accent/20 to-primary/20",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with location search, forecasts, and beautiful data visualizations.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    color: "from-primary/20 to-accent/10",
  },
  {
    title: "Chat Application",
    description: "A real-time messaging app with user authentication, group chats, and message history.",
    tech: ["Python", "Socket.io", "Flask"],
    color: "from-accent/10 to-primary/20",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">// projects</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-xl overflow-hidden group hover-lift"
            >
              {/* Thumbnail placeholder */}
              <div
                className={`h-44 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
              >
                <Layers
                  size={48}
                  className="text-primary/30 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2 py-1 rounded-md bg-primary/10 text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline">
                    <ExternalLink size={14} /> View Details
                  </button>
                  <button className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
                    <Github size={14} /> Source
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
