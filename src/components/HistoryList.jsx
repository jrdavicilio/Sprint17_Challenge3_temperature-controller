import React from 'react';

export default function HistoryList({ history }) {
  return (
    <ul className="history-list">
      {history.map((entry, index) => (
        <li key={index}>{entry}</li>
      ))}
    </ul>
  );
}

