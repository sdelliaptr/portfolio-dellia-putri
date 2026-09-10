import { Database, Palette, BrainCircuit, FileSpreadsheet, Wrench } from "lucide-react";
import brandIcons from "../data/brandIconData.json";

const FALLBACKS = { Database, Palette, BrainCircuit, FileSpreadsheet, Wrench };

// `icon` is a lowercase simple-icons slug (e.g. "python", "github") looked up
// in a small local dataset; `fallback` is a lucide-react icon name used when
// no brand mark is available.
export default function TechIcon({ icon, fallback, className = "w-6 h-6" }) {
  const brand = icon && brandIcons[icon];

  if (brand?.path) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        className={className}
        fill="currentColor"
        aria-label={brand.title}
      >
        <path d={brand.path} />
      </svg>
    );
  }

  const Fallback = FALLBACKS[fallback] || Wrench;
  return <Fallback className={className} strokeWidth={1.75} />;
}
