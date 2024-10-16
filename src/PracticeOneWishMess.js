import React, { useState } from 'react'

const PracticeOneWishMess = () => {
    let [message, setMessage] = useState({
        messages: "Hello"
    })
    let goodMorning = () => {
        setMessage((message) => ({
            messages: "Good morning"
        }))
    }
    let goodAfter = () => {
        setMessage(() => ({
            messages: "Good After noon"
        }))
    }
    let goodEvening = () => {
        setMessage(() => ({
            messages: "Good Evening"
        }))
    }
    return (
        <div>
            <h2>This is a Wish message card :</h2>
            <h3>{message.messages}</h3>
            <button onClick={goodMorning} type="button">Good morning</button>
            <button onClick={goodAfter} type="button">Good After</button>
            <button onClick={goodEvening} type="button">Good Evening</button>
        </div>
    )
}

export default PracticeOneWishMess
