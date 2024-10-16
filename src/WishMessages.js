import React, { useState } from 'react'

const WishMessages = () => {
    let [state, setState] = useState({
        Messages: "Good"
    })
    let goodMorning = () => {
        setState(() => ({
            Messages: "Good Morning"
        }))
    }
    let goodAfter = () => {
        setState(() => ({
            Messages: "Good AfterNoon"
        }))
    }
    let goodEvening = () => {
        setState(() => ({
            Messages: "Good Evening"
        }))
    }
    return (
        <div>
            <h1>Wish MessAges : Card</h1>
            <p>Hello {state.Messages}</p>
            <button onClick={goodMorning}>GD Morning</button>
            <button onClick={goodAfter}>GD Afternoon</button>
            <button onClick={goodEvening}>GD Evening</button>
        </div>
    )
}

export default WishMessages
