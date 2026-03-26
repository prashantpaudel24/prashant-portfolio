import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, BookOpen, Trophy, Star } from "lucide-react";

const achievements = [
  { icon: Trophy, label: "Academic ", desc: "Consistent in BSc.CSIT program", year: "2022-Present" },
  { icon: Award, label: "Sports", desc: "Gold in every field like Basketball, Volleyball, Football ", year: "2024" },
  { icon: BookOpen, label: "Digital Literacy Volunteer", desc: "Taught basic computer skills in local community", year: "2022" },
  { icon: Star, label: "Certification's", desc: "Gained different certification achievement", year: "2026" },
];

const stats = [
  { value: "6+", label: "Projects Completed" },
  { value: "10+", label: "Certifications" },
  { value: "500+", label: "Hours of Coding" },
  { value: "3+", label: "Internships & Roles" },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">// achievements</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Milestones & <span className="text-gradient">Achievements</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 text-center hover-lift"
            >
              <p className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
          {achievements.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              className={`relative flex items-start mb-8 ${
                i % 2 === 0
                  ? "md:flex-row md:text-right"
                  : "md:flex-row-reverse md:text-left"
              } flex-row`}
            >
              <div className={`hidden md:block w-1/2 ${i % 2 === 0 ? "pr-12" : "pl-12"}`}>
                <div className="glass rounded-xl p-5 hover-lift">
                  <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "justify-end" : ""}`}>
                    <item.icon size={18} className="text-primary" />
                    <h3 className="font-semibold">{item.label}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                  <p className="text-xs text-primary font-mono mt-2">{item.year}</p>
                </div>
              </div>
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-6 glow-primary" />
              <div className="w-1/2 hidden md:block" />

              {/* Mobile card */}
              <div className="md:hidden ml-10 glass rounded-xl p-5 hover-lift flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <item.icon size={18} className="text-primary" />
                  <h3 className="font-semibold">{item.label}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                <p className="text-xs text-primary font-mono mt-2">{item.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
