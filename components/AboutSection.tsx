import SectionHeader from "./SectionHeader";
import TechStack from "./TechStack";
import { CheckIcon, CodeIcon, GitBranchIcon, ServerIcon } from "./icons";

const whatIDo = [
  {
    icon: CodeIcon,
    title: "Desarrollo Frontend",
    description:
      "Creación de interfaces modernas, accesibles y responsivas.",
  },
  {
    icon: ServerIcon,
    title: "Desarrollo Backend",
    description:
      "Arquitectura y APIs robustas y escalables.",
  },
  {
    icon: GitBranchIcon,
    title: "Control de Versiones & Git",
    description:
      "Trabajo en equipo, ramas y flujos profesionales con Git y GitHub.",
  },
  {
    icon: CheckIcon,
    title: "Buenas Prácticas & Testing",
    description:
      "Calidad de código, pruebas y metodologías ágiles en entornos profesionales.",
  },
];

export default function AboutSection() {
  return (
    <div className="space-y-8">
      <SectionHeader title="Sobre Mí" />

      <div className="space-y-4 text-sm leading-7 text-zinc-400 sm:text-[15px] sm:leading-8">
        <p>
          ¡Hola! Soy{" "}
          <span className="font-medium text-zinc-100">Ivan Moreno</span>,
          Desarrollador Full Stack en formación y estudiante avanzado de la Tecnicatura
          Superior en Desarrollo Web y Aplicaciones Digitales. Me apasiona la
          tecnología y la creación de soluciones digitales robustas, combinando
          el desarrollo Frontend y Backend con una sólida mirada integral hacia
          la calidad del software 🚀.
        </p>
        <p>
          A lo largo de mi camino, me he especializado en diversas tecnologías claves, además de trabajar
          con bases de datos, control de versiones con Git y metodologías
          ágiles. Un gran diferencial en mi perfil es mi experiencia práctica
          previa en{" "}
          <span className="text-zinc-200">QA Manual y Software Testing</span>{" "}
          🔍, lo que me otorga una perspectiva analítica y detallista para
          anticipar errores, estructurar código limpio y asegurar que cada
          producto final sea confiable y de alta calidad 🧩.
        </p>
        <p>
          Estoy activamente en búsqueda de nuevas oportunidades profesionales
          como Developer, así como abierto a posiciones en QA/Testing, donde
          pueda aportar valor desde el primer día y seguir creciendo en equipo.
          Si querés conocer más sobre lo que hago, ¡te invito a explorar mis
          proyectos!
        </p>
      </div>

      <div className="pt-2">
        <h3 className="text-lg font-bold text-zinc-100">Qué Hago?</h3>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {whatIDo.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="glow-card rounded-2xl border border-zinc-800/80 bg-[#121216] transition-colors hover:border-blue-500/40"
              >
                <div className="glow-card-content flex flex-col items-center gap-4 rounded-xl bg-[#121216] p-6 text-center lg:flex-row lg:items-start lg:gap-5 lg:text-left">
                  <Icon className="h-8 w-8 shrink-0 text-blue-400" />
                  <div>
                    <h4 className="text-base font-bold text-zinc-50">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <TechStack />
    </div>
  );
}