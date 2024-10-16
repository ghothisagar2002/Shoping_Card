import React, { useState } from 'react'

const FirstReact_Practice_State = () => {
    let [state, setState] = useState({
        name: "Ram",
        age: 25,
        habbit: "Cricket player"
    })
    return (
        <div>
            <h1>Name : {state.name} </h1>
            <p>Age : {state.age}</p>
            <p>Habbits : {state.habbit}</p>
            <pre>{JSON.stringify(state)}</pre>
        </div>
    )
}

export default FirstReact_Practice_State
