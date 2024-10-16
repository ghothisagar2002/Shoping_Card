import React, { useState } from 'react'

const React_First_State = () => {
    let [state, setState] = useState({
        name: "Lovely Professional Univercity",
        age: 1947,
        location: "Punjab"
    })
    return (
        <>
            <div className='firstState'>
                <h1>Hello Good Morning {state.name}</h1>
                <p>First Paragraph {state.age}</p>
                <p>location : {state.location}</p>
                <pre>{JSON.stringify(state)}</pre>
            </div>
        </>
    )
}

export default React_First_State
