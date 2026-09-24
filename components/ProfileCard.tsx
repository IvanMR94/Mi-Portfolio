"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ChevronDownIcon,
  FileIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "./icons";

const links = [
  {
    label: "Gmail",
    href: "mailto:iv4n.m0reno@gmail.com",
    value: "iv4n.m0reno@gmail.com",
    icon: MailIcon,
    external: false,
  },
  {
    label: "Curriculum",
    href: "https://drive.google.com/file/d/1m7FK0aPwyvWDD4UT5KBGykOP0EvpUjK0/view?usp=sharing",
    value: "🔗 Descargá mi CV",
    icon: FileIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ivan-morenodev/",
    value: "🔗 Visitá mi perfil",
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/IvanMR94",
    value: "🔗 Visitá mi perfil",
    icon: GithubIcon,
    external: true,
  },
];

const ROLE = "Desarrollador Full Stack";

export default function ProfileCard() {
  const [open, setOpen] = useState(false);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const t = setTimeout(() => setTyped(ROLE), 0);
      return () => clearTimeout(t);
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(ROLE.slice(0, i));
      if (i >= ROLE.length) clearInterval(id);
    }, 65);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center">
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl ring-1 ring-blue-400/40 lg:h-40 lg:w-40 lg:rounded-2xl">
          <Image
            src="/yo.jpg"
            alt="Ivan Moreno"
            fill
            sizes="(max-width: 1024px) 96px, 160px"
            className="object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        <div className="min-w-0 flex-1 text-center lg:flex-none">
          <h1 className="pr-5 text-xl font-bold tracking-tight text-zinc-50 sm:text-2xl lg:pr-0">
            Ivan Moreno
          </h1>
          <div className="mt-2 flex justify-center">
            <span className="inline-block rounded-md border border-blue-500/40 bg-blue-500/10 px-2 py-1 text-[11px] font-semibold text-blue-300 shadow-[0_0_18px_-6px_rgba(59,130,235,0.6)] [text-shadow:0_0_12px_rgba(59,130,235,0.5)] sm:px-3 sm:text-xs lg:text-sm">
              👨‍💻 {typed}
              <span className="ml-0.5 inline-block animate-[cursor-blink_1s_step-end_infinite] font-normal text-blue-100">
                |
              </span>
            </span>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Mostrar contactos"
        className={`absolute right-0 top-0 grid h-9 w-9 place-items-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-100 lg:hidden ${
          open ? "rotate-180" : ""
        }`}
      >
        <ChevronDownIcon className="h-4 w-4" />
      </button>

      <div className={`mt-5 ${open ? "block" : "hidden"} lg:block`}>
        <div className="mb-5 h-px bg-zinc-800" />

        <div className="flex flex-col gap-4">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-3"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-zinc-800 bg-zinc-900 text-blue-400 transition-colors group-hover:border-blue-500/50">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="min-w-0 text-left">
                  <span className="block text-[10px] font-medium uppercase tracking-wider text-zinc-500 underline decoration-zinc-600 underline-offset-2 transition-colors group-hover:text-blue-400">
                    {link.label}
                  </span>
                  <span className="block truncate text-sm text-zinc-300 transition-colors group-hover:text-zinc-100">
                    {link.value}
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
