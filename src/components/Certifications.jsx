import { useState } from "react";
import { Award, X, ExternalLink } from "lucide-react";
import { certifications } from "../data/certifications";

export default function Certifications() {
  const [active, setActive] = useState(null);

  return (
    <section id="certifications" className="section-pad py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium text-periwinkle-600 dark:text-periwinkle-300 mb-3">
          Sertifikat
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-ink dark:text-ink-inverted mb-14 max-w-lg">
          Sertifikasi
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <button
              key={cert.id}
              onClick={() => setActive(cert)}
              className="group text-left card-surface rounded-2xl overflow-hidden shadow-soft dark:shadow-soft-dark hover:-translate-y-1 transition-transform"
            >
              <div className="h-36 bg-gradient-to-br from-periwinkle-100 via-lavender-50 to-lavender-100 dark:from-periwinkle-500/10 dark:via-lavender-500/5 dark:to-lavender-500/10 flex items-center justify-center">
                {cert.image ? (
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
                ) : (
                  <Award className="w-10 h-10 text-periwinkle-400 dark:text-periwinkle-300/70" strokeWidth={1.5} />
                )}
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-base text-ink dark:text-ink-inverted mb-1 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-sm text-ink-soft dark:text-ink-inverted-soft mb-1">{cert.issuer}</p>
                <p className="text-xs text-periwinkle-600 dark:text-periwinkle-300 font-medium">
                  {cert.period}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
          <div
            className="absolute inset-0 bg-ink/60 dark:bg-black/70 backdrop-blur-sm"
            onClick={() => setActive(null)}
          />
          <div className="relative w-full max-w-md card-surface rounded-3xl shadow-soft dark:shadow-soft-dark overflow-hidden">
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center bg-white/90 dark:bg-surface-dark-card/90 text-ink dark:text-ink-inverted"
              aria-label="Close certificate preview"
            >
              <X className="w-[18px] h-[18px]" />
            </button>
            <div className="h-56 bg-gradient-to-br from-periwinkle-100 via-lavender-50 to-lavender-100 dark:from-periwinkle-500/10 dark:via-lavender-500/5 dark:to-lavender-500/10 flex items-center justify-center">
              {active.image ? (
                <img src={active.image} alt={active.title} className="w-full h-full object-cover" />
              ) : (
                <Award className="w-14 h-14 text-periwinkle-400 dark:text-periwinkle-300/70" strokeWidth={1.5} />
              )}
            </div>
            <div className="p-6">
              <h3 className="font-display font-semibold text-lg text-ink dark:text-ink-inverted mb-1">
                {active.title}
              </h3>
              <p className="text-sm text-ink-soft dark:text-ink-inverted-soft mb-1">{active.issuer}</p>
              <p className="text-xs text-periwinkle-600 dark:text-periwinkle-300 font-medium mb-4">
                {active.period}
              </p>
              {active.credentialId && (
                <p className="text-xs text-ink-soft dark:text-ink-inverted-soft mb-2">
                  Credential ID: {active.credentialId}
                </p>
              )}
              {active.credentialUrl && (
                <a
                  href={active.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-periwinkle-600 dark:text-periwinkle-300"
                >
                  View credential <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
