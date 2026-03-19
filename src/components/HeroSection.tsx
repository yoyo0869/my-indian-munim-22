import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="section-padding pt-32 lg:pt-40">
      <div className="container-main grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          className="lg:col-span-7 space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <span className="eyebrow">Offshore Accounting Services</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-[1.1]">
            Delivering The Perfect{" "}
            <span className="text-primary">Accounting Solution</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            Indian Muneem Chartered Accountant provides qualified accounting
            professionals who work as an extension of your firm — delivering
            quality work overnight while you sleep.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:-translate-y-px active:scale-[0.98]"
              style={{ boxShadow: "var(--shadow-primary)" }}
            >
              Let's Talk
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium border border-foreground/10 hover:bg-foreground/5 transition-all"
            >
              View Services
            </a>
          </div>

          <div className="flex items-center gap-10 pt-4">
            <div>
              <span className="data-text text-3xl font-semibold text-foreground">98%</span>
              <p className="text-xs text-muted-foreground mt-1">Accounting Accuracy</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <span className="data-text text-3xl font-semibold text-foreground">99%</span>
              <p className="text-xs text-muted-foreground mt-1">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="card-elevated p-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-medium text-muted-foreground">Compliance Status</span>
              <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-accent" />
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: "GST Return", status: "Filed", date: "Mar 2026" },
                { label: "TDS Computation", status: "Completed", date: "Q4 FY26" },
                { label: "Financial Report", status: "Delivered", date: "Feb 2026" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center ledger-line pb-4">
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.date}</p>
                  </div>
                  <span className="data-text text-xs font-medium px-2.5 py-1 rounded-md bg-accent/10 text-accent">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-border flex justify-between items-center">
              <span className="text-xs text-muted-foreground">All systems operational</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-1.5 h-6 rounded-full bg-accent/30" style={{ height: `${12 + i * 4}px` }} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
