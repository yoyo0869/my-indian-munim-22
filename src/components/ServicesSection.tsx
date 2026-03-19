import { motion } from "framer-motion";
import { FileText, DollarSign, BookOpen, Database, Bitcoin, Receipt, ArrowRight } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Financial Reporting",
    desc: "Custom management reports, variance analysis, cash flow statements, and KPI dashboards that transform data into actionable insights.",
  },
  {
    icon: DollarSign,
    title: "Payroll Management",
    desc: "End-to-end payroll processing including salary calculations, statutory compliance, PF/ESI management, and payroll tax filings.",
  },
  {
    icon: BookOpen,
    title: "End-to-End Bookkeeping",
    desc: "Complete bookkeeping from data entry to reconciliation. We handle AP/AR, bank reconciliations, and maintain accurate records.",
  },
  {
    icon: Database,
    title: "System / Data Conversion",
    desc: "Seamless migration of accounting data between software platforms with extraction, transformation, validation, and import.",
  },
  {
    icon: Bitcoin,
    title: "Crypto Accounting",
    desc: "Digital asset tracking, transaction recording, capital gains calculations, tax reporting, and blockchain reconciliation support.",
  },
  {
    icon: Receipt,
    title: "Tax Preparation & Filing",
    desc: "Expert preparation of individual, corporate, and trust tax returns across US, UK, AU, and NZ jurisdictions.",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-secondary/50" id="services">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">Services</span>
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mt-4 mb-4">
            What We Can Help You With
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Comprehensive accounting services from bookkeeping and tax
            preparation to financial reporting and payroll — helping firms
            scale efficiently while maintaining quality.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="group card-surface p-6 hover:shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_8px_24px_-8px_rgba(0,0,0,0.1)] transition-all duration-200 relative overflow-hidden"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-300" />
              <service.icon className="w-5 h-5 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
              <button className="inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Read more <ArrowRight className="w-3 h-3" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
