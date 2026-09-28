export default function LeetCodeHeatmapSection({ username = "ayushmanitiwari_0708", theme = "dark" }) {
  return (
    <section id="leetcode-heatmap" className="border-b-2 border-black pb-6 mb-6">
      <div className="flex justify-between items-baseline mb-3">
        <h2 className="text-3xl font-black uppercase tracking-tight">LeetCode Heatmap</h2>
        <a
          href={`https://leetcode.com/${username}/`}
          target="_blank"
          rel="noreferrer"
          className="text-xs text-gray-500 uppercase tracking-widest"
        >
          View LeetCode profile
        </a>
      </div>
      <p className="mb-4 text-sm text-gray-700 leading-relaxed">
        A year of problem-solving, one submission at a time.
      </p>
      <div className="bg-gray-50 border border-black p-4">
        <img
          src={`https://leetcard.jacoblin.cool/${encodeURIComponent(username)}?ext=heatmap&theme=${theme === "dark" ? "dark" : "light"}&font=Roboto_Slab&border=0&radius=0`}
          alt={`${username} LeetCode activity heatmap and solving statistics`}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}