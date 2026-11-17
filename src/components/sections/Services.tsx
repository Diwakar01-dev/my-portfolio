import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Section from "../Section";
import { services } from "../../data";

export default function Services() {

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <Section id="services" eyebrow="What I offer" title="Services">
      <div onClick={() => scrollTo("contact")}
       className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 cursor-pointer">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl bg-card p-7 shadow-lg transition-all hover:-translate-y-2 hover:bg-secondary"
          >
            <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary/10 transition-transform group-hover:scale-150" />
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary-dark transition-colors group-hover:bg-primary group-hover:text-secondary dark:text-primary">
              <s.icon size={26} />
            </div>
            <h3 className="relative mt-5 font-display text-xl font-bold text-main transition-colors group-hover:text-white">
              {s.title}
            </h3>
            <p className="relative mt-2 text-sm text-muted transition-colors group-hover:text-white/70">
              {s.desc}
            </p>
            <ArrowUpRight className="relative mt-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
