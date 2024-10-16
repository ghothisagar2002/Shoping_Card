import React, { useState } from 'react'

const PracticeMultiState = () => {
    let [state, setState] = useState({
        students_Bio_Data: {
            name: "RamTush",
            age: "45",
            qualifiction: "Agriculture",
            sex: "Male"
        }
    })
    let { students_Bio_Data } = state
    return (
        <div>
            <h4>This is Multiple states in React.js</h4>
            <p>This is a React js states paragraph</p>
            <p>Name : {students_Bio_Data.name}</p>
            <p>Age : {students_Bio_Data.age}</p>
            <p>Qualification : {students_Bio_Data.qualifiction}</p>
            <p>Sex :{students_Bio_Data.sex}</p>
            <pre>{JSON.stringify(students_Bio_Data)}</pre>
        </div>
    )
}

export default PracticeMultiState
