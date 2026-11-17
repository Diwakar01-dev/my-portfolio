import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Briefcase, Send } from "lucide-react";
import { profile, socials } from "../../data";

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const speed = deleting ? 45 : 90;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setWordIndex((i) => i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-24 sm:px-10 lg:px-16 lg:pt-16"
    >
      {/* decorative shapes */}
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-10 bottom-10 h-60 w-60 rounded-full bg-secondary/5 blur-3xl dark:bg-primary/10" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-primary-dark dark:text-primary"
          >
            Hi there! 
          </motion.span>

          <h1 className="mt-5 font-display text-5xl font-extrabold leading-tight text-main sm:text-6xl">
            I'm <span className="text-primary">{profile.firstName}</span>
          </h1>

          <div className="mt-3 flex h-9 items-center">
            <span className="font-display text-xl font-bold text-main sm:text-2xl">
              {typed}
            </span>
            <span className="cursor-blink ml-1 inline-block h-6 w-[3px] bg-primary sm:h-7" />
          </div>

          <p className="mt-4 inline-block rounded-md bg-secondary px-4 py-2 text-sm font-semibold text-primary">
            {profile.tagline}
          </p>

          <p className="mt-5 max-w-lg leading-relaxed text-muted">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/DIWAKAR_RESUME.pdf"
              download="DIWAKAR_KUMAR_RESUME.pdf"
              className="flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-secondary shadow-lg shadow-primary/30 transition-transform hover:scale-105"
            >
              <Download size={18} /> Download Resume
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="flex items-center gap-2 rounded-xl bg-secondary px-5 py-3 text-sm font-bold text-white transition-transform hover:scale-105 dark:bg-white dark:text-secondary"
            >
              <Briefcase size={18} /> Hire Me
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="flex items-center gap-2 rounded-xl border-2 border-secondary/15 px-5 py-3 text-sm font-bold text-main transition-colors hover:border-primary hover:text-primary dark:border-white/15"
            >
              <Send size={18} /> Contact Me
            </button>
          </div>

          <div className="mt-8 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-main shadow-md transition-all hover:-translate-y-1 hover:bg-primary hover:text-secondary"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto flex items-center justify-center"
        >
          <div className="absolute h-[22rem] w-[22rem] animate-spin-slow rounded-full border-2 border-dashed border-primary/40 sm:h-[26rem] sm:w-[26rem]" />
          <div className="absolute h-72 w-72 rounded-full bg-gradient-to-br from-primary to-primary-dark/60 sm:h-80 sm:w-80" />
          <img
            src="/images/profile.png"
            alt={profile.name}
            className="animate-float relative z-10 h-72 w-72 rounded-full border-8 border-card object-cover shadow-2xl sm:h-80 sm:w-80"
          />
          <span className="absolute -bottom-2 right-6 z-20 rounded-2xl bg-card px-4 py-2 text-sm font-bold text-main shadow-xl">
            ⭐ 2+ Yrs Exp
          </span>
        </motion.div>
      </div>
    </section>
  );
}
