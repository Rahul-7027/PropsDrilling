import React, { useContext } from 'react'
import { Biodata } from './Index'

const About = () => {
    const {name,age}=useContext(Biodata)
  return (
    <div>
      <h2>Hii I am about page and My name is {name} and age is {age}</h2>
    </div>
  )
}

export default About
