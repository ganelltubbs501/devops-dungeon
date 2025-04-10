import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PipelinePanel from './components/PipelinePanel';
import LogsConsole from './components/LogsConsole';
import ServiceCard from './components/ServiceCard';
import TerminalInput from './components/TerminalInput';

export default function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-white font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex flex-1 p-4 gap-4 overflow-hidden">
          <section className="w-2/3 flex flex-col gap-4">
            <PipelinePanel />
            <LogsConsole />
            <TerminalInput />
          </section>
          <aside className="w-1/3 flex flex-col gap-4">
            <ServiceCard name="CI Server" />
            <ServiceCard name="API Gateway" />
            <ServiceCard name="Database" />
          </aside>
        </main>
      </div>
    </div>
  );
}
