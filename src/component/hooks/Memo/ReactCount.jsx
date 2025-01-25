import React, { useState,useMemo } from 'react'
import MemoCount from './MemoCount'

const ReactCount = () => {

  const [count, setCount] = useState(0)


  const data = useMemo(() => {
    return {
      name: "Rahul Bhati",
      age: 20
    }
  }, [])


  return (
    <div>
      <h1>React Memo Hooks</h1>
      <p>{count}</p>
      <button onClick={() => { setCount((previousCount) => previousCount + 1) }} type="submit">Increment</button>

      <MemoCount data={data} />
    </div>
  )
}

export default ReactCount
