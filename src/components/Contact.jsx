import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { personal } from "../data/personal";
import LinkedInIcon from "./LinkedInIcon";

const links = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "dellia-putri-santoso",
    href: personal.linkedin,
    icon: LinkedInIcon,
  },
  {
    label: "Phone",
    value: personal.phone,
    href: personal.whatsapp,
    icon: Phone,
  },
].filter((l) => l.value);

export default function Contact() {
  return (
    <section id="contact" className="section-pad py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-grad-brand p-10 sm:p-16 text-center">
          <div className="absolute inset-0 bg-grad-glow opacity-60" />
          <div className="relative">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-4">
              Mari Bekerja Sama
            </h2>
            <p className="text-white/85 max-w-lg mx-auto mb-10 leading-relaxed">
              Terbuka untuk kesempatan magang, pekerjaan tingkat pemula, maupun 
              proyek lepas di bidang pengembangan web dan analisis data. 
              Jangan ragu untuk menghubungi saya.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {links.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "LinkedIn" || label === "Phone" ? "_blank" : undefined}
                  rel={label === "LinkedIn" || label === "Phone" ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-white/95 hover:bg-white text-ink text-sm font-medium transition-colors"
                >
                  <Icon className="w-4 h-4 text-periwinkle-600" />
                  {value}
                  <ArrowUpRight className="w-3.5 h-3.5 text-ink-soft" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}