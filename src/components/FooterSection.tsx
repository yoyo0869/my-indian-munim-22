import { Mail, Phone, MapPin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="section-padding bg-foreground text-background" id="contact">
      <div className="container-main">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">IM</span>
              </div>
              <div className="leading-tight">
                <span className="font-display font-semibold text-sm">Indian Muneem</span>
                <span className="block text-[10px] opacity-60 tracking-wide">Chartered Accountant</span>
              </div>
            </div>
            <p className="text-sm opacity-60 max-w-sm leading-relaxed">
              Your trusted offshore accounting partner. Over 20 years of
              experience delivering quality bookkeeping, tax, and compliance
              services globally.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase opacity-40 mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Financial Reporting</li>
              <li>Bookkeeping</li>
              <li>Tax Preparation</li>
              <li>Payroll Management</li>
              <li>Crypto Accounting</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase opacity-40 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 opacity-50" />
                info@indianmuneem.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 opacity-50" />
                +91 XXX XXX XXXX
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 opacity-50 mt-0.5" />
                India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-40">
            © {new Date().getFullYear()} Indian Muneem Chartered Accountant. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs opacity-40">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
