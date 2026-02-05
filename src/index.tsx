import React from 'react';
import { createRoot } from 'react-dom/client';
import HistoricalDates from './components/HistoricalDates/HistoricalDates';
import { timelineData } from './data/timelineData';

const App = () => {
  return (
    <div>
      <HistoricalDates data={timelineData} />
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
