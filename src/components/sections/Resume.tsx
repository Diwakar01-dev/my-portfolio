import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Download } from "lucide-react";
import Section from "../Section";
import { education, experience } from "../../data";

type Item = { period: string; title: string; place: string; desc: string };

function Timeline({ items, icon: Icon }: { items: Item[]; icon: typeof GraduationCap }) {
  return (
    <div className="relative ml-3 border-l-2 border-primary/30 pl-8">
      {items.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="relative mb-8 last:mb-0"
        >
          <span className="absolute -left-[2.65rem] flex h-9 w-9 items-center justify-center rounded-full bg-primary text-secondary ring-4 ring-app">
            <Icon size={16} />
          </span>
          <span className="inline-block rounded-full bg-primary/15 px-3 py-1 text-xs font-bold text-primary-dark dark:text-primary">
            {item.period}
          </span>
          <h4 className="mt-2 font-display text-lg font-bold text-main">{item.title}</h4>
          <p className="text-sm font-semibold text-primary-dark dark:text-primary">{item.place}</p>
          <p className="mt-1 text-sm text-muted">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default function Resume() {
  return (
    <Section id="resume" eyebrow="My journey" title="Resume">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="mb-8 flex items-center gap-3 font-display text-2xl font-extrabold uppercase text-main">
            <GraduationCap className="text-primary" /> Education
          </h3>
          <Timeline items={education} icon={GraduationCap} />
        </div>
        <div>
          <h3 className="mb-8 flex items-center gap-3 font-display text-2xl font-extrabold uppercase text-main">
            <Briefcase className="text-primary" /> Experience
          </h3>
          <Timeline items={experience} icon={Briefcase} />
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="flex items-center gap-2 rounded-xl bg-secondary px-7 py-3.5 text-sm font-bold text-primary shadow-lg transition-transform hover:scale-105 dark:bg-primary dark:text-secondary"
        >
          <Download size={18} /> Download Resume
        </a>
      </div>
    </Section>
  );
}
