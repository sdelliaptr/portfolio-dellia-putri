import { Users2 } from "lucide-react";
import { organizations } from "../data/organizations";

export default function Organizations() {
  return (
    <section className="section-pad py-24 sm:py-32 bg-periwinkle-50/40 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium text-periwinkle-600 dark:text-periwinkle-300 mb-3">
          Organisasi
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-ink dark:text-ink-inverted mb-14">
          Aktivitas Organisasi
        </h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {organizations.map((org) => (
            <div
              key={org.id}
              className="card-surface rounded-2xl p-6 shadow-soft dark:shadow-soft-dark"
            >
              <span className="inline-flex w-10 h-10 rounded-xl bg-lavender-50 dark:bg-lavender-500/15 items-center justify-center text-lavender-600 dark:text-lavender-300 mb-4">
                <Users2 className="w-5 h-5" />
              </span>
              <h3 className="font-display font-semibold text-lg text-ink dark:text-ink-inverted mb-1">
                {org.role}
              </h3>
              <p className="text-sm text-ink-soft dark:text-ink-inverted-soft mb-1">{org.org}</p>
              <p className="text-xs text-periwinkle-600 dark:text-periwinkle-300 font-medium mb-4">
                {org.period}
              </p>
              <ul className="space-y-1.5">
                {org.points.map((pt, i) => (
                  <li
                    key={i}
                    className="text-sm text-ink-soft dark:text-ink-inverted-soft leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-lavender-400"
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
