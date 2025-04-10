import React, { useState } from 'react';

export default function PipelinePanel() {
  const [status, setStatus] = useState('idle');
  const [buildResult, setBuildResult] = useState(null);

  const runBuild = () => {
    setStatus('building');
    setBuildResult(null);

    // Simulate build time
    setTimeout(() => {
      const success = Math.random() > 0.3;
      setStatus(success ? 'success' : 'fail');
      setBuildResult(success ? '✅ Build succeeded' : '❌ Build failed');
    }, 2000);
  };

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-semibold text-teal-300 mb-2">🛠️ CI/CD Pipeline</h2>
      
      <div className="flex items-center gap-4">
        <button
          onClick={runBuild}
          className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded transition"
          disabled={status === 'building'}
        >
          {status === 'building' ? 'Running...' : 'Trigger Build'}
        </button>

        <span className="text-sm text-gray-300">
          Status: <strong className={`uppercase ${status === 'fail' ? 'text-red-400' : status === 'success' ? 'text-green-400' : 'text-yellow-400'}`}>{status}</strong>
        </span>
      </div>

      {buildResult && (
        <div className="mt-2 text-sm text-gray-200">{buildResult}</div>
      )}
    </div>
  );
}
