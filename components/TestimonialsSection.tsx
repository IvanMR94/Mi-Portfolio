"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "./icons";

type Testimonial = {
  name: string;
  role: string;
  text: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Héctor Ivan Gamboa Galeana",
    role: "QA Engineer Jr | Manual & API Testing | Selenium + Python | Postman",
    text: "Durante las cinco semanas del proyecto PhysaFlow, Iván demostró una excelente actitud, compromiso y muchas ganas de aprender. Destacó por su capacidad de adaptación, comunicación, responsabilidad y trabajo en equipo, además de mantener una actitud proactiva y apertura para recibir retroalimentación. ¡Un excelente profesional y compañero!",
    image: "/hector.jpg",
  },
  {
    name: "Hugo Ariel Seijo",
    role: "Full Stack Developer | AI-Powered Web Development",
    text: "Iván tiene lo más importante que necesita un profesional: es comprometido, se adapta a cualquier condición y cumple de manera responsable sus tareas. Siempre se mantuvo comunicado, dispuesto a colaborar, y sabe transmitir las ideas y aprender lo que no sabe.",
    image: "/Ariel.jpg",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const t = testimonials[current];

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold tracking-tight text-zinc-200 sm:text-xl">
          Lo que dicen mis compañeros
        </h3>
        <div className="mt-2 h-0.5 w-8 rounded-full bg-blue-500/70" />
      </div>

      <div className="mx-auto max-w-xl">
        <div className="relative">
          <button
            type="button"
            onClick={prev}
            aria-label="Testimonio anterior"
            className="absolute -left-2 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-700/70 bg-zinc-900/90 text-zinc-400 transition-all hover:border-blue-500/50 hover:text-blue-400 sm:-left-3"
          >
            <ArrowLeftIcon className="h-3.5 w-3.5" />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Testimonio siguiente"
            className="absolute -right-2 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-700/70 bg-zinc-900/90 text-zinc-400 transition-all hover:border-blue-500/50 hover:text-blue-400 sm:-right-3"
          >
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </button>

          <div className="rounded-xl border border-white/[0.06] bg-[#121216] px-5 py-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_0_55px_-20px_rgba(59,130,235,0.28),0_0_130px_-50px_rgba(37,99,235,0.16)] sm:px-8 sm:py-6">
            <div className="mx-auto h-12 w-12 overflow-hidden rounded-full border-2 border-blue-500/40">
              <Image
                src={t.image}
                alt={t.name}
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-3 text-sm font-semibold text-zinc-100">{t.name}</p>
            <p className="mt-0.5 text-xs text-blue-400">{t.role}</p>
            <p className="mx-auto mt-3 max-w-md text-xs leading-5 text-zinc-400">
              {t.text}
            </p>
          </div>
        </div>

        <div className="mt-3 flex justify-center gap-1.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Ir al testimonio ${i + 1}`}
              aria-current={i === current}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                i === current
                  ? "bg-blue-500"
                  : "bg-zinc-600 hover:bg-zinc-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
