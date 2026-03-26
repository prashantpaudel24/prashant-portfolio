import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Internship",
    company: "SolveeTech Solution Pvt Ltd.",
    period: "Nov 2025 – Jan 2026",
    responsibilities: [
      "Managed social media accounts and created engaging content",
      "Increased follower engagement by 40% through strategic campaigns",
      "Designed graphics using Canva and coordinated with the marketing team",
    ],
  },
  {
    role: "Web Development Volunteer",
    company: "Community Organization",
    period: "Jan 2024 – Mar 2024",
    responsibilities: [
      "Built a responsive website for a local non-profit organization",
      "Implemented contact forms and event listing features",
      "Trained staff on content management and website maintenance",
    ],
  },
  {
    role: "Executive Member",
    company: "BMC IT Club",
    period: "2025-2026",
    responsibilities: [
      "Organized coding workshops and tech talks for fellow students",
      "Led a team of 10 in building internal project management tools",
      "Mentored junior students in programming fundamentals",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">// experience</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="relative pl-12 mb-10 last:mb-0"
            >
              <div className="absolute left-4 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-6 glow-primary" />

              <div className="glass rounded-xl p-6 hover-lift">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <div>
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      <Briefcase size={16} className="text-primary" />
                      {exp.role}
                    </h3>
                    <p className="text-sm text-primary">{exp.company}</p>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                    <Calendar size={12} />
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.responsibilities.map((r, ri) => (
                    <li key={ri} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1">▸</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
