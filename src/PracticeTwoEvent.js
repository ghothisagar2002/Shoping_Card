import React, { useState } from 'react'

const PracticeTwoEvent = () => {
    let [item, setItem] = useState({
        counting: 0
    })

    let Increament = () => {
        setItem((item) => ({
            counting: item.counting + 1
        }))
    }

    let Decreament = () => {
        setItem((item) => ({
            counting: item.counting - 1 > 1 ? item.counting - 1 : 1
        }))
    }
    return (
        <div>
            <h1>Event Handling (2) Example</h1>
            <h3>{item.counting}</h3>
            <button onClick={Increament} type="button">Incre</button>
            <button onClick={Decreament} type="submit">Decre</button>
        </div>
    )
}

export default PracticeTwoEvent
