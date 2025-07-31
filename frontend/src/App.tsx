import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import './App.css';

const App: React.FC = () => {
  const [showStats, setShowStats] = useState(false);

  const handleSeeStats = () => {
    setShowStats(true);
  };

  return (
    <div className="App">
      <WelcomeScreen onSeeStats={handleSeeStats} showStats={showStats} />
    </div>
  );
};

export default App;
