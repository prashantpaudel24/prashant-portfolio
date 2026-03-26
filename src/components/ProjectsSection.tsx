import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Layers } from "lucide-react";

const projects = [
  {
    title: "JPANI Market(E-commerce site)",
    description: "A comprehensive system to buy, sell and manage products.",
    tech: ["Next.js", "TypeScript", "C#"],
    image: "/JPANI.jpg",
  },
  {
    title: " XYZ-FlUX: A Creative UI Showcase",
    description: "A creative showcase of modern UI designs and interactions.",
    tech: ["React", "JavaScript", "Tailwind"],
    image: "/XYZ.jpg",
  },
  {
    title: "Form Validation System",
    description: "A robust form validation solution with result in the same page after form submission and error handling.",
    tech: ["React", "TailwindCSS", "JavaScript", "Zod"],
    image: "/Form.jpg",
  },
  {
    title: "Online Booking System",
    description: "A real-time booking application with user authentication, appointment scheduling, and calendar integration.",
    tech: ["HTML", "CSS", "PHP", "MySQL"],
    image: "/htl.jpg",
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
              {/* Thumbnail */}
              <div className="h-52 md:h-60 flex items-center justify-center relative overflow-hidden bg-muted/50">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-80" />
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
