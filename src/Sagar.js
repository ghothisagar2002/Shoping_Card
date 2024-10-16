import React, { useState } from 'react'

const Sagar = () => {
    let [state, setState] = useState({
        name: "sagar",
        age: 22
    })
    return (
        <div>
            <h1>Heading of the State</h1>
            <p>paragraph of the State</p>
            <p>Name :{state.name}</p>
            <p>Age :{state.age}</p>
        </div>
    )
}

export default Sagar
