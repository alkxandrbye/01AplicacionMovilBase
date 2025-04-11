import { useState } from 'react';
import { useCounter } from '../hooks/useCounter';


export const Counter = () => {
    const {count, increaseBy} = useCounter();

    return (
        <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4 flex justify-center items-center space-x-2">
            <span>Counter</span>
            <small className="text-lg text-gray-700">{count}</small>
            </h3>
            <div>
                <button
                    onClick={() => increaseBy(+1)}
                    className="p-2 bg-blue-500 rounded-xs w-10 text-white">
                    +1
                </button>
                <button
                    onClick={() => increaseBy(-1)}
                    className="p-2 bg-blue-500 rounded-xs w-10 text-white">
                    -1
                </button>
            </div>
        </div>

    );
};
