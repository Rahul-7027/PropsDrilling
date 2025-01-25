import React, { useReducer } from 'react'

const UseReducer = () => {
    const initialCount = {
        count: 0,
        inc:2,
        dec:5
    }

    const reducer = (state, action) => {
        // console.log(state, action)
        // if (action.type === "INCREMENT") {
        //     return state + 1
        // }
        // if (action.type === "DECREMENT") {
        //     return state - 1
        // }
        // if (action.type === "RESET") {
        //     return 0
        // }
        switch (action.type) {
            case "INCREMENT": return {...state, count: state.count + 1 }
            case "DECREMENT": return {...state, count: state.count - 1 }
            case "RESET": return {...state,count:state.count=0}
            default: return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialCount)
    return (
        <div>
            <h2>Use Reducer Hooks</h2>
            <h3>{state.count}</h3>

            <button disabled={state.count === 0} onClick={() => { dispatch({ type: "DECREMENT" }) }} type='submit'>Decrement</button>
            <button onClick={() => { dispatch({ type: "INCREMENT" }) }} type='submit'>Increment</button>
            <button disabled={state.count === 0} onClick={() => { dispatch({ type: "RESET" }) }} type='submit'>RESET</button>
        </div>
    )
}

export default UseReducer
