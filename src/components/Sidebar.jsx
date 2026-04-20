

import { User, Users, Send, Mail, Code, ExternalLink } from 'lucide-react';

export default function Sidebar() {
  const wantedItems = [
    { icon: <User size={14} />, label: 'Wanted', onClick: null },
    { icon: <Users size={14} />, label: 'Collaborate', onClick: null },
    { icon: <Mail size={14} />, label: 'Instagram', onClick: () => window.open('https://www.instagram.com/ayush.__.0708?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank') },
    { icon: <ExternalLink size={14} />, label: 'LinkedIn', onClick: () => window.open('https://www.linkedin.com/in/ayush-mani-tiwari-b6369b344/', '_blank') },
    { icon: <Code size={14} />, label: 'GitHub', onClick: () => window.open('https://github.com/justayushmani', '_blank') },
    { icon: <ExternalLink size={14} />, label: 'X (Twitter)', onClick: () => window.open('https://x.com/AyushmaniTiwa10', '_blank') },
     { icon: <Send size={14} />, label: 'Resume', onClick: null },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* The Wanted List */}
      <div className="border-2 border-black">
        <div className="bg-black text-white text-xs font-black uppercase tracking-widest px-3 py-1">
          The Wanted List
          <div className="font-normal normal-case tracking-normal text-gray-400">
            Opportunities & Leads
          </div>
        </div>
        <ul className="divide-y divide-black">
          {wantedItems.map(({ icon, label, onClick }) => (
            label === 'Resume' ? (
              <a
                key={label}
                href="/resume.pdf"
                download="Ayush_Resume.pdf"
                className="flex items-center gap-2 px-3 py-2 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white cursor-pointer transition-colors no-underline"
              >
                {icon}
                {label}
              </a>
            ) : (
              <li
                key={label}
                className="flex items-center gap-2 px-3 py-2 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white cursor-pointer transition-colors"
                onClick={onClick || undefined}
              >
                {icon}
                {label}
              </li>
            )
          ))}
        </ul>
      </div>

      {/* Reward Card */}
      <div className="border-2 border-black p-4 text-center">
        <p className="text-xs uppercase tracking-widest font-bold text-gray-500">Reward</p>
        <p className="text-xs mt-1 text-gray-600 leading-tight">
          For information leading to high-performance recruitment
        </p>
        <a
          href="#letters"
          className="mt-3 inline-block bg-black text-white text-xs font-black uppercase tracking-widest px-4 py-2 hover:bg-red-600 transition-colors"
        >
          Hire Ayush
        </a>
      </div>
    </div>
  );
}