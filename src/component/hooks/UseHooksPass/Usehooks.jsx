import React, { use } from 'react'
import { Biodata } from '../ContextApi/Index'

const Usehooks = () => {
    const {name,age}=use(Biodata)
  return (
    <div>
      <h2>Hii I am Use Hooks in React Page and My name is {name} and age is {age}</h2>
    </div>
  )
}

export default Usehooks
