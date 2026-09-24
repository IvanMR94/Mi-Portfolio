import type { ReactNode } from "react";
import SectionHeader from "./SectionHeader";
import { AwardIcon, BriefcaseIcon, GraduationCapIcon } from "./icons";

const experiences = [
  {
    company: "JGO Technology",
    period: "Ago. 2026 — Actualidad · Remoto",
    role: "Desarrollador Web",
    bullets: [
      "Participación en proyectos de desarrollo web dentro de un entorno profesional, aplicando buenas prácticas de desarrollo, trabajo colaborativo y metodologías ágiles.",
      "Desarrollo y mantenimiento de interfaces web, integración de tecnologías frontend y resolución de requerimientos orientados a la experiencia de usuario.",
    ],
    tags: [
      "WordPress",
      "Elementor",
      "HTML",
      "CSS",
      "JavaScript",
      "SEO",
      "Accesibilidad web",
    ],
  },
  {
    company: "Policía de la Provincia de Córdoba",
    period: "Mar. 2023 — Actualidad · Presencial",
    role: "Personal Civil",
    bullets: [
      "Experiencia en el Centro de Comunicaciones y Videovigilancia, realizando monitoreo en tiempo real, gestión de incidentes y análisis de información mediante sistemas tecnológicos de seguridad.",
      "Desarrollo de habilidades transferibles al ámbito IT: resolución de problemas, análisis de información, atención al detalle, trabajo bajo presión, comunicación efectiva y adaptación a nuevas tecnologías.",
    ],
  },
  {
    company: "No Country",
    period: "Jul. 2026 · Remoto",
    role: "Backend Developer",
    bullets: [
      "Participación en un proyecto de desarrollo colaborativo como Backend Developer, trabajando en la evolución de PhysaFlow, una aplicación web orientada al análisis de capacidad en centros de datos de IA.",
      "Desarrollo e integración de funcionalidades de IA conversacional, implementando lógica de contexto y búsqueda por relevancia (RAG), procesamiento de respuestas en streaming e integración con APIs.",
      "Participación en pruebas, corrección de bugs, revisiones técnicas y trabajo colaborativo mediante Git y GitHub.",
    ],
    tags: ["Next.js", "TypeScript", "Vercel AI SDK", "Groq", "Git", "GitHub"],
  },
  {
    company: "Santex",
    period: "May. 2025 — Jul. 2025 · Remoto",
    role: "QA Manual",
    bullets: [
      "Participación en un proyecto real de QA y Testing para una billetera virtual llamada TALER, realizando pruebas funcionales, exploratorias, de usabilidad y validaciones de seguridad.",
      "Diseño y ejecución de casos de prueba, documentación de resultados, reporte y seguimiento de bugs, además de trabajo colaborativo bajo metodología Scrum, dailys y presentaciones técnicas.",
    ],
    tags: [
      "Testing funcional",
      "Trello",
      "Scrum",
      "Documentación de bugs",
    ],
  },
];

const education = [
  {
    school: "Instituto Superior Politécnico Córdoba (ISPC)",
    period: "En curso",
    degree:
      "Tecnicatura Superior en Desarrollo Web y Aplicaciones Digitales",
  },
];

const courses = [
  { title: "QA Manual", institution: "Santex", date: "Jul. 2025" },
  {
    title: "Ciberseguridad de Google",
    institution: "Coursera",
    date: "Jun. 2025",
  },
  {
    title: "Desarrollador Full Stack Junior",
    institution: "ISPC",
    date: "Ago. 2023",
  },
  { title: "Programador", institution: "ISPC", date: "Ago. 2023" },
  {
    title: "ONE – Oracle Next Education",
    institution: "Alura Latam",
    date: "Dic. 2022",
  },
];

function SectionHeading({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-zinc-800 bg-zinc-900 text-blue-400">
        {icon}
      </span>
      <h3 className="text-xl font-bold text-zinc-50">{children}</h3>
    </div>
  );
}

export default function ResumeSection() {
  return (
    <div className="space-y-10">
      <SectionHeader title="Resume" />

      <div>
        <SectionHeading icon={<BriefcaseIcon className="h-5 w-5" />}>
          Experiencia
        </SectionHeading>

        <ol className="relative ml-5 mt-7 list-none space-y-9 border-l border-zinc-800">
          {experiences.map((exp) => (
            <li key={exp.company} className="relative pl-6">
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-blue-500 ring-4 ring-blue-500/20" />
              <h4 className="text-base font-bold text-zinc-50">
                {exp.company}
              </h4>
              <p className="mt-1 text-sm font-medium text-blue-500">
                {exp.period}
              </p>
              <p className="mt-1 text-sm text-zinc-300">{exp.role}</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-zinc-400 marker:text-blue-500">
                {exp.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {exp.tags && exp.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-zinc-800 bg-zinc-900 px-2 py-1 text-xs text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>

      <div>
        <SectionHeading icon={<GraduationCapIcon className="h-5 w-5" />}>
          Educación
        </SectionHeading>

        <ol className="relative ml-5 mt-7 list-none space-y-9 border-l border-zinc-800">
          {education.map((edu) => (
            <li key={edu.school} className="relative pl-6">
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-blue-500 ring-4 ring-blue-500/20" />
              <h4 className="text-base font-bold text-zinc-50">
                {edu.school}
              </h4>
              <p className="mt-1 text-sm font-medium text-blue-500">
                {edu.period}
              </p>
              <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-zinc-300">
                {edu.degree}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <SectionHeading icon={<AwardIcon className="h-5 w-5" />}>
          Cursos y Certificaciones
        </SectionHeading>

        <ol className="relative ml-5 mt-7 list-none space-y-9 border-l border-zinc-800">
          {courses.map((course) => (
            <li key={course.title} className="relative pl-6">
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-blue-500 ring-4 ring-blue-500/20" />
              <h4 className="text-base font-bold text-zinc-50">
                {course.title}
              </h4>
              <p className="mt-1 text-sm font-medium text-blue-500">
                {course.date}
              </p>
              <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-zinc-300">
                {course.institution}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}