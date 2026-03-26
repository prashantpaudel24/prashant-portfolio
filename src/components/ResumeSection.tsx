import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileDown, Eye } from "lucide-react";

const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2">// resume</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            My <span className="text-gradient">Resume</span>
          </h2>
          <p className="text-muted-foreground mb-10">
            Interested in working together? Download my resume or view it below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass rounded-xl p-8 mb-8"
        >
          {/* Resume preview placeholder */}
          <div className="aspect-[8.5/11] rounded-lg bg-secondary/50 border border-border flex items-center justify-center mb-6">
            <div className="text-center">
              <Eye size={32} className="text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Resume preview will appear here</p>
              <p className="text-xs text-muted-foreground/60 mt-1">Upload your CV to enable preview</p>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:scale-105 transition-all duration-300">
              <FileDown size={18} />
              Download CV
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
