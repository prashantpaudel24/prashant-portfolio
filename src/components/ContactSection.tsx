import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Linkedin, Github,Facebook, Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/ppoudel551@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: "New Contact from Portfolio!"
        })
      });

      if (response.ok) {
        alert("Message sent successfully! Note: You may need to activate FormSubmit on your email for the first message.");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Oops! There was a problem sending your message.");
      }
    } catch (error) {
      alert("Oops! There was a problem sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">// contact</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Get In <span className="text-gradient">Touch</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="glass rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <Mail size={18} className="text-primary" />
                <span className="text-sm">ppoudel551@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <MapPin size={18} className="text-primary" />
                <span className="text-sm">Tilottama-07, Rupandehi, Nepal</span>
              </div>
               <div className="flex items-center gap-3 mb-2">
                <Phone size={18} className="text-primary" />
                <span className="text-sm">+977 984533357</span>
              </div>
            </div>

            <div className="flex gap-3">
              {[
                 { icon: Facebook, href: "https://www.facebook.com/", label: "Facebook" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/prashantpaudel/", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/prashantpaudel24", label: "GitHub" },
                { icon: Mail, href: "mailto:ppoudel551@gmail.com", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-11 h-11 glass rounded-lg flex items-center justify-center hover:bg-primary/10 hover:scale-110 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-muted-foreground hover:text-primary" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 glass rounded-xl p-6 space-y-4"
          >
            <div>
              <label className="text-sm text-muted-foreground block mb-1.5">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground block mb-1.5">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground block mb-1.5">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={4}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:scale-105 transition-all duration-300 w-full justify-center"
            >
              <Send size={16} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
