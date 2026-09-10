import { skillDomains, tools, softSkills, languages } from "../data/skills";
import TechIcon from "./TechIcon";

export default function Skills() {
  return (
    <section id="skills" className="section-pad py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium text-periwinkle-600 dark:text-periwinkle-300 mb-3">
          Keahlian
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-ink dark:text-ink-inverted mb-14 max-w-lg">
          Keahlian yang Saya Kuasai
        </h2>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12">
          <div>
            <h3 className="text-sm font-semibold text-ink dark:text-ink-inverted mb-4 uppercase tracking-wide">
              Keahlian Teknis
            </h3>
            <div className="flex flex-wrap gap-2 mb-10">
              {skillDomains.map((d) => (
                <span
                  key={d}
                  className="px-3.5 py-2 rounded-xl text-sm font-medium card-surface text-ink dark:text-ink-inverted"
                >
                  {d}
                </span>
              ))}
            </div>

            <h3 className="text-sm font-semibold text-ink dark:text-ink-inverted mb-4 uppercase tracking-wide">
              Keahlian Non-Teknis
            </h3>
            <div className="flex flex-wrap gap-2 mb-10">
              {softSkills.map((s) => (
                <span
                  key={s}
                  className="px-3.5 py-2 rounded-xl text-sm text-periwinkle-700 dark:text-periwinkle-200 bg-periwinkle-50 dark:bg-periwinkle-500/10"
                >
                  {s}
                </span>
              ))}
            </div>

            <h3 className="text-sm font-semibold text-ink dark:text-ink-inverted mb-4 uppercase tracking-wide">
              Bahasa
            </h3>
            <div className="space-y-2">
              {languages.map((l) => (
                <div key={l.name} className="flex items-center justify-between text-sm max-w-xs">
                  <span className="text-ink dark:text-ink-inverted font-medium">{l.name}</span>
                  <span className="text-ink-soft dark:text-ink-inverted-soft">{l.level}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink dark:text-ink-inverted mb-4 uppercase tracking-wide">
              Alat &amp; Teknologi
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="group card-surface rounded-2xl p-4 flex flex-col items-center gap-2.5 text-center hover:-translate-y-1 hover:border-periwinkle-400/40 transition-all"
                >
                  <TechIcon
                    icon={tool.icon}
                    fallback={tool.fallback}
                    className="w-7 h-7 text-ink-soft dark:text-ink-inverted-soft group-hover:text-periwinkle-500 dark:group-hover:text-periwinkle-300 transition-colors"
                  />
                  <span className="text-xs font-medium text-ink dark:text-ink-inverted leading-tight">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
