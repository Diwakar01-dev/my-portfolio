import { navItems } from "../data";

export default function FloatingNav({ active }: { active: string }) {
  return (
    <div className="fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-3 xl:flex">
      {navItems.map((item) => {
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            onClick={() =>
              document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
            }
            aria-label={`Go to ${item.label}`}
            className="group relative flex items-center"
          >
            <span
              className={`absolute right-7 whitespace-nowrap rounded-md bg-secondary px-2 py-1 text-xs font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100`}
            >
              {item.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? "h-3 w-3 bg-primary ring-4 ring-primary/25"
                  : "h-2.5 w-2.5 bg-secondary/30 group-hover:bg-primary dark:bg-white/30"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}
