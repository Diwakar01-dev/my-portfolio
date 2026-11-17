import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-4">
        <span className="h-px w-10 bg-secondary dark:bg-white" />
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-muted">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight text-main sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}

export default function Section({ id, eyebrow, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 px-6 py-20 sm:px-10 lg:px-16 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-6xl"
      >
        {title && <SectionHeading eyebrow={eyebrow} title={title} />}
        {children}
      </motion.div>
    </section>
  );
}
