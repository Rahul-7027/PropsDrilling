import React from 'react'
import { useCustomBioData } from '../ContextApi/Index'

const CustomHooksDefine = () => {
  const {name,age}=useCustomBioData()
  return (
    <div>
      <h2>Hii I am Custom page and My name is {name} and age is {age}</h2>
    </div>
  )
}

export default CustomHooksDefine
