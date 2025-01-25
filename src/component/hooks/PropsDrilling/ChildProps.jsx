import React from 'react'
import GrandProps from './GrandProps'

const ChildProps = (props) => {
  return (
    <div>
      <h2>I am Child Compnent</h2>
      <h3>{props.data}</h3>
      <GrandProps data={props.data}/>
    </div>
  )
}

export default ChildProps
