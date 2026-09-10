import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === "dark";
  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className="relative w-11 h-11 rounded-full flex items-center justify-center card-surface hover:border-periwinkle-400/50 transition-colors"
    >
      <Sun
        className={`w-5 h-5 absolute transition-all duration-300 text-periwinkle-500 ${
          isDark ? "opacity-0 -rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
        }`}
      />
      <Moon
        className={`w-5 h-5 absolute transition-all duration-300 text-lavender-400 ${
          isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"
        }`}
      />
    </button>
  );
}
