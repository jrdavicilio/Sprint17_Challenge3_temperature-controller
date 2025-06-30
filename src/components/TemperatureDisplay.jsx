import React from 'react';

export default function TemperatureDisplay({ temperature }) {
  let message = '';
  let colorClass = '';

  if (temperature < 15) {
    message = '¡Hace frío!';
    colorClass = 'cold';
  } else if (temperature <= 25) {
    message = 'Temperatura agradable';
    colorClass = 'pleasant';
  } else {
    message = '¡Hace calor!';
    colorClass = 'hot';
  }

  return (
    <div className={colorClass}>
      <h2>{temperature} °C</h2>
      <p>{message}</p>
    </div>
  );
}
