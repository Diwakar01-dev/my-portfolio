import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navItems, profile, socials } from "../data";
import ThemeButton from "./ThemeButton";

interface SidebarProps {
  active: string;
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function Sidebar({ active, theme, toggleTheme }: SidebarProps) {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const NavLinks = () => (
    <nav className="flex flex-col gap-1" aria-label="Primary">
      {navItems.map((item) => {
        const isActive = active === item.id;
        const Icon = item.Icon;

        return (
          <button
            key={item.id}
            onClick={() => go(item.id)}
            aria-current={isActive ? "page" : undefined}
            className={`group relative flex items-center gap-3 rounded-xl px-4 py-2.5 text-left text-sm font-bold uppercase tracking-wide transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
              isActive
                ? "bg-secondary text-primary dark:bg-primary dark:text-secondary"
                : "text-main hover:bg-secondary/5 dark:hover:bg-white/10"
            }`}
          >
             <Icon size={20} />
            {item.label}
          </button>
        );
      })}
    </nav>
  );

  const SidebarInner = () => (
    <div className="flex h-full flex-col">
      <div className="flex flex-col items-center gap-3 border-b border-app pb-6">
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-primary/60 blur-md" />
          <img
            src="/images/profile.png"
            alt={profile.name}
            className="relative h-24 w-24 rounded-full border-4 border-primary object-cover"
          />
        </div>
        <div className="text-center">
          <p className="font-display text-lg font-extrabold text-main">{profile.name}</p>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            {profile.roles[0]}
          </p>
        </div>
      </div>

      <div className="mt-6 flex-1">
        <NavLinks />
      </div>

      <div className="mt-6 space-y-4 border-t border-app pt-6">
        <div className="flex justify-center gap-2">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.name}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary/5 text-main transition-colors hover:bg-primary hover:text-secondary dark:bg-white/10"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>
        <button
          onClick={() => go("contact")}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-secondary transition-transform hover:scale-[1.03]"
        >
          <Download size={16} /> Resume
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-75 flex-col bg-card p-6 shadow-xl lg:flex">
        <SidebarInner />
      </aside>

      {/* Mobile top bar */}
      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-card/90 px-5 py-3 shadow-md backdrop-blur lg:hidden">
        <div className="flex items-center gap-2">
          <img
            src="/images/profile.png"
            alt={profile.name}
            className="h-9 w-9 rounded-full border-2 border-primary object-cover"
          />
          <span className="font-display font-extrabold text-main">{profile.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <ThemeButton theme={theme} toggleTheme={toggleTheme} />
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Desktop theme toggle (floating) */}
      <div className="fixed top-6 right-6 z-40 hidden lg:block">
        <ThemeButton theme={theme} toggleTheme={toggleTheme} />
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 z-50 h-screen w-72 bg-card p-6 shadow-2xl lg:hidden"
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/5 text-main dark:bg-white/10"
              >
                <X size={18} />
              </button>
              <div className="mt-6 h-[calc(100%-1.5rem)]">
                <SidebarInner />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}


