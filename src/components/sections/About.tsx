import { motion } from "framer-motion";
import { Target, User, Sparkles } from "lucide-react";
import Section from "../Section";
import { stats } from "../../data";
import { useCountUp } from "../../hooks";

function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div className="rounded-2xl bg-secondary p-6 text-center shadow-lg">
      <span ref={ref} className="font-display text-4xl font-extrabold text-primary">
        {count}
        {suffix}
      </span>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/70">
        {label}
      </p>
    </div>
  );
}

const cards = [
  {
    icon: User,
    title: "Who I Am",
    text: "A passionate developer who turns complex problems into simple, beautiful and intuitive digital products.",
  },
  {
    icon: Target,
    title: "Career Objective",
    text: "To build scalable, user-focused web applications while continuously mastering cutting-edge technologies.",
  },
  {
    icon: Sparkles,
    title: "What Drives Me",
    text: "Clean code, thoughtful design and the thrill of shipping products that genuinely help people.",
  },
];

export default function About() {
  return (
    <Section id="about" eyebrow="Get to know me" title="About Me">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="font-display text-2xl font-bold text-main">
            I'm <span className="text-primary">Diwakar Kumar</span>, a Full Stack Developer &amp;
            Digital Marketer based in Delhi , India.
          </h3>
          <p className="mt-4 leading-relaxed text-muted">
            I specialize in building modern, performant web applications from concept to
            deployment. With a strong eye for design and a love for clean architecture, I bridge
            the gap between elegant interfaces and reliable engineering.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Over the past 4 years I've collaborated with startups and agencies, delivering 120+
            projects ranging from marketing sites to complex full-stack platforms. I believe great
            software is equal parts craft, empathy and attention to detail.
          </p>

          <div className="mt-6 space-y-4">
            {cards.map((c) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex gap-4 rounded-2xl bg-card p-4 shadow-md"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary-dark dark:text-primary">
                  <c.icon size={20} />
                </div>
                <div>
                  <p className="font-bold text-main">{c.title}</p>
                  <p className="text-sm text-muted">{c.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="rounded-3xl bg-primary p-8 shadow-xl">
            <h4 className="font-display text-xl font-extrabold uppercase text-secondary">
              Fun Facts
            </h4>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <Counter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
              ))}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 text-sm break-words">
            {[
              ["Name", "Diwakar Kumar"],
              ["Location", "Delhi, India"],
              ["Email", "kumardiwakar0858@gmail.com"],
              ["Availability", "Freelance / Full-time"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl bg-card p-4 shadow-md">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">{k}</p>
                <p className="mt-1 font-semibold text-main">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
