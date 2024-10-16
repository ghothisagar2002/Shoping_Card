import React, { useState } from 'react'

const Counting = () => {
    let [value, setValue] = useState({
        count: 0
    })

    let Incre = () => {
        setValue((value) => ({
            count: value.count + 1
        }))
    }

    let Decre = () => {
        setValue((value) => ({
            count: value.count - 1 > 0 ? value.count - 1 : 0
        }))
    }

    return (
        <div>
            <h1>Counting the numbers:</h1>
            <p>Counting the paragraph</p>
            <p>{value.count}</p>
            <button onClick={Incre}>Icreament</button>
            <button onClick={Decre}>Decreament</button>

        </div>
    )
}

export default Counting
