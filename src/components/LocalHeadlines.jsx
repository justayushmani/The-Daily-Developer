const headlines = [
  {
    id: 1,
    image: '/SachAi.png',
    tag: 'MERN Stack',
    title: 'SachAI: Decoding Truth in Every Language!',
    body: `A state-of-the-art verification engine designed for real-time fake news detection and cross-cultural information integrity.`,
    link: 'https://github.com/justayushmani/Code-Orbit',
  },
  {
    id: 2,
    image: 'https://placehold.co/400x200/222/fff?text=SynMed',
    tag: 'AI / NextJS',
    title: 'Rural Healthcare Revolutionized by SynMed!',
    body: `An AI-integrated diagnostic system bringing high-quality healthcare to underserved areas.`,
    link: '#',
  },
  {
    id: 3,
    image: '/Sipll.png',
    tag: 'Node / Socket.io',
    title: 'Spill the Tea Causes Campus Uproar!',
    body: `A secure, anonymous messaging gateway allowing for uninhibited and real-time discourse.`,
    link: 'https://github.com/justayushmani/Spill-The-Tea',
  },
];

function NewsCard({ image, tag, title, body, link }) {
  return (
    <article className="flex flex-col gap-2">
      <div className="border border-black overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-36 object-cover grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>
      <h3 className="font-black text-base uppercase leading-tight">{title}</h3>
      <p className="text-xs leading-relaxed text-gray-700">{body}</p>
      <div className="flex justify-between items-center text-xs mt-auto pt-2 border-t border-black">
        <span className="uppercase tracking-widest font-bold text-gray-500">{tag}</span>
        <a href={link} className="font-bold hover:underline hover:text-red-600">
          Read More...
        </a>
      </div>
    </article>
  );
}

export default function LocalHeadlines() {
  return (
    <section id="local-news" className="border-b-2 border-black pb-6 mb-6">
      <h2 className="text-2xl sm:text-4xl font-black uppercase text-center border-b-2 border-black pb-2 mb-6 tracking-tight">
        Local Headlines
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {headlines.map((item) => (
          <NewsCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}