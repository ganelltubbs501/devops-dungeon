import React from 'react';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700 shadow">
      <h1 className="text-2xl font-bold tracking-tight text-teal-400">
        ⚔️ DevOps Dungeon
      </h1>
      <div className="flex items-center gap-4 text-sm text-gray-300">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs">All Systems Operational</span>
        </div>
        <div className="hidden md:inline">Last deploy: 3 mins ago</div>
      </div>
    </header>
  );
}
