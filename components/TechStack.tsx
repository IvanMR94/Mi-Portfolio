import type { ReactNode } from "react";
import {
  siAngular,
  siCypress,
  siDocker,
  siGit,
  siGithub,
  siJavascript,
  siMongodb,
  siMysql,
  siNextdotjs,
  siPostman,
  siPython,
  siReact,
  siSelenium,
  siTypescript,
} from "simple-icons";

function brandIcon(path: string) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-7 w-7"
      fill="currentColor"
    >
      <path d={path} />
    </svg>
  );
}

function JavaIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-7 w-7"
      fill="currentColor"
    >
      <path d="M8.5 3.5q1.1 1.1 0 2.2q-1.1 1.1 0 2.2M12.3 3.5q1.1 1.1 0 2.2q-1.1 1.1 0 2.2" />
      <path d="M4.2 9.4h11.6v4.8c0 3.4-2.6 6.2-5.8 6.2s-5.8-2.8-5.8-6.2z" />
      <path
        d="M15.8 10.8h1.4a2.7 2.7 0 0 1 0 5.4h-1.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M2.8 21.8h14.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

const technologies: { label: string; icon: ReactNode }[] = [
  { label: "JavaScript", icon: brandIcon(siJavascript.path) },
  { label: "Java", icon: <JavaIcon /> },
  { label: "TypeScript", icon: brandIcon(siTypescript.path) },
  { label: "Python", icon: brandIcon(siPython.path) },
  { label: "Angular", icon: brandIcon(siAngular.path) },
  { label: "React", icon: brandIcon(siReact.path) },
  { label: "Next.js", icon: brandIcon(siNextdotjs.path) },
  { label: "Docker", icon: brandIcon(siDocker.path) },
  { label: "Git", icon: brandIcon(siGit.path) },
  { label: "GitHub", icon: brandIcon(siGithub.path) },
  { label: "MySQL", icon: brandIcon(siMysql.path) },
  { label: "MongoDB", icon: brandIcon(siMongodb.path) },
  { label: "Postman", icon: brandIcon(siPostman.path) },
  { label: "Cypress", icon: brandIcon(siCypress.path) },
  { label: "Selenium", icon: brandIcon(siSelenium.path) },
];

export default function TechStack() {
  return (
    <div>
      <h3 className="text-lg font-bold text-zinc-100">Tecnologías</h3>
      <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-5">
        {technologies.map((tech) => (
          <div
            key={tech.label}
            className="group flex flex-col items-center gap-2 rounded-xl border border-zinc-800/80 bg-zinc-900/40 px-2 py-4 transition-all duration-300 hover:border-blue-500/40 hover:bg-zinc-900/70 hover:shadow-[0_0_26px_-8px_rgba(59,130,235,0.55)]"
          >
            <span className="text-zinc-400 transition-colors duration-300 group-hover:text-blue-400">
              {tech.icon}
            </span>
            <span className="text-center text-[11px] text-zinc-500 transition-colors duration-300 group-hover:text-zinc-200">
              {tech.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}