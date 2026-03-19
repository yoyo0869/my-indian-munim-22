import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What specific accounting services can I offshore?",
    a: "CPA firms can offshore nearly all Client Accounting Services, including bookkeeping, financial reporting, accounts payable/receivable, payroll, tax preparation and filing, and audit support.",
  },
  {
    q: "Is my client's data secure when offshoring to IMCA?",
    a: "Absolutely. We maintain SOC 2 Type II compliance, end-to-end encryption, role-based access controls, and regular security audits. We comply with international data protection regulations such as GDPR.",
  },
  {
    q: "How long does it take to onboard an offshore accounting team?",
    a: "The onboarding process typically takes around 14-20 days to fully optimize systems. For simpler implementations, firms can expect 2-3 weeks before the outsourced team is fully operational.",
  },
  {
    q: "What makes Indian Muneem stand out as an offshore partner?",
    a: "Over 20 years of specialized experience serving CA and CPA firms across NZ, US, UK, Australia, and Canada. Pre-qualified professionals, 98% accuracy rates, and overnight delivery.",
  },
  {
    q: "Can I request a trial before committing?",
    a: "Yes! We offer pilot projects that let you start with a specific client or task to assess our quality and turnaround time. We're confident in our ability to deliver value.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-secondary/50" id="faq">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="eyebrow">FAQs</span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mt-4 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Common questions firms ask before getting started. Clear,
              practical, and straight to the point.
            </p>

            <div className="card-surface p-6 inline-flex items-center gap-4">
              <div className="text-center">
                <span className="data-text text-2xl font-semibold text-primary">24/7</span>
                <p className="text-xs text-muted-foreground mt-1">Online Support</p>
              </div>
            </div>
          </div>

          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="card-surface px-5 border-none">
                <AccordionTrigger className="text-sm font-medium text-foreground text-left hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
