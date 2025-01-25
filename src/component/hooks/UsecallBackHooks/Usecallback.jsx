import React, { useCallback, useState } from 'react'

const Usecallback = () => {
  const [count, setCount] = useState(0)

  const handleDecrement = useCallback(() => {
    console.log("Decrement");
    setCount((prevCount) => prevCount - 1);
}, []);

  const handleIncrement = useCallback(() => {
    console.log("Increment");
    setCount((prevCount) => prevCount + 1);
}, []);


  const handleReset = () => {
    setCount(0)
  }
  return (
    <div>
      <h2>UseCallback Hooks</h2>
      <p>{count}</p>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Usecallback
