import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Company", hasDropdown: true },
  { label: "Services", hasDropdown: true },
  { label: "Resources", hasDropdown: true },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <nav className="container-main flex items-center justify-between h-16 px-6">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm font-display">IM</span>
          </div>
          <div className="leading-tight">
            <span className="font-display font-semibold text-foreground text-sm">Indian Muneem</span>
            <span className="block text-[10px] text-muted-foreground tracking-wide">Chartered Accountant</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all hover:-translate-y-px active:scale-[0.98]"
            style={{ boxShadow: "var(--shadow-primary)" }}
          >
            Get In Touch
          </a>
        </div>

        <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <button key={item.label} className="block w-full text-left text-sm font-medium text-foreground/70 py-2">
                  {item.label}
                </button>
              ))}
              <a
                href="#contact"
                className="block w-full text-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium mt-2"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
