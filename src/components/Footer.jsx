import { Mail } from "lucide-react";
import { personal } from "../data/personal";
import LinkedInIcon from "./LinkedInIcon";

const LINKS = [
  { id: "home", label: "Beranda" },
  { id: "about", label: "Tentang Saya" },
  { id: "projects", label: "Proyek" },
  { id: "contact", label: "Kontak" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-pad py-12 border-t border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display font-semibold text-ink dark:text-ink-inverted">
            {personal.name}
          </p>
          <p className="text-sm text-ink-soft dark:text-ink-inverted-soft">
            {personal.tagline}
          </p>
        </div>

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          {LINKS.map((l) => (
            <li key={l.id}>
              <button
                onClick={() =>
                  document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-ink-soft dark:text-ink-inverted-soft hover:text-periwinkle-600 dark:hover:text-periwinkle-300 transition-colors"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="w-9 h-9 rounded-full flex items-center justify-center card-surface text-ink-soft dark:text-ink-inverted-soft hover:text-periwinkle-600 dark:hover:text-periwinkle-300"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-full flex items-center justify-center card-surface text-ink-soft dark:text-ink-inverted-soft hover:text-periwinkle-600 dark:hover:text-periwinkle-300"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>
        </div>
      </div>

      <p className="text-center text-xs text-ink-soft dark:text-ink-inverted-soft mt-10">
        © {year} {personal.name}. All rights reserved.
      </p>
    </footer>
  );
}
