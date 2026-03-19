import { motion } from "framer-motion";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "500+", label: "Favorable Feedback" },
  { value: "50+", label: "Practice Managers" },
  { value: "100+", label: "Collaborative Allies" },
];

const steps = ["Discover", "Strategize", "Onboard", "Deliver", "Scale"];

const AboutSection = () => {
  return (
    <section className="section-padding" id="about">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="eyebrow">About Us</span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mt-4 mb-6">
              Building Trust, Delivering Accounting Excellence
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For over 20 years, Indian Muneem Chartered Accountant has been the
              trusted offshore partner for accounting firms in New Zealand, the
              US, UK, Australia, and Canada.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We combine deep accounting expertise with a flexible offshore
              model, helping you reduce costs, improve turnaround times, and
              focus on growth.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="card-surface p-5"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="data-text text-2xl font-semibold text-primary">{stat.value}</span>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              {steps.map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="px-3 py-1.5 rounded-md bg-primary/10 text-primary text-xs font-medium">
                    {step}
                  </span>
                  {i < steps.length - 1 && (
                    <div className="w-4 h-px bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
