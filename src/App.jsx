import React, { useState } from 'react';
import TemperatureDisplay from './components/TemperatureDisplay';
import TemperatureControls from './components/TemperatureControls';
import HistoryList from './components/HistoryList';
import './App.css';

export default function App() {
  const [temperature, setTemperature] = useState(20);
  const [history, setHistory] = useState([]);

  const addToHistory = (newTemp) => {
    const now = new Date();
    const time = now.toLocaleTimeString();
    setHistory((prev) => [...prev, `[${time}] → ${newTemp} °C`]);
  };

  const increaseTemp = () => {
    const newTemp = temperature + 1;
    setTemperature(newTemp);
    addToHistory(newTemp);
  };

  const decreaseTemp = () => {
    const newTemp = temperature - 1;
    setTemperature(newTemp);
    addToHistory(newTemp);
  };

  const resetTemp = () => {
    setTemperature(20);
    setHistory([]);
  };

  return (
    <div id="root">
      <h1>Controlador de Temperatura</h1>
      <TemperatureDisplay temperature={temperature} />
      <TemperatureControls
        onIncrease={increaseTemp}
        onDecrease={decreaseTemp}
        onReset={resetTemp}
      />
      <HistoryList history={history} />
    </div>
  );
}
