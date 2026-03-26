import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Globe, Wrench, Users } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming",
    skills: ["Java", "JavaScript", "TypeScript", "MySQL"],
  },
  {
    icon: Globe,
    title: "Web Development",
    skills: ["HTML", "CSS", "React", "Next JS", "Tailwind CSS"],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: ["GitHub & Git", "Figma", "Canva", "VS Code"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Problem Solving", "Communication", "Teamwork", "Leadership"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">// skills</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-gradient">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.15 }}
              className="glass rounded-xl p-6 hover-lift group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <cat.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + ci * 0.1 + si * 0.08 }}
                    className="px-3 py-1.5 rounded-full text-sm font-medium bg-secondary text-secondary-foreground border border-border hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
