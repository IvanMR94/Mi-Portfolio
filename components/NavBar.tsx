export type Tab = "about" | "resume" | "portfolio";

const tabs: { id: Tab; label: string }[] = [
  { id: "about", label: "Sobre mí" },
  { id: "resume", label: "Resume" },
  { id: "portfolio", label: "Portfolio" },
];

export function NavBar({
  active,
  onChange,
}: {
  active: Tab;
  onChange: (tab: Tab) => void;
}) {
  return (
    <nav className="hidden justify-end lg:flex">
      <div className="flex items-center gap-9 rounded-bl-2xl bg-white/[0.04] px-9 py-4">
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`text-sm font-medium transition-colors ${
                isActive
                  ? "text-blue-500"
                  : "text-zinc-300 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export function MobileNavBar({
  active,
  onChange,
}: {
  active: Tab;
  onChange: (tab: Tab) => void;
}) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 rounded-t-xl border-t border-zinc-800 bg-zinc-950/95 backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-md items-center justify-between gap-1 px-4 py-3">
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`flex-1 rounded-lg py-2 text-sm font-medium transition-colors ${
                isActive ? "text-blue-500" : "text-zinc-400"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}