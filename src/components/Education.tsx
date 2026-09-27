import { GraduationCap, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 border-t border-slate-200 dark:border-slate-800">
      {/* Section Header */}
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-semibold mb-3">
        <span className="w-6 h-[1.5px] bg-emerald-500 inline-block" />
        <span>04 // Academic Background</span>
      </div>

      <div className="mb-10">
        <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 dark:text-slate-100">
          Education & <span className="text-emerald-600 dark:text-emerald-400">Coursework</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-normal mt-2 max-w-2xl">
          Computer Science degree education combined with continuous project development.
        </p>
      </div>

      {/* Timeline List */}
      <div className="space-y-6">
        {/* Degree 1 */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-3 font-mono text-xs text-slate-600 dark:text-slate-400 uppercase tracking-widest flex md:flex-col items-center md:items-start gap-2">
            <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 font-semibold">
              2023 — Present
            </span>
            <span className="text-[11px] text-slate-500">Degree Program</span>
          </div>

          <div className="md:col-span-9 space-y-2">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-slate-100">
                Bachelor of Computer Applications (BCA)
              </h3>
            </div>
            <div className="font-mono text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-semibold">
              SES College, Sreekandapuram · Kannur University
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-normal leading-relaxed pt-1">
              Coursework covering Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems (DBMS), and Web Development.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="font-mono text-[10px] px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-medium">Data Structures</span>
              <span className="font-mono text-[10px] px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-medium">DBMS & SQL</span>
              <span className="font-mono text-[10px] px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-medium">Web Programming</span>
            </div>
          </div>
        </div>

        {/* Higher Secondary 2 */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-3 font-mono text-xs text-slate-600 dark:text-slate-400 uppercase tracking-widest flex md:flex-col items-center md:items-start gap-2">
            <span className="px-3.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 font-semibold">
              2021 — 2023
            </span>
            <span className="text-[11px] text-slate-500">Higher Secondary</span>
          </div>

          <div className="md:col-span-9 space-y-2">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-slate-100">
                Higher Secondary Education — Bio Science
              </h3>
            </div>
            <div className="font-mono text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-semibold">
              Govt. Higher Secondary School, Koyyam, Kannur
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-normal leading-relaxed pt-1">
              Completed higher secondary education in science subjects while building interest in computer programming.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
