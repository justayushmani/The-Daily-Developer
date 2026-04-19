
// Gallery of captured images in the same theme as the site
const sampleImages = [
	'/captures/sample1.jpg',
	'/captures/sample2.jpg',
	'/captures/sample3.jpg',
];

export default function Capture() {
	return (
		<div className="border-2 border-black bg-white rounded-lg p-6 max-w-2xl mx-auto mt-8 shadow-lg">
			<h2 className="text-xl font-black uppercase tracking-widest mb-2 text-black">Captured Moments</h2>
			<p className="text-xs text-gray-500 mb-6">A gallery of your captured images. (Sample images shown)</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{sampleImages.map((src, idx) => (
					<div key={src} className="border border-black rounded overflow-hidden bg-gray-100 flex items-center justify-center aspect-square">
						<img
							src={src}
							alt={`Capture ${idx + 1}`}
							className="object-cover w-full h-full hover:scale-105 transition-transform duration-200"
						/>
					</div>
				))}
			</div>
		</div>
	);
}
