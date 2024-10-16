import React, { useState } from 'react'

const Second_Incre_Decre = () => {
    let [state, setState] = useState({
        count: 0
    })
    let Increasing = () => {
        setState((state) => ({
            count: state.count + 1
        }))
    }
    let Decreasing = () => {
        setState((state) => ({
            count: state.count - 1
        }))
    }
    return (
        <div>
            <div className='Second_Increament_Decreament'>
                <h1>Second Project Increamen And Decreament</h1>
                <p>This Is a Paragraph</p>
                <p>{state.count}</p>
                <button onClick={Increasing}>+</button>
                <button onClick={Decreasing}>-</button>
            </div>
        </div>
    )
}

export default Second_Incre_Decre
