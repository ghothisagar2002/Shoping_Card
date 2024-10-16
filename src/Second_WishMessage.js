import React, { useState } from 'react'

const Second_WishMessage = () => {
    let [state, setState] = useState({
        message: "Hello"
    })
    let apple = () => {
        setState(() => ({
            message: "Apple is a red color"
        }))
    }
    let banana = () => {
        setState(() => ({
            message: "Bababa is a yellow color"
        }))
    }
    let lemon = () => {
        setState(() => ({
            message: "Lemon is citric aaaaaaaaaaaaaacid"
        }))
    }
    return (
        <div>
            <h1>Second Wish Message</h1>
            <p>{state.message}</p>
            <button onClick={apple}>Apple</button>
            <button onClick={banana}>Banana</button>
            <button onClick={lemon}>Lemon</button>
        </div>
    )
}

export default Second_WishMessage
