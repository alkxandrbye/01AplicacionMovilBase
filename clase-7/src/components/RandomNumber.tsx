import React from 'react';
import { useRandomNumber } from '../hooks/useRandomNumber';

export const RandomNumber = () => {
  const { number, generateRandom } = useRandomNumber();

  return (
    <div className="text-center p-4">
      <h2 className="text-xl font-semibold mb-4">Número Aleatorio</h2>
      <button
        onClick={generateRandom}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Generar número
      </button>
      {number !== null && (
        <p className="mt-4 text-lg text-blue-700">Número generado: {number}</p>
      )}
    </div>
  );
};
