import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const TICKER_ITEMS = [
  'FLAWLESS EXECUTION: Bug-free deployments on the first try!',
  'BREAKING: Full-stack architect redefines digital experiences.',
  'INNOVATION: AI/ML integrations reach new milestones.',
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
    <nav className="border-b border-black py-3">
      <ul className="flex flex-wrap justify-center gap-3 text-[0.65rem] sm:text-xs tracking-widest uppercase">
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

function LiveDateTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  return (
    <span>
      {formatDate(currentTime)} | {formatTime(currentTime)}
    </span>
  );
}

export default function Header({ theme = 'light', onToggleTheme = () => {} }) {
  return (
    <header>
      <Ticker />

      {/* Masthead */}
      <div className="border-b-4 border-black text-center py-4 px-4">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tight uppercase">
          The Daily Developer
        </h1>
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs mt-2 border-t border-black pt-2 gap-2">
          <span>Vol. LXXV — No. 128</span>
          <span className="uppercase tracking-widest font-bold">
            Late Edition | Ghaziabad & Gorakhpur | ₹10
          </span>
          <div className="flex items-center gap-2">
            <LiveDateTime />
            <button
              type="button"
              className="theme-toggle"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <motion.span
                key={theme}
                initial={{ opacity: 0, rotate: -70, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="flex"
              >
                {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
              </motion.span>
            </button>
          </div>
        </div>
      </div>

      <NavBar />
    </header>
  );
}
