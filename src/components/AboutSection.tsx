import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Lightbulb, TrendingUp } from "lucide-react";

const highlights = [
  { icon: Code, label: "Tech Enthusiast", desc: "Passionate about coding and building solutions" },
  { icon: Palette, label: "Creative Mind", desc: "Blending design aesthetics with functionality" },
  { icon: Lightbulb, label: "Problem Solver", desc: "Turning complex challenges into simple solutions" },
  { icon: TrendingUp, label: "Growth Mindset", desc: "Always learning and evolving with technology" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">// about me</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Get to Know <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm Prashant Paudel, a BSc.CSIT student from Nepal with a deep passion
              for technology and creativity. My journey in computer science has been
              driven by curiosity — from writing my first "Hello World" program to
              building full-fledged web applications.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I believe in the intersection of technology and creativity. Whether it's
              designing intuitive user interfaces or solving algorithmic challenges,
              I approach every problem with a fresh perspective and a growth mindset.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond coding, I'm interested in digital design, social media management,
              and exploring how technology can positively impact communities in Nepal
              and beyond.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass rounded-xl p-5 hover-lift group"
              >
                <item.icon
                  size={28}
                  className="text-primary mb-3 group-hover:scale-110 transition-transform"
                />
                <h3 className="font-semibold text-sm mb-1">{item.label}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
