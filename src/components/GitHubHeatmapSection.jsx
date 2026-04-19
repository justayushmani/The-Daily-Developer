export default function GitHubHeatmapSection({ username = "justayushmani" }) {
  return (
    <section id="github-heatmap" className="border-b-2 border-black pb-6 mb-6">
      <div className="flex justify-between items-baseline mb-3">
        <h2 className="text-3xl font-black uppercase tracking-tight">GitHub Heatmap</h2>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
          className="text-xs text-gray-500 uppercase tracking-widest"
        >
          View GitHub profile
        </a>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-700 leading-relaxed">
          In the bustling digital newsroom of code, every commit is a headline, every repository a story. This heatmap chronicles my journey through the world of software development—a visual testament to the relentless pursuit of innovation, the late-night debugging sessions, and the triumphs of turning ideas into reality. As a developer, I believe in the power of open-source collaboration and continuous learning, and this map serves as my personal ledger of growth and contribution to the global codebase.
        </p>
      </div>
      <div className="bg-gray-50 border border-black p-4">
        <img
          src={`https://ghchart.rshah.org/${username}`}
          alt={`${username} GitHub contribution heatmap`}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

