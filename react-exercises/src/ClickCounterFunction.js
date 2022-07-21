import { useState } from "react"

export function ClickCounterFunction({initialValue = 0}) {
    const [count, setCount] = useState(initialValue);

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(initialValue) }>Reset</button>
        </div>
    )
}