import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const leaders = [
  { name: "Shrey Aggarwal", role: "COO & Founder", linkedin: "https://www.linkedin.com/in/shreyaggarwalaeren/" },
  { name: "Raman Aggarwal", role: "CEO & Founder", linkedin: "https://www.linkedin.com/in/iramanaggarwal/" },
  { name: "Anju Aggarwal", role: "Co-Founder", linkedin: null },
];

const TeamSection = () => {
  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">Team</span>
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mt-4 mb-4">
            Meet Our Leaders
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Experienced professionals dedicated to helping your firm scale
            efficiently and deliver exceptional client service.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {leaders.map((leader, i) => (
            <motion.div
              key={i}
              className="card-surface p-6 text-center"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="font-display font-semibold text-primary text-lg">
                  {leader.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
              <h3 className="font-semibold text-foreground text-sm">{leader.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{leader.role}</p>
              {leader.linkedin && (
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-primary mt-3 hover:underline"
                >
                  <Linkedin className="w-3 h-3" /> LinkedIn
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
