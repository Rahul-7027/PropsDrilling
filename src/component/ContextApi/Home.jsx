import React from 'react'
import { useCustomBioData } from './Index'

const Home = () => {
    const { name, age } = useCustomBioData()
    return (
        <div>
            <h2>Hello UseContext Provider {name} and age is {age}</h2>
        </div>
    )
}

export default Home
