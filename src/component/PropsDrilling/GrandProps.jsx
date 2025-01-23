import React from 'react'

const GrandProps = (props) => {
  return (
    <div>
     <h2> i am a Grand Child Props</h2>
     <h3>{props.data}</h3> 
    </div>
  )
}

export default GrandProps
