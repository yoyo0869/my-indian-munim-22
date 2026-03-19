import { motion } from "framer-motion";
import { Shield, GraduationCap, Clock, CheckCircle } from "lucide-react";

const points = [
  { icon: GraduationCap, title: "Qualified Professionals", desc: "CA, CPA, and ACCA qualified accountants" },
  { icon: Shield, title: "Zero Training Overhead", desc: "Pre-trained professionals familiar with global accounting standards" },
  { icon: Clock, title: "Time Zone Advantage", desc: "Work submitted today, delivered tomorrow morning" },
  { icon: CheckCircle, title: "Consistent Quality", desc: "Rigorous QA processes and regular performance reviews" },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding" id="why-us">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mt-4 mb-6">
              Why You Should Choose Our Offshore Accounting Services
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Partner with a firm that understands the accounting industry
              inside out. With qualified professionals, seamless integration,
              and a proven track record across 500+ firms.
            </p>

            <div className="space-y-4">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  className="flex gap-4 items-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <point.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{point.title}</h4>
                    <p className="text-sm text-muted-foreground">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center mt-8 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all hover:-translate-y-px active:scale-[0.98]"
              style={{ boxShadow: "var(--shadow-primary)" }}
            >
              Contact Us
            </a>
          </div>

          <motion.div
            className="card-elevated p-8 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-foreground text-lg">Our Commitment</h3>
            {[
              { metric: "Accuracy Rate", value: "98%" },
              { metric: "Client Retention", value: "95%" },
              { metric: "Avg. Turnaround", value: "< 24h" },
              { metric: "Firms Served", value: "500+" },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center ledger-line pb-4">
                <span className="text-sm text-muted-foreground">{item.metric}</span>
                <span className="data-text text-sm font-semibold text-foreground">{item.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
