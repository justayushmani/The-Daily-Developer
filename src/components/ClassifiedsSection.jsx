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
    <div className="border border-black p-2 text-center">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t-2 border-l-2 border-black">
        {skills.map((skill) => (
          <div key={skill.name} className="border-b-2 border-r-2 border-black">
            <SkillCell {...skill} />
          </div>
        ))}
      </div>
    </section>
  );
}