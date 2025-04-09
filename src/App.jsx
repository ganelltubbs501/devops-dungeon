import React, { useState } from 'react';

function App() {
  const [quest, setQuest] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchQuest = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://your-api-id.execute-api.us-east-1.amazonaws.com/prod/quest");
      const data = await response.json();
      setQuest(data);
    } catch (error) {
      setQuest({ error: 'Failed to load quest.' });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">DevOps Dungeon - Demo Mode</h1>
      <button
        onClick={fetchQuest}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold mb-4"
      >
        Load Quest
      </button>

      {loading && <p>Loading...</p>}

      {quest && (
        <div className="bg-gray-800 p-6 rounded shadow-md w-full max-w-md">
          {quest.error ? (
            <p className="text-red-500">{quest.error}</p>
          ) : (
            <>
              <h2 className="text-xl font-bold mb-2">{quest.title}</h2>
              <p className="mb-2">{quest.description}</p>
              <p><strong>Tools:</strong> {quest.tools?.join(', ')}</p>
              <p><strong>Difficulty:</strong> {quest.difficulty}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;