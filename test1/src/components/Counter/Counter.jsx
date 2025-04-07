import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(1);
    function increment() {
        setCount(count + 1);
    }
    function reset() {
        setCount(0);
    }
    function decrement() {
        setCount(count - 1);
    }
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </div>

        
    );
}