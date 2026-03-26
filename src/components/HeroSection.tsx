import { motion } from "framer-motion";
import { ArrowDown, FileDown, FolderOpen } from "lucide-react";
import avatar from "@/assets/avatar.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center section-padding overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/5 animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-accent/5 animate-spin-slow" style={{ animationDirection: "reverse" }} />
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text */}
        <div className="order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono text-sm mb-4"
          >
            &lt;hello world /&gt;
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
          >
            I'm{" "}
            <span className="text-gradient">Prashant</span>
            <br />
            Paudel
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground text-lg mb-2"
          >
            Aspiring IT Professional | Creative Thinker | Problem Solver
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-muted-foreground/70 mb-8 max-w-md"
          >
            A BSc.CSIT student from Nepal passionate about crafting elegant
            digital solutions and pushing the boundaries of technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:glow-primary transition-all duration-300 hover:scale-105"
            >
              <FolderOpen size={18} />
              View Projects
            </a>
            <a
              href="#resume"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass gradient-border font-medium hover:scale-105 transition-all duration-300"
            >
              <FileDown size={18} />
              Download CV
            </a>
          </motion.div>
        </div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7, type: "spring" }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full glass gradient-border p-2 animate-float">
              <img
                src={avatar}
                alt="Prashant Paudel avatar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute -top-2 -right-2 glass rounded-lg px-3 py-1.5 text-xs font-mono text-primary"
            >
              React ⚛️
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute bottom-4 -left-4 glass rounded-lg px-3 py-1.5 text-xs font-mono text-accent"
            >
              CSIT 🎓
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={20} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
