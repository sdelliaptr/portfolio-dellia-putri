import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="section-pad py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium text-periwinkle-600 dark:text-periwinkle-300 mb-3">
          Proyek
        </p>

        <h2 className="text-3xl sm:text-4xl font-semibold text-ink dark:text-ink-inverted mb-3 max-w-lg">
          Proyek Pilihan
        </h2>

        <p className="text-ink-soft dark:text-ink-inverted-soft max-w-xl mb-14">
          Lihat lebih dekat berbagai proyek yang saya kerjakan, alasan di
          balik pembuatannya, serta peran saya dalam setiap proyek.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setActive} />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}