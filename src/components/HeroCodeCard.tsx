import { Asterisk } from 'lucide-react';

// Syntax colours (on the navy card, same in both themes)
const K = ({ children }: { children: React.ReactNode }) => <span className="text-band-accent">{children}</span>; // keyword
const P = ({ children }: { children: React.ReactNode }) => <span className="text-band-ink">{children}</span>; // property
const S = ({ children }: { children: React.ReactNode }) => <span className="text-amber">&apos;{children}&apos;</span>; // string
const M = ({ children }: { children: React.ReactNode }) => <span className="text-band-muted">{children}</span>; // punctuation

const row = (items: string[]) => (
  <>
    {'    '}
    {items.map((it) => (
      <span key={it}>
        <S>{it}</S>
        <M>, </M>
      </span>
    ))}
  </>
);

export default function HeroCodeCard() {
  const lines: React.ReactNode[] = [
    <><K>const</K> <P>developer</P> <M>=</M> <M>{'{'}</M></>,
    <>  <P>name</P><M>:</M> <S>Mashroof PP</S><M>,</M></>,
    <>  <P>role</P><M>:</M> <S>Full Stack Developer</S><M>,</M></>,
    <>  <P>location</P><M>:</M> <S>Kannur, Kerala</S><M>,</M></>,
    <>  <P>stack</P><M>: [</M></>,
    row(['MongoDB', 'Express']),
    row(['React', 'Node.js']),
    <>  <M>],</M></>,
    <>  <P>focus</P><M>: [</M></>,
    row(['REST APIs', 'JWT Auth']),
    row(['Responsive UI']),
    <>  <M>],</M></>,
    <>  <P>openToWork</P><M>:</M> <K>true</K><M>,</M></>,
    <><M>{'};'}</M><span className="inline-block w-2 h-4 ml-1 -mb-0.5 bg-band-accent animate-[blink_1.1s_steps(1)_infinite] motion-reduce:animate-none" /></>,
  ];

  return (
    <div className="relative" aria-label="Developer profile summary">
      {/* Card */}
      <div className="rotate-[1.5deg] hover:rotate-0 transition-transform duration-500 rounded-2xl bg-band border border-band-line shadow-[8px_8px_0_var(--accent)] overflow-hidden">
        {/* Window bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-band-line">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b5e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#4fc27a]" />
          <span className="ml-3 font-code text-xs text-band-muted">developer.ts</span>
        </div>

        {/* Code */}
        <pre className="font-code text-[13px] xl:text-sm leading-7 px-4 xl:px-5 py-4 overflow-x-auto">
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span className="w-6 shrink-0 text-right pr-4 text-band-line select-none">{i + 1}</span>
              <code className="whitespace-pre">{line}</code>
            </div>
          ))}
        </pre>
      </div>

      {/* Caption tag, like the reference's overlapping label */}
      <div className="absolute -bottom-4 left-6 -rotate-[3deg] inline-flex items-center gap-2 rounded-lg bg-surface border border-ink px-3 py-1.5 text-xs font-semibold text-ink shadow-[3px_3px_0_var(--ink)]">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        Open to Work
      </div>

      <Asterisk
        aria-hidden
        strokeWidth={2}
        className="absolute -bottom-8 -right-3 w-12 h-12 text-accent animate-[spin_24s_linear_infinite] motion-reduce:animate-none"
      />
    </div>
  );
}
