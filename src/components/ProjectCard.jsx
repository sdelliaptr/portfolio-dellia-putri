import { ArrowUpRight, ExternalLink } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";
import TechIcon from "./TechIcon";

export default function ProjectCard({ project, onOpen }) {
  return (
    <div className="group card-surface rounded-2xl overflow-hidden shadow-soft dark:shadow-soft-dark hover:-translate-y-1.5 transition-transform duration-300 flex flex-col">
      <button onClick={() => onOpen(project)} className="text-left">
        <div className="relative h-44 overflow-hidden">
          {project.images[0]?.src ? (
            <img
              src={project.images[0].src}
              alt={project.images[0].label || project.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <PlaceholderImage
              label={project.images[0]?.label}
              className="w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
          )}
        </div>
      </button>

      <div className="p-5 flex flex-col flex-1">
        <span className="text-xs font-medium text-periwinkle-600 dark:text-periwinkle-300 mb-2">
          {project.category}
        </span>

        <button onClick={() => onOpen(project)} className="text-left">
          <h3 className="font-display font-semibold text-base text-ink dark:text-ink-inverted mb-1.5 leading-snug">
            {project.name}
          </h3>
        </button>

        <p className="text-sm text-ink-soft dark:text-ink-inverted-soft leading-relaxed mb-4 line-clamp-2">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-lavender-50 dark:bg-lavender-500/10 text-lavender-600 dark:text-lavender-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between">
          <button
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink dark:text-ink-inverted hover:text-periwinkle-600 dark:hover:text-periwinkle-300 transition-colors"
          >
            Lihat Proyek
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center bg-black/5 dark:bg-white/10 text-ink dark:text-ink-inverted"
                aria-label="Lihat di GitHub"
              >
                <TechIcon icon="github" className="w-4 h-4" />
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center bg-black/5 dark:bg-white/10 text-ink dark:text-ink-inverted"
                aria-label="Lihat demo langsung"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}