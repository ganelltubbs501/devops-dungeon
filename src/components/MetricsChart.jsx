import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function MetricsChart() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    // Simulate metric data (success rate over time)
    const interval = setInterval(() => {
      setData((prevData) => [
        ...prevData,
        { time: new Date().toLocaleTimeString(), successRate: Math.random() * 100 },
      ]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-teal-400 mb-4">📊 Build Success Metrics</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="successRate" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
