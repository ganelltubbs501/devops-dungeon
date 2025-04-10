import React from 'react';
import { FaCodeBranch, FaTerminal, FaServer, FaTools } from 'react-icons/fa';

const navItems = [
  { name: 'Pipelines', icon: <FaCodeBranch /> },
  { name: 'Logs', icon: <FaTerminal /> },
  { name: 'Environments', icon: <FaServer /> },
  { name: 'Tools', icon: <FaTools /> },
];

export default function Sidebar() {
  return (
    <aside className="w-56 bg-gray-800 border-r border-gray-700 flex flex-col p-4 space-y-4">
      <div className="text-teal-400 font-bold text-xl mb-4 hidden md:block">
        Menu
      </div>
      <nav className="space-y-2">
        {navItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700 cursor-pointer transition-colors"
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-sm">{item.name}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}
