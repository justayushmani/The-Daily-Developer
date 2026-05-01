const skills = [
  { name: 'React',      category: 'Front End' },
  { name: 'Node.js',    category: 'Server Side' },
  { name: 'C',    category: 'Core Logic' },
  { name: 'Python',     category: 'Backend' },
  { name: 'MERN',       category: 'Ecosystem' },
  { name: 'DSA',        category: 'Logic' },
  { name: 'AI / ML',    category: 'Intelligence' },
  { name: 'C++',        category: 'Core Logic' },
  { name: 'Java',       category: 'Hardware' },
  { name: 'COA',        category: 'Hardware' },
  { name: 'SQL',        category: 'Data' },
  { name: 'Git',        category: 'Versioning' },
];

function SkillCell({ name, category }) {
  return (
    <div className="border border-black p-3 sm:p-2 text-center min-w-[120px] sm:min-w-0 bg-white shrink-0">
      <p className="font-black text-sm uppercase tracking-wide">{name}</p>
      <p className="text-xs text-gray-500 uppercase tracking-widest">{category}</p>
    </div>
  );
}

export default function ClassifiedsSection() {
  return (
    <section id="classifieds" className="border-b-2 border-black pb-6 mb-6">
      <div className="flex justify-between items-baseline mb-3">
        <h2 className="text-3xl font-black uppercase tracking-tight">Classifieds</h2>
        <span className="text-xs text-gray-500 uppercase tracking-widest">
          Section B — Skills & Trades
        </span>
      </div>
      
      {/* Container: Horizontal scroll on mobile, Grid on medium+ screens */}
      <div className="flex flex-row overflow-x-auto snap-x snap-mandatory pb-4 sm:pb-0 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:border-t-2 sm:border-l-2 sm:border-black gap-4 sm:gap-0">
        {skills.map((skill) => (
          <div key={skill.name} className="snap-start sm:border-b-2 sm:border-r-2 sm:border-black border-2 border-black sm:border-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-none">
            <SkillCell {...skill} />
          </div>
        ))}
      </div>
    </section>
  );
}