import { Briefcase } from "lucide-react";
import { projects } from "../data/projects";

export default function Experience() {
  return (
    <section id="experience" className="section-pad py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium text-periwinkle-600 dark:text-periwinkle-300 mb-3">
          Pengalaman
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-ink dark:text-ink-inverted mb-3">
          Proyek & Pengalaman Relevan
        </h2>
        <p className="text-ink-soft dark:text-ink-inverted-soft max-w-xl mb-14">
          Pengalaman akademik dan penerapan yang mencakup pengembangan sistem web, analisis data, dan perancangan sistem.
        </p>

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[9px] sm:left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-lavender-400 via-periwinkle-400 to-transparent" />

          <div className="space-y-8">
            {projects.map((p) => (
              <div key={p.id} className="relative">
                <span className="absolute -left-8 sm:-left-10 top-1.5 w-5 h-5 rounded-full bg-surface-light dark:bg-surface-dark border-2 border-lavender-500 flex items-center justify-center">
                  <Briefcase className="w-2.5 h-2.5 text-lavender-500" />
                </span>

                <div className="card-surface rounded-2xl p-6 shadow-soft dark:shadow-soft-dark">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-display font-semibold text-lg text-ink dark:text-ink-inverted">
                        {p.role}
                      </h3>
                      <p className="text-sm text-ink-soft dark:text-ink-inverted-soft">
                        {p.name} · {p.org}
                      </p>
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-periwinkle-50 dark:bg-periwinkle-500/10 text-periwinkle-600 dark:text-periwinkle-300 whitespace-nowrap">
                      {p.period}
                    </span>
                  </div>
                  <p className="text-xs uppercase tracking-wide text-ink-soft/70 dark:text-ink-inverted-soft/70 mb-3">
                    {p.context}
                  </p>
                  <ul className="space-y-1.5">
                    {p.features.slice(0, 3).map((f, i) => (
                      <li
                        key={i}
                        className="text-sm text-ink-soft dark:text-ink-inverted-soft leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-periwinkle-400"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
