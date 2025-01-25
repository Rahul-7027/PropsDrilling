import React from 'react'

const ReactCount = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
      <h1>React Memo Hooks</h1>
      <p>{count}</p>
      <button onClick={()=>{setCount((previousCount)=>previousCount+1)}} type="submit">Increment</button>
    </div>
  )
}

export default ReactCount
