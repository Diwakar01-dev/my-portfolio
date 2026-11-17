import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

interface ThemeButtonProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function ThemeButton({
  theme,
  toggleTheme,
}: ThemeButtonProps) {
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="flex h-10.5 w-10.5 items-center justify-center rounded-xl bg-secondary text-primary transition-transform hover:scale-110"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}