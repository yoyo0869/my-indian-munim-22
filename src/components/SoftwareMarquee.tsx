const softwares = [
  "QuickBooks", "Xero", "Sage", "IRIS", "MYOB", "Zoho",
  "FreeAgent", "NetSuite", "Freshbooks", "Odoo", "Wolters Kluwer", "CaseWare",
];

const SoftwareMarquee = () => {
  return (
    <section className="py-12 border-y border-border overflow-hidden">
      <div className="container-main mb-6 px-6">
        <span className="eyebrow">Accounting Software We Work With</span>
      </div>
      <div className="relative">
        <div className="flex animate-marquee gap-12 items-center">
          {[...softwares, ...softwares].map((name, i) => (
            <div
              key={i}
              className="shrink-0 px-6 py-3 card-surface flex items-center justify-center"
            >
              <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareMarquee;
