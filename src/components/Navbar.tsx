import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#hero" className="">
          <img
            src="/LoGo.png"
            alt="Logo"
            className="h-10 w-auto transition-transform duration-300 hover:scale-110"
          />
        </a>

        {/* Navigation & Actions */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
               <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-foreground outline-none"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong mt-2 mx-4 rounded-lg overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-3">
              {navItems.map((item) => (
                 <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileOpen(false);
                    const targetId = item.href.replace('#', '');
                    
                    setTimeout(() => {
                      const element = document.getElementById(targetId);
                      if (element) {
                        let absoluteY = element.getBoundingClientRect().top + window.scrollY;
                        
                        // Desktop padding is py-28 (112px), mobile is py-20 (80px).
                        // To maintain the exact same satisfying visual spacing beneath the fixed 
                        // 64px navbar on mobile ("like in desktop"), we subtract the 32px difference!
                        if (window.innerWidth < 768) {
                          absoluteY -= 32;
                        }

                        window.scrollTo({
                          top: absoluteY,
                          behavior: 'smooth'
                        });
                        window.history.pushState(null, '', item.href);
                      }
                    }, 350);
                  }}
                  className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
