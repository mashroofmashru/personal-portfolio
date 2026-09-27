'use client';

import { useState } from 'react';
import { Layers, Server, Database, Wrench, CheckCircle2 } from 'lucide-react';

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  skills: { name: string; tag: string }[];
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories: SkillCategory[] = [
    {
      id: 'frontend',
      name: 'Frontend Development',
      icon: Layers,
      skills: [
        { name: 'React.js', tag: 'Core Library' },
        { name: 'Next.js 14', tag: 'Framework' },
        { name: 'TypeScript', tag: 'Language' },
        { name: 'Tailwind CSS', tag: 'Styling' },
        { name: 'HTML5 & CSS3', tag: 'Web Basics' },
        { name: 'Bootstrap', tag: 'UI Library' },
      ],
    },
    {
      id: 'backend',
      name: 'Backend & APIs',
      icon: Server,
      skills: [
        { name: 'Node.js', tag: 'Runtime' },
        { name: 'Express.js', tag: 'Framework' },
        { name: 'REST APIs', tag: 'Architecture' },
        { name: 'JWT Auth', tag: 'Security' },
        { name: 'MVC Pattern', tag: 'Structure' },
        { name: 'JavaScript (ES6+)', tag: 'Language' },
      ],
    },
    {
      id: 'database',
      name: 'Database & Cloud Storage',
      icon: Database,
      skills: [
        { name: 'MongoDB', tag: 'NoSQL' },
        { name: 'Mongoose', tag: 'ORM' },
        { name: 'PostgreSQL', tag: 'SQL' },
        { name: 'Multer', tag: 'File Uploads' },
        { name: 'Cloudinary CDN', tag: 'Image CDN' },
      ],
    },
    {
      id: 'integrations',
      name: 'Tools & APIs',
      icon: Wrench,
      skills: [
        { name: 'Stripe & Razorpay', tag: 'Payments' },
        { name: 'Gemini AI API', tag: 'AI Integration' },
        { name: 'OpenAI API', tag: 'AI Integration' },
        { name: 'Git & GitHub', tag: 'Version Control' },
        { name: 'Postman', tag: 'API Testing' },
        { name: 'VS Code & Figma', tag: 'Development' },
      ],
    },
  ];

  const filteredCategories =
    activeTab === 'all' ? categories : categories.filter((c) => c.id === activeTab);

  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 border-t border-slate-200 dark:border-slate-800">
      {/* Section Header */}
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-semibold mb-3">
        <span className="w-6 h-[1.5px] bg-emerald-500 inline-block" />
        <span>02 // Skills & Technical Stack</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 dark:text-slate-100">
            Skills & <span className="text-emerald-600 dark:text-emerald-400">Technical Stack</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-normal mt-2 max-w-2xl">
            Technologies I use for building web applications, backend APIs, and database schemas.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`font-mono text-xs px-4 py-2 rounded-full border transition-all duration-200 ${
              activeTab === 'all'
                ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm font-semibold'
                : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-emerald-500'
            }`}
          >
            All Skills
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`font-mono text-xs px-4 py-2 rounded-full border transition-all duration-200 ${
                activeTab === cat.id
                  ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm font-semibold'
                  : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-emerald-500'
              }`}
            >
              {cat.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Widescreen Responsive Skills Grid */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${activeTab === 'all' ? 'lg:grid-cols-4' : 'lg:grid-cols-2'} gap-6`}>
        {filteredCategories.map((cat) => {
          const IconComp = cat.icon;
          return (
            <div
              key={cat.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-200 dark:border-slate-800">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-mono text-sm uppercase tracking-wider font-semibold text-slate-900 dark:text-slate-100">
                    {cat.name}
                  </h3>
                </div>

                <div className="space-y-3">
                  {cat.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between"
                    >
                      <div>
                        <span className="font-sans text-sm font-semibold text-slate-900 dark:text-slate-100 block">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider block mt-0.5">
                          {skill.tag}
                        </span>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
