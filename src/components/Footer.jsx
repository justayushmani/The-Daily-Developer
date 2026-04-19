export default function Footer() {
  return (
    <footer className="bg-black text-white mt-8">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-start gap-4">
        {/* Brand */}
        <div>
          <p className="font-black text-lg uppercase tracking-tight">The Daily Developer</p>
          <p className="text-xs text-gray-400 mt-1 max-w-xs leading-relaxed">
            © 1998–2024 The Daily Developer. All rights reserved. Member of the Associated Press.
            Designed & Deployed by Ayush Mani Tiwari.
          </p>
        </div>

        {/* Links */}
        <nav>
          <ul className="flex flex-wrap gap-4 text-xs uppercase tracking-widest text-gray-400">
            {['Privacy Policy', 'Terms of Service', 'Archive', 'Annex'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white hover:underline transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}