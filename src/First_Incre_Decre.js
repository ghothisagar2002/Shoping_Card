import React, { useState } from 'react'

const First_Incre_Decre = () => {
    let [state, setState] = useState({
        count: 0
    })
    let adding = () => {
        setState((state) => ({
            count: state.count + 1
        }))
    }
    let Decre = () => {
        setState((state) => ({
            count: state.count - 1 > 0 ? state.count - 1 : 0
        }))
    }
    return (
        <>
            <h1>Counting the App </h1>
            <p>{state.count}</p>
            <button onClick={adding}>Increament</button>
            <button onClick={Decre}>Decreament</button>
        </>
    )
}

export default First_Incre_Decre
