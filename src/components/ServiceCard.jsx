import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export default function ServiceCard({ name }) {
  const [status, setStatus] = useState('checking');

  useEffect(() => {
    const delay = Math.random() * 2000 + 1000;
    const timeout = setTimeout(() => {
      const up = Math.random() > 0.3;
      setStatus(up ? 'up' : 'down');
    }, delay);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`p-4 rounded-lg border shadow transition duration-300
      ${status === 'up' ? 'bg-green-900 border-green-500 text-green-100' :
        status === 'down' ? 'bg-red-900 border-red-500 text-red-100' :
        'bg-gray-800 border-gray-600 text-gray-300'}`}>
      <h3 className="text-md font-semibold mb-2">{name}</h3>
      {status === 'checking' && <span className="text-sm italic">Checking status...</span>}
      {status === 'up' && (
        <div className="flex items-center gap-2">
          <FaCheckCircle /> <span className="text-sm">Service is Up</span>
        </div>
      )}
      {status === 'down' && (
        <div className="flex items-center gap-2">
          <FaTimesCircle /> <span className="text-sm">Service is Down</span>
        </div>
      )}
    </div>
  );
}
