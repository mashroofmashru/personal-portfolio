import Image from 'next/image';
import { User, MapPin, GraduationCap, Briefcase, Code, Database, Cloud, Cpu } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 border-t border-slate-200 dark:border-slate-800">
      {/* Section Header */}
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-semibold mb-3">
        <span className="w-6 h-[1.5px] bg-emerald-500 inline-block" />
        <span>01 // About Me</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-6">
        {/* Profile Info Card Left */}
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            {/* User Profile Image */}
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-inner group">
              <Image
                src="/profile.jpg"
                alt="Mashroof PP"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Metadata Table */}
            <div className="divide-y divide-slate-200 dark:divide-slate-800 font-mono text-xs">
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5 font-medium">
                  <User className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Name
                </span>
                <span className="text-slate-900 dark:text-slate-100 font-semibold">Mashroof PP</span>
              </div>

              <div className="py-2.5 flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Location
                </span>
                <span className="text-slate-900 dark:text-slate-100 font-semibold">Kannur, Kerala</span>
              </div>

              <div className="py-2.5 flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5 font-medium">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Degree
                </span>
                <span className="text-slate-900 dark:text-slate-100 font-semibold">BCA</span>
              </div>

              <div className="py-2.5 flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5 font-medium">
                  <Briefcase className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Status
                </span>
                <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Open to Work
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Text Story Right */}
        <div className="lg:col-span-8">
          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-slate-900 dark:text-slate-100 mb-6">
            Full-stack web development with <span className="text-emerald-600 dark:text-emerald-400">Node.js & React</span>
          </h2>

          <div className="space-y-4 text-slate-700 dark:text-slate-300 font-normal text-base sm:text-lg lg:text-xl leading-relaxed">
            <p>
              I am a BCA student and developer based in Kannur, Kerala. I build web applications using JavaScript, React, Node.js, Express, and MongoDB.
            </p>
            <p>
              My primary experience includes building RESTful APIs, setting up authentication with JWT, designing database schemas in MongoDB, and creating clean responsive frontends with React and Tailwind CSS.
            </p>
            <p>
              Key projects I have built include <strong className="font-semibold text-slate-900 dark:text-slate-100">EduSphere</strong> (an LMS platform with role-based access control and quiz builder) and <strong className="font-semibold text-slate-900 dark:text-slate-100">Carverse</strong> (an automotive marketplace with Cloudinary image uploads). I am seeking an entry-level software developer position where I can work on production features and learn from experienced engineers.
            </p>
          </div>

          {/* Core Technical Capabilities Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mt-0.5">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-mono text-sm uppercase tracking-wider font-semibold text-slate-900 dark:text-slate-100">MongoDB Database Modeling</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">Schema design, Mongoose models, indexing, and data filtering.</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mt-0.5">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-mono text-sm uppercase tracking-wider font-semibold text-slate-900 dark:text-slate-100">Node & Express APIs</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">REST endpoints, JWT authentication, and role authorization.</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mt-0.5">
                <Cloud className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-mono text-sm uppercase tracking-wider font-semibold text-slate-900 dark:text-slate-100">Cloud Storage & Uploads</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">Multer middleware integration and Cloudinary CDN storage.</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mt-0.5">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-mono text-sm uppercase tracking-wider font-semibold text-slate-900 dark:text-slate-100">React & Tailwind UI</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">Component hierarchies, responsive grid design, and hooks.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
