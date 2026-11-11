import { GraduationCap, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-14 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <div className="section-label"><b>04</b> // Academic Background</div>

      <div className="mb-6">
        <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-[-0.03em] leading-[0.98] text-ink">
          Education & <span className="text-accent">Coursework</span>
        </h2>
        <p className="text-sm sm:text-base text-muted mt-2 max-w-2xl">
          Computer Science degree education combined with continuous project development.
        </p>
      </div>

      {/* Timeline List */}
      <div className="border-t border-line">
        {/* Degree */}
        <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start border-b border-line">
          <div className="md:col-span-3 font-mono text-xs uppercase tracking-[0.12em] flex md:flex-col items-center md:items-start gap-2">
            <span className="text-accent font-medium">2023 — 2026</span>
            <span className="text-[11px] text-muted">Degree Program</span>
          </div>

          <div className="md:col-span-9">
            <div className="flex items-center gap-2.5">
              <GraduationCap className="w-5 h-5 text-accent shrink-0" />
              <h3 className="font-display font-bold text-2xl tracking-[-0.01em] text-ink">
                Bachelor of Computer Applications (BCA)
              </h3>
            </div>
            <div className="mt-1 font-mono text-xs uppercase tracking-wider text-ink-2">
              SES College, Sreekandapuram · Kannur University
            </div>
            <p className="mt-2 text-sm sm:text-base text-ink-2 leading-relaxed max-w-3xl">
              Coursework covering Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems (DBMS), and Web Development.
            </p>

            <div className="flex flex-wrap gap-1.5 mt-3">
              <span className="chip">Data Structures</span>
              <span className="chip">DBMS & SQL</span>
              <span className="chip">Web Programming</span>
            </div>
          </div>
        </div>

        {/* Higher Secondary */}
        <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start border-b border-line">
          <div className="md:col-span-3 font-mono text-xs uppercase tracking-[0.12em] flex md:flex-col items-center md:items-start gap-2">
            <span className="text-ink font-medium">2021 — 2023</span>
            <span className="text-[11px] text-muted">Higher Secondary</span>
          </div>

          <div className="md:col-span-9">
            <div className="flex items-center gap-2.5">
              <BookOpen className="w-5 h-5 text-accent shrink-0" />
              <h3 className="font-display font-bold text-2xl tracking-[-0.01em] text-ink">
                Higher Secondary Education — Bio Science
              </h3>
            </div>
            <div className="mt-1 font-mono text-xs uppercase tracking-wider text-ink-2">
              Govt. Higher Secondary School, Koyyam, Kannur
            </div>
            <p className="mt-2 text-sm sm:text-base text-ink-2 leading-relaxed max-w-3xl">
              Completed higher secondary education in science subjects while building interest in computer programming.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
