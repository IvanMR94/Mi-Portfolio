import Image from "next/image";
import SectionHeader from "./SectionHeader";
import TestimonialsSection from "./TestimonialsSection";
import { ExternalLinkIcon, EyeIcon, GithubIcon } from "./icons";

type Category = "Frontend" | "Backend";

type Project = {
  title: string;
  category: Category;
  description: string;
  tags: string[];
  deploy: string;
  repo: string;
  monogram: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "PhysaFlow",
    category: "Backend",
    description:
      "Aplicación web orientada al análisis de capacidad en centros de datos de IA. Proyecto colaborativo en el que desarrollé e integré funcionalidades de IA conversacional con RAG, respuestas en streaming e integración con APIs.",
    tags: ["Next.js", "TypeScript", "Vercel AI SDK", "Groq", "Git", "GitHub"],
    deploy: "https://physaflow-report.vercel.app/reports/stranded-capacity-index",
    repo: "https://github.com/IvanMR94/Physaflow-report",
    monogram: "PF",
    image: "/PhysaFlow.jpg",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article>
      <a
        href={project.deploy}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden rounded-xl border border-zinc-800"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-950 to-blue-950">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="select-none text-5xl font-bold tracking-tight text-zinc-700 transition-colors duration-300 group-hover:text-zinc-600">
                {project.monogram}
              </span>
            </div>
          )}
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/0 transition-colors duration-300 group-hover:bg-zinc-950/75">
          <span className="flex h-14 w-14 scale-90 items-center justify-center rounded-2xl border border-zinc-700/70 bg-zinc-900/90 text-blue-400 opacity-0 shadow-xl transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
            <EyeIcon className="h-6 w-6" />
          </span>
        </div>
      </a>

      <h3 className="mt-4 text-base font-bold text-zinc-50">
        {project.title} <span className="text-zinc-300">• {project.category}</span>
      </h3>
      <p className="mt-2 text-xs uppercase tracking-wide text-zinc-500">
        {project.tags.map((tag) => (
          <span key={tag}>| {tag} </span>
        ))}
      </p>
      <p className="mt-3 text-sm leading-6 text-zinc-400">
        {project.description}
      </p>
      <a
        href={project.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
      >
        <GithubIcon className="h-4 w-4" />
        Ver código en GitHub
        <ExternalLinkIcon className="h-3.5 w-3.5" />
      </a>
    </article>
  );
}

export default function PortfolioSection() {
  return (
    <div className="space-y-7">
      <SectionHeader title="Portfolio" />

      <p className="text-sm text-zinc-400">🚀 ¿Te gustan los proyectos?</p>

      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="pt-12">
        <TestimonialsSection />
      </div>
    </div>
  );
}