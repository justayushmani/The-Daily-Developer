export default function HeroSection() {
  return (
    <section id="editorial" className="border-b-2 border-black pb-6 mb-6">
      {/* Top grid: headline + image/quote */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Headline */}
        <div className="border-r-0 md:border-r-2 border-black pr-0 md:pr-4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase leading-none tracking-tight">
            Ayush Mani Tiwari{' '}
            <span className="italic text-red-600">Strikes Again:</span>{' '}
            The Full-Stack Phenom!
          </h2>
        </div>

        {/* Image + Quote column */}
        <div className="flex flex-col gap-4">
          {/* Portrait */}
          <div className="border border-black">
            <img
              src="https://i.pinimg.com/736x/00/53/1f/00531f63d2b6bdb35d8fa75c143e3d58.jpg"
              alt="Ayush Mani Tiwari"
              className="w-full object-cover grayscale"
            />
            <p className="text-center text-xs italic border-t border-black py-1 px-2">
              Fig 1. The Architect in his element. Photo by The Daily Story.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="border border-black p-4 bg-gray-50">
            <span className="text-red-600 text-4xl font-black leading-none">"</span>
            <p className="text-sm md:text-base font-bold italic leading-snug mt-1">
              "I don't just write code; I architect experiences that feel alive. If it isn't exceptional, it's not finished."
            </p>
            <footer className="text-xs mt-3 font-bold uppercase tracking-wide">
              — Ayush Mani Tiwari
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Body copy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm leading-relaxed">
        <div className="space-y-3">
          <p>
            <span className="font-black text-lg uppercase float-left mr-2 leading-none mt-1">G</span>
            HAZIABAD — Ayush Mani Tiwari is redefining the digital landscape. With relentless precision, he bridges the gap between complex backend logic and stunning, user-centric interfaces.
          </p>
          <ul className="list-disc list-inside font-bold mt-2 space-y-1">
            <li>Full-Stack Architecture</li>
            <li>Advanced AI & Machine Learning</li>
            <li>Scalable Data Structures</li>
          </ul>
        </div>
        <div className="space-y-3">
          <p>
            From deploying high-performance applications to integrating intelligent systems, Tiwari's work isn't just functional—it's visionary. The industry is watching; the next digital breakthrough is already in motion.
          </p>
        </div>
      </div>
    </section>
  );
}