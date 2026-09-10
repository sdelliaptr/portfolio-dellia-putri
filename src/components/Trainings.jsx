import { BookOpenCheck } from "lucide-react";
import { trainings } from "../data/trainings";

export default function Trainings() {
  return (
    <section className="section-pad py-24 sm:py-32 bg-periwinkle-50/40 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium text-periwinkle-600 dark:text-periwinkle-300 mb-3">
          Pengembangan Profesional
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-ink dark:text-ink-inverted mb-14 max-w-lg">
          Pelatihan &amp; Program
        </h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {trainings.map((t) => (
            <div
              key={t.id}
              className="card-surface rounded-2xl p-6 shadow-soft dark:shadow-soft-dark"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="inline-flex w-9 h-9 rounded-xl bg-periwinkle-50 dark:bg-periwinkle-500/15 items-center justify-center text-periwinkle-600 dark:text-periwinkle-300 shrink-0">
                  <BookOpenCheck className="w-[18px] h-[18px]" />
                </span>
                <span className="text-xs font-medium text-ink-soft dark:text-ink-inverted-soft whitespace-nowrap pt-2">
                  {t.period}
                </span>
              </div>
              <h3 className="font-display font-semibold text-base text-ink dark:text-ink-inverted mb-1">
                {t.title}
              </h3>
              <p className="text-sm text-ink-soft dark:text-ink-inverted-soft mb-4">{t.issuer}</p>
              <ul className="space-y-1.5">
                {t.points.map((pt, i) => (
                  <li
                    key={i}
                    className="text-sm text-ink-soft dark:text-ink-inverted-soft leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-periwinkle-400"
                  >
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
