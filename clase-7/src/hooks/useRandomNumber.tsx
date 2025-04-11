import { useState } from 'react';

export const useRandomNumber = () => {
  const [number, setNumber] = useState<number | null>(null);

  const generateRandom = () => {
    const random = Math.floor(Math.random() * 100);
    setNumber(random);
  };

  return {
    number,
    generateRandom,
  };
};
