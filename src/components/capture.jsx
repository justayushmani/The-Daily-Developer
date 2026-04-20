
// Gallery of captured images in the same theme as the site
const sampleImages = [
	'/captures/WhatsApp Image 2026-04-19 at 3.36.34 PM (11).jpeg',
	'/captures/WhatsApp Image 2026-04-19 at 3.36.34 PM (10).jpeg',
	'/captures/WhatsApp Image 2026-04-19 at 3.36.34 PM (9).jpeg',
	'/captures/WhatsApp Image 2026-04-19 at 3.36.34 PM (8).jpeg',
	'/captures/WhatsApp Image 2026-04-19 at 3.36.34 PM (7).jpeg',
	'/captures/WhatsApp Image 2026-04-19 at 3.36.34 PM (6).jpeg',
];

export default function Capture() {
	return (
		<section id="capture" className="border-b-2 border-black pb-6 mb-6">
			<div className="flex justify-between items-baseline mb-3">
				<h2 className="text-3xl font-black uppercase tracking-tight">Captured Moments</h2>
				<span className="text-xs text-gray-500 uppercase tracking-widest">
					Section D — Gallery
				</span>
			</div>
			<p className="text-sm text-gray-700 mb-4">
				A visual chronicle of moments captured through the lens, showcasing creativity and perspective in photography.
			</p>
			<div className="flex flex-row overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{sampleImages.map((src, idx) => (
					<div key={src} className="border-2 border-black rounded-lg overflow-hidden bg-white shadow-md flex items-center justify-center aspect-square min-w-64">
						<img
							src={src}
							alt={`Capture ${idx + 1}`}
							className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
						/>
					</div>
				))}
			</div>
		</section>
	);
}
