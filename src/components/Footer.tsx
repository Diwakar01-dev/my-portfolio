import { ArrowUp, Heart } from "lucide-react";
import { navItems, profile, socials } from "../data";

export default function Footer() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-secondary px-6 pb-8 pt-14 text-white sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-extrabold">
            {profile.firstName}
            <span className="text-primary">.</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-white/60">{profile.intro}</p>
          <div className="mt-5 flex gap-2">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary hover:text-secondary"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-bold">Quick Links</h4>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navItems.map((n) => (
              <li key={n.id}>
                <button
                  onClick={() => go(n.id)}
                  className="text-white/60 transition-colors hover:text-primary"
                >
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-bold">Get in Touch</h4>
          <p className="mt-4 text-sm text-white/60">{profile.email}</p>
          <p className="mt-1 text-sm text-white/60">{profile.phone}</p>
          <p className="mt-1 text-sm text-white/60">{profile.location}</p>
          <button
            onClick={() => go("contact")}
            className="mt-4 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-secondary transition-transform hover:scale-105"
          >
            Hire Me
          </button>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row">
        <p className="flex items-center gap-1.5">
          © {new Date().getFullYear()} {profile.name}. Made with{" "}
          <Heart size={15} className="fill-primary text-primary " /> &amp; React.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 font-semibold text-white transition-colors hover:bg-primary hover:text-secondary"
        >
          Back to Top <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
