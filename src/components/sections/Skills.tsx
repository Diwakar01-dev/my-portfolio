import { motion } from "framer-motion";
import Section from "../Section";
import { skillGroups } from "../../data";

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="group">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-semibold text-main">{name}</span>
        <span className="text-sm font-bold text-primary-dark dark:text-primary">{level}%</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-secondary/10 dark:bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-primary-dark"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <Section id="skills" eyebrow="My expertise" title="Skills">
      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="rounded-3xl bg-card p-7 shadow-lg transition-transform hover:-translate-y-2"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-8 w-1.5 rounded-full bg-primary" />
              <h3 className="font-display text-xl font-extrabold uppercase text-main">
                {group.title}
              </h3>
            </div>
            <div className="space-y-5">
              {group.skills.map((s) => (
                <SkillBar key={s.name} name={s.name} level={s.level} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
