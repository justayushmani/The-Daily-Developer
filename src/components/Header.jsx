import { useState, useEffect } from 'react';

const TICKER_ITEMS = [
  'deploys bug-free code on the first try! (Sources dispute this claim)',
  'BREAKING NEWS: CS Engineering student at ABES continues to redefine full-stack development',
  `AI/ML integration reaches new milestone — Tiwari's deployment leaves peers speechless`,
];

function Ticker() {
  return (
    <div className="bg-black text-white text-xs py-1 overflow-hidden whitespace-nowrap">
      <div className="animate-marquee inline-block">
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <span key={i} className="mx-8">
            ★ {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function NavBar() {
  const links = ['Editorial', 'Local News', 'Classifieds', 'Letters', 'Archive'];
  return (
    <nav className="border-b border-black py-2">
      <ul className="flex justify-center gap-6 text-xs tracking-widest uppercase">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="hover:underline first:text-red-600 first:font-bold"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Header() {
  return (
    <header>
      <Ticker />

      {/* Masthead */}
      <div className="border-b-4 border-black text-center py-4 px-4">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase">
          The Daily Developer
        </h1>
        <div className="flex justify-between items-center text-xs mt-2 border-t border-black pt-2">
          <span>Vol. LXXV — No. 128</span>
          <span className="uppercase tracking-widest font-bold">
            Late Edition | Ghaziabad & Gorakhpur | ₹10
          </span>
          <span>Tuesday, May 13, 2025</span>
        </div>
      </div>

      <NavBar />
    </header>
  );
}