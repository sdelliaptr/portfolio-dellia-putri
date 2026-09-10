import { ImageIcon } from "lucide-react";

// Shown until a real screenshot is added at the referenced path.
export default function PlaceholderImage({ label, className = "" }) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-periwinkle-100 via-lavender-50 to-lavender-100 dark:from-periwinkle-500/10 dark:via-lavender-500/5 dark:to-lavender-500/10 ${className}`}
    >
      <ImageIcon className="w-7 h-7 text-periwinkle-400 dark:text-periwinkle-300/70" strokeWidth={1.5} />
      {label && (
        <span className="text-xs font-medium text-ink-soft dark:text-ink-inverted-soft px-3 text-center">
          {label}
        </span>
      )}
    </div>
  );
}
