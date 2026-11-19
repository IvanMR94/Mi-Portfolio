import Reveal from "./Reveal";

export default function SectionHeader({ title }: { title: string }) {
  return (
    <Reveal>
      <h2 className="text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-3 h-1 w-12 rounded-full bg-blue-500" />
    </Reveal>
  );
}
