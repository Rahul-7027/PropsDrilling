import React, { useContext } from 'react'
import { Biodata } from './Index'

const Services = () => {
    const {name,age}=useContext(Biodata)
  return (
    <div>
      <h2>Hii I am Services page and My name is {name} and age is {age}</h2>
    </div>
  )
}

export default Services
