export default function HeroSection() {
  return (
    <section id="editorial" className="border-b-2 border-black pb-6 mb-6">
      {/* Top grid: headline + image/quote */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Headline */}
        <div className="border-r-0 md:border-r-2 border-black pr-0 md:pr-4">
          <h2 className="text-5xl md:text-6xl font-black uppercase leading-none tracking-tight">
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
              src="https://i.pinimg.com/736x/a2/62/b8/a262b8f0cce9ce4bb3134ea0e3d79370.jpg"
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
              "With great power comes great responsibility... and merge conflicts
              that keep you up until 3:00 AM."
            </p>
            <footer className="text-xs mt-3 font-bold uppercase tracking-wide">
              — Ayush Mani Tiwari, 2024
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Body copy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm leading-relaxed">
        <div className="space-y-3">
          <p>
            <span className="font-black text-lg uppercase float-left mr-2 leading-none mt-1">G</span>
            HAZIABAD — Reports are surfacing from the hallowed halls of ABES Engineering College
            regarding a rising figure in the digital landscape. Ayush Mani Tiwari, a computer
            science engineering student, has been observed weaving complex architectural patterns
            into web applications with a dexterity that has left both peers and faculty in a state
            of professional awe.
          </p>
          <p>
            From the intricate logic of Data Structures and Algorithms to the visual finesse of
            modern front-end frameworks, Tiwari's methodology is described as "relentless." "He
            doesn't just write code," one anonymous collaborator stated. "He architects experiences
            that feel as tactile as newsprint."
          </p>
        </div>
        <div className="space-y-3">
          <p>
            His latest deployments suggest a deep integration of AI/ML models into functional,
            user-centric tools, bridging the gap between theoretical computation and practical
            utility. As the industry watches, the question remains: where will this digital phenom
            strike next?
          </p>
        </div>
      </div>
    </section>
  );
}