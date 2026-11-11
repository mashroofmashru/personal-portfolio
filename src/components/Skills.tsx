'use client';

import { useState } from 'react';
import { Layers, Server, Database, Wrench } from 'lucide-react';

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
    <section id="skills" className="py-14 sm:py-16 bg-surface-2/60 border-y border-line">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="section-label"><b>02</b> // Skills & Technical Stack</div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
        <div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-[-0.03em] leading-[0.98] text-ink">
            Skills & <span className="text-accent">Technical Stack</span>
          </h2>
          <p className="text-sm sm:text-base text-muted mt-2 max-w-2xl">
            Technologies I use for building web applications, backend APIs, and database schemas.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-1.5">
          <button onClick={() => setActiveTab('all')} data-active={activeTab === 'all'} className="tab">
            All Skills
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              data-active={activeTab === cat.id}
              className="tab"
            >
              {cat.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 ${
          activeTab === 'all' ? 'lg:grid-cols-4' : 'lg:grid-cols-2'
        } gap-px bg-line border border-line rounded-2xl overflow-hidden`}
      >
        {filteredCategories.map((cat) => {
          const IconComp = cat.icon;
          return (
            <div key={cat.id} className="bg-surface p-5">
              <div className="flex items-center gap-2.5 mb-3 pb-3 border-b border-line">
                <IconComp className="w-4 h-4 text-accent" />
                <h3 className="font-mono text-xs uppercase tracking-wider font-medium text-ink">{cat.name}</h3>
              </div>

              <ul>
                {cat.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="py-2 flex items-baseline justify-between gap-3 border-b border-dashed border-line last:border-0"
                  >
                    <span className="text-[15px] font-medium text-ink">{skill.name}</span>
                    <span className="font-mono text-[10px] text-muted uppercase tracking-wider text-right">
                      {skill.tag}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
}
