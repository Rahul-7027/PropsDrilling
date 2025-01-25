import React, { useState } from 'react'
import MemoCount from './MemoCount'

const ReactCount = () => {
    
    const [count, setCount] = useState(0)
  return (
    <div>
      <h1>React Memo Hooks</h1>
      <p>{count}</p>
      <button onClick={()=>{setCount((previousCount)=>previousCount+1)}} type="submit">Increment</button>

      <MemoCount/>
    </div>
  )
}

export default ReactCount
