import { GraduationCap } from "lucide-react";
import { education } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="section-pad py-24 sm:py-32 bg-periwinkle-50/40 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium text-periwinkle-600 dark:text-periwinkle-300 mb-3">
          Pendidikan
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-ink dark:text-ink-inverted mb-14">
          Perjalanan Pendidikan
        </h2>

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[9px] sm:left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-periwinkle-400 via-lavender-400 to-transparent" />

          <div className="space-y-10">
            {education.map((edu) => (
              <div key={edu.id} className="relative">
                <span className="absolute -left-8 sm:-left-10 top-1.5 w-5 h-5 rounded-full bg-surface-light dark:bg-surface-dark border-2 border-periwinkle-500 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-periwinkle-500" />
                </span>

                <div className="card-surface rounded-2xl p-6 shadow-soft dark:shadow-soft-dark">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-display font-semibold text-lg text-ink dark:text-ink-inverted">
                      {edu.institution}
                    </h3>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-lavender-50 dark:bg-lavender-500/10 text-lavender-600 dark:text-lavender-300">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm text-ink-soft dark:text-ink-inverted-soft mb-3">
                    {edu.location}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="inline-flex items-center gap-1.5 text-ink dark:text-ink-inverted font-medium">
                      <GraduationCap className="w-4 h-4 text-periwinkle-500" />
                      {edu.program}
                    </span>
                    <span className="text-ink-soft dark:text-ink-inverted-soft">
                      · {edu.achievement}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
