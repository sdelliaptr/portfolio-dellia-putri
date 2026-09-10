import { useEffect, useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Maximize2,
} from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";
import TechIcon from "./TechIcon";

export default function ProjectModal({ project, onClose }) {
  const [index, setIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    setIndex(0);
    setFullscreen(false);
  }, [project]);

  useEffect(() => {
    if (!project) return;

    const onKey = (e) => {
      if (e.key === "Escape") {
        fullscreen ? setFullscreen(false) : onClose();
      }

      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project, fullscreen]);

  if (!project) return null;

  const images = project.images || [];

  const next = () => {
    if (images.length === 0) return;
    setIndex((i) => (i + 1) % images.length);
  };

  const prev = () => {
    if (images.length === 0) return;
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-start sm:items-center justify-center p-0 sm:p-6">
      <div
        className="absolute inset-0 bg-ink/60 dark:bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full sm:max-w-3xl max-h-[100dvh] sm:max-h-[88vh] overflow-y-auto card-surface sm:rounded-3xl shadow-soft dark:shadow-soft-dark">
        {/* Tombol Tutup */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-white/90 dark:bg-surface-dark-card/90 text-ink dark:text-ink-inverted shadow-soft"
          aria-label="Tutup detail proyek"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Galeri */}
        <div className="relative h-64 sm:h-80 group">
          {images[index]?.src ? (
            <img
              src={images[index].src}
              alt={images[index].label || project.name}
              className="w-full h-full object-contain"
            />
          ) : (
            <PlaceholderImage
              label={images[index]?.label}
              className="w-full h-full"
            />
          )}

          {/* Tombol Sebelumnya */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 dark:bg-surface-dark-card/90 flex items-center justify-center text-ink dark:text-ink-inverted shadow-soft"
            aria-label="Gambar sebelumnya"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Tombol Berikutnya */}
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 dark:bg-surface-dark-card/90 flex items-center justify-center text-ink dark:text-ink-inverted shadow-soft"
            aria-label="Gambar berikutnya"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Tombol Fullscreen */}
          <button
            onClick={() => setFullscreen(true)}
            className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/90 dark:bg-surface-dark-card/90 flex items-center justify-center text-ink dark:text-ink-inverted shadow-soft"
            aria-label="Pratinjau layar penuh"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Thumbnail */}
        <div className="flex gap-2 px-6 pt-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-14 flex-1 rounded-lg overflow-hidden border-2 transition-colors ${
                i === index
                  ? "border-periwinkle-500"
                  : "border-transparent"
              }`}
            >
              {img.src ? (
                <img
                  src={img.src}
                  alt={img.label || project.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <PlaceholderImage
                  label={img.label}
                  className="w-full h-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Detail */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <span className="text-xs font-medium text-periwinkle-600 dark:text-periwinkle-300">
              {project.category}
            </span>

            <h3 className="font-display text-2xl font-semibold text-ink dark:text-ink-inverted mt-1">
              {project.name}
            </h3>

            <p className="text-sm text-ink-soft dark:text-ink-inverted-soft mt-1">
              {project.role} · {project.org} · {project.period}
            </p>
          </div>

          {/* Teknologi */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-medium px-3 py-1 rounded-full bg-lavender-50 dark:bg-lavender-500/10 text-lavender-600 dark:text-lavender-300"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Detail Proyek */}
          <DetailBlock
            title="Ringkasan"
            text={project.summary}
          />

          <DetailBlock
            title="Masalah / Tujuan"
            text={project.purpose}
          />

          <DetailBlock
            title="Solusi"
            text={project.solution}
          />

          {/* Fitur */}
          <div>
            <h4 className="text-sm font-semibold text-ink dark:text-ink-inverted mb-2">
              Fitur
            </h4>

            <ul className="space-y-1.5">
              {project.features.map((f, i) => (
                <li
                  key={i}
                  className="text-sm text-ink-soft dark:text-ink-inverted-soft leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-periwinkle-400"
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <DetailBlock
            title="Peran Saya"
            text={project.myRole}
          />

          <DetailBlock
            title="Hasil / Pencapaian"
            text={project.outcome}
          />

          {/* Link */}
          {(project.github || project.demo) && (
            <div className="flex gap-3 pt-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/5 dark:bg-white/10 text-sm font-medium text-ink dark:text-ink-inverted"
                >
                  <TechIcon
                    icon="github"
                    className="w-4 h-4"
                  />
                  GitHub
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-grad-brand text-white text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo Langsung
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Fullscreen */}
      {fullscreen && (
        <div
          className="fixed inset-0 z-[70] bg-black/90 flex items-center justify-center p-6"
          onClick={() => setFullscreen(false)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white"
            onClick={() => setFullscreen(false)}
            aria-label="Tutup pratinjau layar penuh"
          >
            <X className="w-5 h-5" />
          </button>

          {images[index]?.src ? (
            <img
              src={images[index].src}
              alt={images[index].label || project.name}
              className="w-full max-w-5xl max-h-[85vh] object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <PlaceholderImage
              label={images[index]?.label}
              className="w-full max-w-3xl aspect-video rounded-2xl"
            />
          )}
        </div>
      )}
    </div>
  );
}

function DetailBlock({ title, text }) {
  if (!text) return null;

  return (
    <div>
      <h4 className="text-sm font-semibold text-ink dark:text-ink-inverted mb-1.5">
        {title}
      </h4>

      <p className="text-sm text-ink-soft dark:text-ink-inverted-soft leading-relaxed">
        {text}
      </p>
    </div>
  );
}