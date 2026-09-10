import { Award, FolderGit2, GraduationCap, Layers, Users } from "lucide-react";
import { education } from "../data/education";
import { projects } from "../data/projects";
import { certifications } from "../data/certifications";
import { tools } from "../data/skills";
import { organizations } from "../data/organizations";

const highlights = [
  {
    icon: GraduationCap,
    label: "Pendidikan",
    value: education[0].program,
    detail: education[0].achievement,
  },
  {
    icon: FolderGit2,
    label: "Proyek & Pengalaman Relevan",
    value: `${projects.length} selesai`,
    detail: "Sistem Web, Analisis Data & UI/UX",
  },
  {
    icon: Layers,
    label: "Alat & Teknologi",
    value: `${tools.length} digunakan`,
    detail: "Web, Data & Desain",
  },
  {
    icon: Award,
    label: "Sertifikasi",
    value: `${certifications.length} Sertifikat`,
    detail: certifications[0]?.issuer ?? "",
  },
  {
    icon: Users,
    label: "Organisasi",
    value: `${organizations.length} peran`,
    detail: "Kegiatan Kampus & Sekolah",
  },
];

export default function Highlights() {
  return (
    <section className="relative -mt-10 sm:-mt-14 section-pad">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
          {highlights.map(({ icon: Icon, label, value, detail }) => (
            <div
              key={label}
              className="card-surface rounded-2xl p-4 sm:p-5 shadow-soft dark:shadow-soft-dark hover:-translate-y-1 transition-transform"
            >
              <span className="inline-flex w-9 h-9 rounded-xl bg-periwinkle-50 dark:bg-periwinkle-500/15 items-center justify-center text-periwinkle-600 dark:text-periwinkle-300 mb-3">
                <Icon className="w-[18px] h-[18px]" />
              </span>
              <p className="text-xs text-ink-soft dark:text-ink-inverted-soft mb-1">{label}</p>
              <p className="text-sm font-semibold text-ink dark:text-ink-inverted leading-snug">
                {value}
              </p>
              {detail && (
                <p className="text-xs text-ink-soft dark:text-ink-inverted-soft mt-0.5">{detail}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
