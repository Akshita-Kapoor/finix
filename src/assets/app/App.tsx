import React from 'react';
import ChatPanel from '../components/chat/ChatPanel';
import CompanyPanel from '../components/company/CompanyPanel';

const App: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Chat Panel */}
      <div className="flex-1 border-r border-gray-200">
        <ChatPanel />
      </div>

      {/* Company Panel */}
      <div className="w-96 p-4 bg-white">
        <CompanyPanel />
      </div>
    </div>
  );
};

export default App;
