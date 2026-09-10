import { MapPin, Target, Compass } from "lucide-react";
import { personal } from "../data/personal";
import { education } from "../data/education";

export default function About() {
  return (
    <section id="about" className="section-pad py-24 sm:py-32">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-[0.7fr_1.3fr] gap-14 items-start">
        <div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden card-surface mb-6">
            {personal.aboutPhoto ? (
              <img
                src={personal.aboutPhoto}
                alt={personal.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-periwinkle-50 to-lavender-50 dark:from-periwinkle-500/15 dark:to-lavender-500/15">
                <span className="text-5xl font-semibold text-periwinkle-600 dark:text-periwinkle-300">
                  {personal.initials}
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 text-sm text-ink-soft dark:text-ink-inverted-soft mb-4">
            <MapPin className="w-4 h-4" />
            {personal.location}
          </div>
          <div className="flex flex-wrap gap-2">
            {personal.interests.map((i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-lavender-50 dark:bg-lavender-500/10 text-lavender-600 dark:text-lavender-300"
              >
                {i}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-periwinkle-600 dark:text-periwinkle-300 mb-3">
            Tentang Saya
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-ink dark:text-ink-inverted mb-6 max-w-lg">
            Senang memecahkan masalah, mengeksplorasi teknologi, dan mengubah ide menjadi solusi yang nyata.
          </h2>

          <p className="text-ink-soft dark:text-ink-inverted-soft leading-relaxed mb-6 max-w-lg">
            {personal.summary}
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card-surface rounded-2xl p-5">
              <span className="inline-flex w-9 h-9 rounded-xl bg-periwinkle-50 dark:bg-periwinkle-500/15 items-center justify-center text-periwinkle-600 dark:text-periwinkle-300 mb-3">
                <Compass className="w-[18px] h-[18px]" />
              </span>
              <p className="text-sm font-semibold text-ink dark:text-ink-inverted mb-1">
                Latar Belakang Pendidikan
              </p>
              <p className="text-sm text-ink-soft dark:text-ink-inverted-soft leading-relaxed">
                {education[0].program}, {education[0].institution} —{" "}
                {education[0].achievement}
              </p>
            </div>
            <div className="card-surface rounded-2xl p-5">
              <span className="inline-flex w-9 h-9 rounded-xl bg-lavender-50 dark:bg-lavender-500/15 items-center justify-center text-lavender-600 dark:text-lavender-300 mb-3">
                <Target className="w-[18px] h-[18px]" />
              </span>
              <p className="text-sm font-semibold text-ink dark:text-ink-inverted mb-1">
                Minat Karier
              </p>
              <p className="text-sm text-ink-soft dark:text-ink-inverted-soft leading-relaxed">
                Tertarik pada pengembangan web dan analisis data untuk menciptakan solusi yang fungsional dan berbasis data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}