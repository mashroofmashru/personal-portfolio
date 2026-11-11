import { Asterisk } from 'lucide-react';

// Stack keywords already listed in the Skills section
const words = ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'JWT Auth', 'Next.js', 'Tailwind CSS'];

export default function Ticker() {
  // Rendered twice so the -50% translate loops seamlessly
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {words.map((w) => (
        <li key={w} className="flex items-center">
          <Asterisk className="w-5 h-5 mx-6 sm:mx-8" strokeWidth={2.25} aria-hidden />
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] whitespace-nowrap">{w}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="bg-amber text-amber-ink border-y border-amber-ink/15 overflow-hidden py-3.5">
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
