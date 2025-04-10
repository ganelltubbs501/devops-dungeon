import React, { useState } from 'react';

export default function TerminalInput() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');

  const handleCommand = (cmd) => {
    let output;
    switch (cmd.trim().toLowerCase()) {
      case 'deploy':
        output = '🚀 Deploying to production... (mock)';
        break;
      case 'status':
        output = '✅ All systems operational.';
        break;
      case 'build':
        output = '🔧 Build started... Complete!';
        break;
      case 'help':
        output = 'Available commands: deploy, status, build, help';
        break;
      default:
        output = `❌ Unknown command: ${cmd}`;
    }
    setHistory([...history, `$ ${cmd}`, output]);
    setInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      handleCommand(input);
    }
  };

  return (
    <div className="bg-black text-green-400 font-mono text-sm rounded-lg p-4 h-56 overflow-y-auto border border-gray-700 shadow mt-4">
      {history.map((line, i) => (
        <div key={i}>{line}</div>
      ))}
      <form onSubmit={handleSubmit} className="flex mt-2">
        <span className="mr-2">$</span>
        <input
          type="text"
          className="bg-transparent flex-1 outline-none border-b border-green-500 text-green-300 placeholder-gray-500"
          placeholder="Type a command (try 'help')"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
        />
      </form>
    </div>
  );
}
