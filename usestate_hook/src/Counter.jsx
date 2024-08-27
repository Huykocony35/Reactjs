import React, { useState } from "react"
function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount( count =>count + 1);
        setCount( count =>count + 1);
        setCount( count =>count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }
    return(
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={increment}>TANG</button>
            <button className="counter-button" onClick={decrement}>GIAM</button>
            <button className="counter-button" onClick={reset}>RESETS</button>
        </div>
    )
}
export default Counter