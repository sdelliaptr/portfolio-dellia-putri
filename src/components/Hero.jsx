import { ArrowDown, Download, GraduationCap, Sparkles } from "lucide-react";
import { personal } from "../data/personal";
import { education } from "../data/education";

export default function Hero() {
  const currentEducation = education[0];

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32 section-pad"
    >
      <div className="pointer-events-none absolute inset-0 bg-grad-glow opacity-70 dark:opacity-40" />

      <div className="relative mx-auto max-w-6xl grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        {/* Left: copy */}
        <div>
          <p className="text-sm font-medium tracking-wide text-periwinkle-600 dark:text-periwinkle-300 mb-5">
            Hai, Saya
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] font-semibold text-ink dark:text-ink-inverted mb-6">
            {personal.name}
          </h1>
          <p className="text-lg sm:text-xl text-gradient font-display font-medium mb-6">
            {personal.headline}
          </p>
          <p className="text-ink-soft dark:text-ink-inverted-soft text-base sm:text-lg leading-relaxed max-w-xl mb-9">
            {personal.tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-grad-brand text-white font-medium shadow-soft dark:shadow-soft-dark hover:opacity-90 transition-opacity"
            >
              Lihat Proyek Saya
              <ArrowDown className="w-4 h-4" />
            </button>
            <a
              href="/CV_Master_DelliaPutri.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full card-surface font-medium text-ink dark:text-ink-inverted hover:border-periwinkle-400/50 transition-colors"
            >
              Download CV
              <Download className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right: photo / avatar presentation */}
        <div className="relative mx-auto lg:mx-0 w-full max-w-sm">
          <div className="absolute -inset-6 bg-grad-brand rounded-[3rem] blur-3xl opacity-30 dark:opacity-40 animate-gradient-move bg-[length:200%_200%]" />

          <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden card-surface shadow-soft dark:shadow-soft-dark">
            {personal.photo ? (
              <img
                src={personal.photo}
                alt={personal.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-periwinkle-100 to-lavender-100 dark:from-periwinkle-500/10 dark:to-lavender-500/10">
                <span className="font-display text-7xl font-semibold text-gradient">
                  {personal.initials}
                </span>
              </div>
            )}
          </div>

          {/* Floating glass badge: education */}
          <div className="absolute -left-6 -bottom-6 animate-float card-surface backdrop-blur-xl bg-white/80 dark:bg-surface-dark-card/80 rounded-2xl shadow-soft dark:shadow-soft-dark px-4 py-3 flex items-center gap-3 max-w-[220px]">
            <span className="w-9 h-9 rounded-xl bg-periwinkle-50 dark:bg-periwinkle-500/15 flex items-center justify-center text-periwinkle-600 dark:text-periwinkle-300 shrink-0">
              <GraduationCap className="w-5 h-5" />
            </span>
            <div className="leading-tight">
              <p className="text-xs text-ink-soft dark:text-ink-inverted-soft">Sistem Informasi</p>
              <p className="text-sm font-medium text-ink dark:text-ink-inverted">
                {currentEducation.achievement}
              </p>
            </div>
          </div>

          {/* Floating glass badge: focus areas */}
          <div
            className="absolute -right-4 top-8 animate-float card-surface backdrop-blur-xl bg-white/80 dark:bg-surface-dark-card/80 rounded-2xl shadow-soft dark:shadow-soft-dark px-4 py-3 flex items-center gap-2"
            style={{ animationDelay: "1.5s" }}
          >
            <Sparkles className="w-4 h-4 text-lavender-500 dark:text-lavender-300 shrink-0" />
            <p className="text-sm font-medium text-ink dark:text-ink-inverted">Web · Data · UI/UX</p>
          </div>
        </div>
      </div>
    </section>
  );
}
