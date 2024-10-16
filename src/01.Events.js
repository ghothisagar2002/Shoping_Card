import React, { useState } from 'react'

const Events = () => {
    let [state, setState] = useState({
        count: 0
    })
    let Increament = () => {
        setState((state) => ({
            count: state.count + 1
        }))
    }
    let Decreament = () => {
        setState((state) => ({
            count: state.count - 1
        }))
    }
    return (
        <>
            <div className='SeethaRam'>
                <h1>Events Increament and Decreament</h1>
                <p className='para'>{state.count}</p>
                <button onClick={Increament} className='btn_one'>Increament</button>
                <button onClick={Decreament} className='btn_two'>Decreament</button>
            </div>
        </>
    )
}

export default Events
