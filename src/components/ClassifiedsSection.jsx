import React from 'react';
import {
  Code,
  Server,
  Terminal,
  Workflow,
  Layers,
  Binary,
  Sparkles,
  Cpu,
  Boxes,
  Database,
  GitBranch,
} from 'lucide-react';

const skills = [
  {
    id: '01',
    name: 'React',
    category: 'Front End',
    desc: 'Reactive UI architecture, hooks & high-speed virtual DOM.',
    badge: 'VERIFIED',
    icon: Code,
    level: 'Advanced',
  },
  {
    id: '02',
    name: 'Node.js',
    category: 'Server Side',
    desc: 'High-throughput async APIs, RESTful routes & event loops.',
    badge: 'RUNTIME',
    icon: Server,
    level: 'Production',
  },
  {
    id: '03',
    name: 'C',
    category: 'Core Logic',
    desc: 'Pointer manipulation, memory safety & low-level systems.',
    badge: 'FOUNDATION',
    icon: Terminal,
    level: 'Core Logic',
  },
  {
    id: '04',
    name: 'Python',
    category: 'Backend & AI',
    desc: 'Algorithmic scripting, machine learning models & automations.',
    badge: 'VERSATILE',
    icon: Workflow,
    level: 'Production',
  },
  {
    id: '05',
    name: 'MERN',
    category: 'Ecosystem',
    desc: 'Full-stack integration across MongoDB, Express, React & Node.',
    badge: 'FULL-STACK',
    icon: Layers,
    level: 'Ecosystem',
  },
  {
    id: '06',
    name: 'DSA',
    category: 'Logic & Trees',
    desc: 'Optimal complexity, graph traversals, DP & trees.',
    badge: 'OPTIMIZED',
    icon: Binary,
    level: 'Analytical',
  },
  {
    id: '07',
    name: 'AI / ML',
    category: 'Intelligence',
    desc: 'Neural networks, prompt pipelines & intelligent diagnostics.',
    badge: 'VISIONARY',
    icon: Sparkles,
    level: 'Applied AI',
  },
  {
    id: '08',
    name: 'C++',
    category: 'Core Logic',
    desc: 'High-performance computing, STL algorithms & OOP design.',
    badge: 'HIGH PERF',
    icon: Cpu,
    level: 'Systems',
  },
  {
    id: '11',
    name: 'SQL',
    category: 'Data Vault',
    desc: 'Relational database schema, indexing, ACID safety & queries.',
    badge: 'DATA VAULT',
    icon: Database,
    level: 'Relational',
  },
  {
    id: '12',
    name: 'Git',
    category: 'Versioning',
    desc: 'Collaborative VCS, rebase strategies & release workflows.',
    badge: 'COLLAB',
    icon: GitBranch,
    level: 'Versioned',
  },
];

function SkillCell({ id, name, category, desc, badge, icon: Icon, level }) {
  return (
    <div className="classified-card group relative p-3 sm:p-3.5 text-left min-w-[210px] sm:min-w-0 border-2 sm:border-0 border-black h-full flex flex-col justify-between overflow-hidden cursor-pointer select-none">
      {/* Top red ink hairline accent that sweeps across on hover */}
      <div className="classified-red-rule absolute top-0 left-0 w-0 h-[3px] bg-red-600 transition-all duration-300 ease-out z-10" />

      {/* Printer's Corner Registration Crosshairs */}
      <span className="absolute top-1 left-1.5 text-[9px] font-mono leading-none transition-all duration-200 text-gray-400 group-hover:text-red-600 group-hover:scale-125 font-bold select-none">
        +
      </span>
      <span className="absolute top-1 right-1.5 text-[9px] font-mono leading-none transition-all duration-200 text-gray-400 group-hover:text-red-600 group-hover:scale-125 font-bold select-none">
        +
      </span>
      <span className="absolute bottom-1 left-1.5 text-[9px] font-mono leading-none transition-all duration-200 text-gray-400 group-hover:text-red-600 group-hover:scale-125 font-bold select-none">
        +
      </span>
      <span className="absolute bottom-1 right-1.5 text-[9px] font-mono leading-none transition-all duration-200 text-gray-400 group-hover:text-red-600 group-hover:scale-125 font-bold select-none">
        +
      </span>

      {/* Top Metadata: Ad number & vintage rubber stamp */}
      <div className="flex items-center justify-between gap-1 mb-1.5 z-10">
        <span className="text-[10px] font-mono font-bold tracking-widest text-gray-500 group-hover:text-red-600 transition-colors">
          № {id}
        </span>
        <span className="classified-stamp text-[9px] px-1.5 py-0.2 rounded-none uppercase font-black tracking-wider border border-dashed border-red-600 text-red-600 bg-red-50/50 dark:bg-red-950/20">
          {badge}
        </span>
      </div>

      {/* Header: Icon + Skill Name */}
      <div className="flex items-center gap-2.5 my-1 z-10">
        <div className="w-8 h-8 rounded-none border border-black dark:border-current flex items-center justify-center shrink-0 bg-transparent group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all duration-200 group-hover:scale-105">
          <Icon className="w-4 h-4 transition-transform duration-200 group-hover:rotate-6" />
        </div>
        <div className="min-w-0">
          <p className="font-black text-sm sm:text-base uppercase tracking-tight leading-tight group-hover:text-red-600 transition-colors">
            {name}
          </p>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold truncate">
            {category}
          </p>
        </div>
      </div>

      {/* Specification Reveal Drawer on Hover */}
      <div className="mt-2 pt-2 border-t border-dashed border-gray-300 dark:border-gray-700 z-10">
        <p className="text-[11px] leading-snug text-gray-600 dark:text-gray-400 italic line-clamp-2 group-hover:text-black dark:group-hover:text-gray-200 transition-colors">
          {desc}
        </p>
        <div className="flex items-center justify-between mt-1.5 text-[9px] font-mono uppercase text-gray-400 group-hover:text-red-600 font-bold transition-colors">
          <span>SPEC: {level}</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-red-600">
            AVAILABLE ↗
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ClassifiedsSection() {
  return (
    <section id="classifieds" className="border-b-2 border-black pb-6 mb-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline mb-4 gap-1">
        <div className="flex items-baseline gap-2.5">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
            Classifieds
          </h2>
          <span className="text-[10px] sm:text-xs font-mono px-2 py-0.5 border border-black dark:border-current uppercase tracking-wider bg-red-600 text-white font-bold">
            Section B
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-widest">
          <span>Skills & Trades</span>
          <span>·</span>
          <span className="font-mono">12 Notices</span>
          <span className="hidden md:inline">·</span>
          <span className="hidden md:inline italic normal-case text-gray-400 text-[11px]">
            Hover ad to inspect specifications
          </span>
        </div>
      </div>

      {/* Container: Horizontal scroll on mobile, Broadsheet Grid on sm+ screens */}
      <div className="flex flex-row overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-4 sm:pb-0 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:border-t-2 sm:border-l-2 sm:border-black gap-3 sm:gap-0">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="snap-start sm:border-b-2 sm:border-r-2 sm:border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-none"
          >
            <SkillCell {...skill} />
          </div>
        ))}
      </div>
    </section>
  );
}