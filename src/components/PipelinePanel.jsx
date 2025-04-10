import React, { useState } from 'react';
import axios from 'axios';

export default function PipelinePanel() {
  const [status, setStatus] = useState('idle');
  const [buildResult, setBuildResult] = useState(null);

  const runBuild = async () => {
    setStatus('building');
    setBuildResult(null);

    try {
      // Trigger the build by calling the backend API
      await axios.post('http://localhost:5000/api/trigger-build');

      // Poll for the build status after 2 seconds
      setTimeout(async () => {
        const response = await axios.get('http://localhost:5000/api/build-status');
        setStatus(response.data.status);
        setBuildResult(response.data.status === 'success' ? '✅ Build succeeded' : '❌ Build failed');
      }, 2000);
    } catch (error) {
      console.error('Error triggering build:', error);
      setStatus('fail');
      setBuildResult('❌ Build failed');
    }
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
