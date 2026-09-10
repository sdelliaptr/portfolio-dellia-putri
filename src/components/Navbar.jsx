import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { personal } from "../data/personal";
import { useActiveSection } from "../lib/useActiveSection";

const LINKS = [
  { id: "home", label: "Beranda" },
  { id: "about", label: "Tentang Saya" },
  { id: "education", label: "Pendidikan" },
  { id: "experience", label: "Pengalaman" },
  { id: "skills", label: "Keahlian" },
  { id: "projects", label: "Proyek" },
  { id: "certifications", label: "Sertifikat" },
  { id: "contact", label: "Kontak" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(LINKS.map((l) => l.id));

  const handleNavClick = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl mt-3 sm:mt-4 section-pad">
        <nav className="card-surface backdrop-blur-xl bg-white/70 dark:bg-surface-dark-card/70 rounded-2xl shadow-soft dark:shadow-soft-dark px-4 sm:px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 font-display font-semibold text-lg text-ink dark:text-ink-inverted"
          >
            <span className="w-9 h-9 rounded-xl bg-grad-brand text-white flex items-center justify-center text-sm">
              {personal.initials}
            </span>
            <span className="hidden sm:inline">{personal.name.split(" ")[0]}</span>
          </button>

          <ul className="hidden lg:flex items-center gap-1">
            {LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3.5 py-2 text-sm rounded-full transition-colors ${
                    active === link.id
                      ? "text-periwinkle-600 dark:text-periwinkle-300 bg-periwinkle-50 dark:bg-periwinkle-500/10 font-medium"
                      : "text-ink-soft dark:text-ink-inverted-soft hover:text-ink dark:hover:text-ink-inverted"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden w-11 h-11 rounded-full flex items-center justify-center card-surface"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 card-surface rounded-2xl shadow-soft dark:shadow-soft-dark p-3 flex flex-col gap-1">
            {LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-4 py-3 rounded-xl text-sm transition-colors ${
                  active === link.id
                    ? "text-periwinkle-600 dark:text-periwinkle-300 bg-periwinkle-50 dark:bg-periwinkle-500/10 font-medium"
                    : "text-ink-soft dark:text-ink-inverted-soft"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}