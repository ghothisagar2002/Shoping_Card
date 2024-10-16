import React, { useState } from 'react'

const PracticeOneEventHandling = () => {
    let [data, setData] = useState({
        count: 0
    })
    let Incre = () => {
        setData((data) => ({
            count: data.count + 1
        }))
    }

    let Decrea = () => {
        setData((data) => ({
            count: data.count - 1 > 0 ? data.count - 1 : 0
        }))
    }
    return (
        <div>
            <h2>This is a Event Handling in React.js</h2>
            <h3>{data.count}</h3>
            <button onClick={Incre} type="submit">Increament</button>
            <button onClick={Decrea} type="button">Decreament</button>
        </div>
    )
}

export default PracticeOneEventHandling
