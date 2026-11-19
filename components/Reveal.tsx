"use client";

import { useEffect, useRef, type ReactNode } from "react";

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.dataset.reveal === "visible") return;
    if (prefersReducedMotion()) return;
    if (
      el.dataset.reveal === undefined &&
      el.getBoundingClientRect().top < window.innerHeight
    ) {
      return;
    }

    el.dataset.reveal = "hidden";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          el.dataset.reveal = "visible";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

type RevealProps = {
  children: ReactNode;
  delay?: number;
  subtle?: boolean;
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  subtle = false,
  className = "",
}: RevealProps) {
  const ref = useReveal<HTMLDivElement>();

  const classes = subtle ? `${className} reveal-subtle`.trim() : className;

  return (
    <div
      ref={ref}
      className={classes}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
