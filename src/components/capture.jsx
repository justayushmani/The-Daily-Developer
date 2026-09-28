
import AccordionGallery from './Accordion Gallery';

const captureItems = [
	{ image: '/captures/WhatsApp Image 2026-04-19 at 3.36.34 PM (11).jpeg', label: 'Capture 01', alt: 'Captured moment 1' },
	{ image: '/captures/WhatsApp Image 2026-04-19 at 3.36.34 PM (10).jpeg', label: 'Capture 02', alt: 'Captured moment 2' },
	{ image: '/captures/WhatsApp Image 2026-04-19 at 3.36.34 PM (9).jpeg', label: 'Capture 03', alt: 'Captured moment 3' },
	{ image: '/captures/WhatsApp Image 2026-04-19 at 3.36.34 PM (8).jpeg', label: 'Capture 04', alt: 'Captured moment 4' },
	{ image: '/captures/WhatsApp Image 2026-04-19 at 3.36.34 PM (7).jpeg', label: 'Capture 05', alt: 'Captured moment 5' },
	{ image: '/captures/WhatsApp Image 2026-04-19 at 3.36.34 PM (6).jpeg', label: 'Capture 06', alt: 'Captured moment 6' },
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
			<p className="text-sm text-gray-700 mb-4 font-bold">
				A visual chronicle of moments captured through the lens.
			</p>
			<AccordionGallery
				items={captureItems}
				defaultIndex={2}
				expandRatio={0.52}
				trigger="hover"
				accentColor="#ffffff"
				overlayColor="#171817"
				textColor="#ffffff"
				grayscale={false}
				inactiveDim={0.08}
				showLabels
				duration={0.6}
				ease="power3.out"
				parallax={0.5}
				tilt={8}
				stagger={0.06}
				height={460}
				gap={10}
				radius={16}
				orientation="horizontal"
			/>
		</section>
	);
}
