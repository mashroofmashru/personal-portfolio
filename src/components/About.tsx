import Image from 'next/image';
import { User, MapPin, GraduationCap, Briefcase, Code, Database, Cloud, Cpu } from 'lucide-react';

const facts = [
  { icon: User, label: 'Name', value: 'Mashroof PP' },
  { icon: MapPin, label: 'Location', value: 'Kannur, Kerala' },
  { icon: GraduationCap, label: 'Degree', value: 'BCA' },
];

const capabilities = [
  { icon: Database, title: 'MongoDB Database Modeling', body: 'Schema design, Mongoose models, indexing, and data filtering.' },
  { icon: Code, title: 'Node & Express APIs', body: 'REST endpoints, JWT authentication, and role authorization.' },
  { icon: Cloud, title: 'Cloud Storage & Uploads', body: 'Multer middleware integration and Cloudinary CDN storage.' },
  { icon: Cpu, title: 'React & Tailwind UI', body: 'Component hierarchies, responsive grid design, and hooks.' },
];

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <div className="section-label"><b>01</b> // About Me</div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mt-6">
        {/* Profile Info Card Left */}
        <div className="lg:col-span-4 lg:sticky lg:top-24">
          <div className="panel p-3">
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2px] bg-surface-2 group">
              <Image
                src="/profile.jpg"
                alt="Mashroof PP"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-center grayscale-[35%] group-hover:grayscale-0 group-hover:scale-[1.02] transition duration-500"
              />
            </div>

            {/* Metadata Table */}
            <dl className="mt-3 divide-y divide-line font-mono text-xs">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="py-2.5 px-1 flex items-center justify-between">
                  <dt className="text-muted uppercase tracking-wider flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5" /> {label}
                  </dt>
                  <dd className="text-ink font-medium">{value}</dd>
                </div>
              ))}
              <div className="py-2.5 px-1 flex items-center justify-between">
                <dt className="text-muted uppercase tracking-wider flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5" /> Status
                </dt>
                <dd className="inline-flex items-center gap-1.5 text-accent font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Open to Work
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Text Story Right */}
        <div className="lg:col-span-8">
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-[-0.03em] leading-[0.98] text-ink mb-6">
            Full-stack web development with <span className="text-accent">Node.js & React</span>
          </h2>

          <div className="space-y-4 text-ink-2 text-base sm:text-lg leading-relaxed max-w-3xl">
            <p>
              I am a BCA student and developer based in Kannur, Kerala. I build web applications using JavaScript, React, Node.js, Express, and MongoDB.
            </p>
            <p>
              My primary experience includes building RESTful APIs, setting up authentication with JWT, designing database schemas in MongoDB, and creating clean responsive frontends with React and Tailwind CSS.
            </p>
            <p>
              Key projects I have built include <strong className="font-semibold text-ink">EduSphere</strong> (an LMS platform with role-based access control and quiz builder) and <strong className="font-semibold text-ink">Carverse</strong> (an automotive marketplace with Cloudinary image uploads). I am seeking an entry-level software developer position where I can work on production features and learn from experienced engineers.
            </p>
          </div>

          {/* Core Technical Capabilities Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-line border border-line rounded-[4px] overflow-hidden">
            {capabilities.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-surface p-5 flex items-start gap-3.5 group">
                <Icon className="w-5 h-5 mt-0.5 shrink-0 text-accent" />
                <div>
                  <h3 className="font-mono text-[13px] uppercase tracking-wider font-medium text-ink">{title}</h3>
                  <p className="text-sm text-muted mt-1 leading-snug">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
