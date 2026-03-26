import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Globe, Wrench, Users } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming",
    skills: [
      { name: "C", level: 80 },
      { name: "C++", level: 75 },
      { name: "Java", level: 70 },
      { name: "Python", level: 65 },
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 75 },
      { name: "React", level: 60 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", level: 75 },
      { name: "Canva", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 60 },
    ],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: [
      { name: "Communication", level: 85 },
      { name: "Teamwork", level: 90 },
      { name: "Leadership", level: 75 },
      { name: "Problem Solving", level: 80 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-muted-foreground">{name}</span>
        <span className="text-primary font-mono text-xs">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, hsl(175, 80%, 50%), hsl(265, 75%, 60%))`,
          }}
        />
      </div>
    </div>
  );
};

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
              {cat.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={0.3 + ci * 0.1 + si * 0.1}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
