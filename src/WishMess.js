import React, { useState } from 'react'

const WishMess = () => {
    let [mess, setMess] = useState({
        messages: "Hello"
    })
    let sayGoodMorning = () => {
        setMess((mess) => ({
            messages: "Good Morning"
        }))
    }

    let sayGoodAfterNoon = () => {
        setMess((mess) => ({
            messages: "Good After-Noon"
        }))
    }
    let sayGoodEvening = () => {
        setMess((mess) => ({
            messages: "Good Evening"
        }))
    }
    return (
        <div>
            <h2>This is Wishing the Messages</h2>
            <p>Tis is Wish Messages Paragraph</p>
            <p>{mess.messages}</p>
            <button onClick={sayGoodMorning}>Good Morning</button>
            <button onClick={sayGoodAfterNoon}>Good AfterNoon</button>
            <button onClick={sayGoodEvening}>Good Evening</button>
        </div>
    )
}

export default WishMess
