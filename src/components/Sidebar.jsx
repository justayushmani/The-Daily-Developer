

import { User, Briefcase, Users, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();

  // Handlers for navigation and download
  const handleItemClick = (label) => {
    if (label === 'CAPTURES') {
      navigate('/capture');
    }
    // Add more navigation if needed
  };

  const handleResumeClick = () => {
    window.open('/resume.pdf', '_blank');
  };

  const wantedItems = [
    { icon: <User size={14} />, label: 'Wanted', onClick: null },
    { icon: <Briefcase size={14} />, label: 'CAPTURES', onClick: () => handleItemClick('CAPTURES') },
    { icon: <Users size={14} />, label: 'Collaborate', onClick: null },
    { icon: <Send size={14} />, label: 'Resume', onClick: handleResumeClick },
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
            <li
              key={label}
              className="flex items-center gap-2 px-3 py-2 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white cursor-pointer transition-colors"
              onClick={onClick || undefined}
            >
              {icon}
              {label}
            </li>
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