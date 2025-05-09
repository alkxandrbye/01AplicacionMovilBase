import React from 'react';
import useCounter from '../ hooks/useCounter';
import useRandomNumber from '../ hooks/RandomNumber';

export const Counter = () => {
    const { count, increaseBy } = useCounter();

    return (
        <div>
            <h3>
                Counter <small>{count}</small>
            </h3>
            <div>
                <button
                    onClick={() => increaseBy(1)}
                    className="p-2 bg-blue-500 rounded-xs w-10 text-white"
                >
                    +1
                </button>
                <button
                    onClick={() => increaseBy(-1)}
                    className="p-2 bg-blue-500 rounded-xs w-10 text-white"
                >
                    -1
                </button>
            </div>
        </div>
    );
};

export const RandomNumberComponent = () => {
    const { number, generateNumber } = useRandomNumber();

    return (
        <div>
            <h1>Número aleatorio: {number}</h1>
            <button
                onClick={() => generateNumber(1, 100)}
                className="p-2 bg-blue-400 text-white rounded">
                Generar número
            </button>
        </div>
    );
};

