import React, { useState, useEffect, useRef } from 'react';

export default function LogsConsole() {
  const [logs, setLogs] = useState([]);
  const logRef = useRef(null);

  const fakeLogs = [
    '🔄 Initializing build agent...',
    '✅ Checking out code...',
    '📦 Installing dependencies...',
    '📦 Installing tailwindcss@3.4.1...',
    '🚀 Running tests...',
    '✅ Tests passed!',
    '🛠 Deploying to staging...',
    '✅ Deployment complete.',
    '🎉 Build finished successfully!'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (logs.length < fakeLogs.length) {
        setLogs(prev => [...prev, fakeLogs[prev.length]]);
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [logs]);

  useEffect(() => {
    logRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  return (
    <div className="bg-black text-green-400 font-mono text-sm rounded-lg p-4 h-64 overflow-y-auto border border-gray-700 shadow">
      {logs.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
      <div ref={logRef} />
    </div>
  );
}
