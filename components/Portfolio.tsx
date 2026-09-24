"use client";

import { useRef, useState, type CSSProperties } from "react";
import AboutSection from "./AboutSection";
import { MobileNavBar, NavBar, type Tab } from "./NavBar";
import PortfolioSection from "./PortfolioSection";
import ProfileCard from "./ProfileCard";
import ResumeSection from "./ResumeSection";

const panelClass =
  "rounded-2xl border border-white/[0.06] bg-[#0e0e13] shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_0_55px_-20px_rgba(59,130,235,0.28),0_0_130px_-50px_rgba(37,99,235,0.16)]";

const ambientStyle: CSSProperties = {
  backgroundImage: [
    "radial-gradient(1100px 720px at 10% -12%, rgba(59,130,235,0.15) 0%, rgba(59,130,235,0.05) 40%, rgba(59,130,235,0) 70%)",
    "radial-gradient(1000px 820px at 90% 42%, rgba(37,99,235,0.10) 0%, rgba(37,99,235,0.04) 40%, rgba(37,99,235,0) 70%)",
    "radial-gradient(860px 640px at 48% 118%, rgba(14,165,233,0.08) 0%, rgba(14,165,233,0.03) 40%, rgba(14,165,233,0) 68%)",
  ].join(", "),
};

export default function Portfolio() {
  const [active, setActive] = useState<Tab>("about");
  const mainRef = useRef<HTMLElement>(null);

  const handleTabChange = (tab: Tab) => {
    setActive(tab);
    mainRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative min-h-screen">
      <div
        aria-hidden
        className="starfield pointer-events-none fixed inset-0 -z-10"
      >
        <div className="stars-a" />
        <div className="stars-b" />
        <div className="stars-c" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={ambientStyle}
      />

      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-3 pb-28 pt-4 sm:px-6 lg:grid lg:grid-cols-[330px_minmax(0,1fr)] lg:gap-6 lg:pb-10 lg:pt-8">
        <aside className="lg:sticky lg:top-8 lg:self-start">
          <div className={`p-6 ${panelClass}`}>
            <ProfileCard />
          </div>
        </aside>

        <main
          ref={mainRef}
          className={`scroll-mt-4 overflow-hidden ${panelClass}`}
        >
          <NavBar active={active} onChange={handleTabChange} />

          <div className="px-5 pb-10 pt-5 sm:px-9 sm:pb-12 sm:pt-7">
            {active === "about" && <AboutSection />}
            {active === "resume" && <ResumeSection />}
            {active === "portfolio" && <PortfolioSection />}

            <footer
              suppressHydrationWarning
              className="mt-12 border-t border-zinc-800/70 pt-5 text-xs text-zinc-500"
            >
              © {new Date().getFullYear()} Ivan Moreno Dev.
            </footer>
          </div>
        </main>
      </div>

      <MobileNavBar active={active} onChange={handleTabChange} />
    </div>
  );
}