import React, { useContext } from 'react'
import { Biodata } from './Index'

const Home = () => {
    const { name, age } = useContext(Biodata)
    return (
        <div>
            <h2>Hello UseContext Provider {name} and age is {age}</h2>
        </div>
    )
}

export default Home
