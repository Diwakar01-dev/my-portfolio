import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Github } from "../BrandIcons";
import Section from "../Section";
import { categories, projects } from "../../data";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section id="portfolio" eyebrow="My recent work" title="Portfolio">
      <div className="mb-10 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${
              filter === cat
                ? "bg-primary text-secondary shadow-md"
                : "bg-card text-main hover:bg-secondary/5 dark:hover:bg-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.article
              layout
              key={p.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
              className="group overflow-hidden rounded-2xl bg-card shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${p.color} transition-transform duration-500 group-hover:scale-110`}
                >
                  <span className="font-display text-3xl font-extrabold text-white/90">
                    {p.title.charAt(0)}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-secondary/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} GitHub`}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-secondary transition-transform hover:scale-110"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} live demo`}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-secondary transition-transform hover:scale-110"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs font-bold uppercase tracking-wider text-primary-dark dark:text-primary">
                  {p.category}
                </span>
                <h3 className="mt-1 font-display text-lg font-bold text-main">{p.title}</h3>
                <p className="mt-1 text-sm text-muted">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-secondary/5 px-2 py-1 text-xs font-semibold text-main dark:bg-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
