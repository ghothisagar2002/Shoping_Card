import React, { useState } from 'react'

const PracticeOneState = () => {
    let [state, setState] = useState({
        name: "Bardaval Jaggu",
        age: 21,
        sex: "Male",
        qualifiaction: "B.Tech"
    })
    return (
        <div>
            <h1>This is a State in React.js Heading</h1>
            <p>This is a State in React.js Paragrapg</p>
            <p>This is a paragraph and very nice</p>
            <p>Name : {state.name}</p>
            <p>Age : {state.age}</p>
            <p>Sex : {state.sex}</p>
            <p>Qualification : {state.qualifiaction}</p>
            <pre>{JSON.stringify(state)}</pre>
        </div>
    )
}

export default PracticeOneState
