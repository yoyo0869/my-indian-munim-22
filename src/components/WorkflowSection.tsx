import { motion } from "framer-motion";

const phases = [
  {
    phase: "Phase 1: Discovery",
    steps: [
      { title: "Initial Contact & Discovery Call", desc: "Understand your workflows, software, and goals." },
      { title: "Custom Proposal", desc: "Tailored proposal within 1-2 days with pricing and team structure." },
      { title: "NDA Signing", desc: "Protect confidential information with signed agreement." },
    ],
  },
  {
    phase: "Phase 2: Onboarding",
    steps: [
      { title: "Trial Run", desc: "Pilot project to test quality, turnaround, and communication." },
      { title: "MSA Execution", desc: "Master Services Agreement with SLAs and security protocols." },
      { title: "Team Setup", desc: "Dedicated Practice Manager & CA/CPA-qualified team assigned." },
    ],
  },
  {
    phase: "Phase 3: Daily Operations",
    steps: [
      { title: "Submit Work", desc: "Send tasks with instructions and deadlines." },
      { title: "Overnight Processing", desc: "Your team completes work while you sleep." },
      { title: "Delivery", desc: "Reviewed work ready for client delivery." },
    ],
  },
];

const WorkflowSection = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">Your Workflow, Simplified</span>
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mt-4 mb-4">
            From First Call to Seamless Delivery
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A transparent, step-by-step workflow designed to protect your data,
            align with your goals, and deliver overnight results.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {phases.map((phase, pi) => (
            <motion.div
              key={pi}
              className="card-surface p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: pi * 0.15 }}
            >
              <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-primary mb-6">
                {phase.phase}
              </h3>
              <div className="space-y-5">
                {phase.steps.map((step, si) => (
                  <div key={si} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="data-text text-[10px] font-semibold text-primary">
                          {pi * 3 + si + 1}
                        </span>
                      </div>
                      {si < phase.steps.length - 1 && <div className="w-px flex-1 bg-border mt-1" />}
                    </div>
                    <div className="pb-4">
                      <h4 className="text-sm font-semibold text-foreground">{step.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
