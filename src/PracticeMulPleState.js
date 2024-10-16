import React, { useState } from 'react'

const PracticeMulPleState = () => {
    let [state, setState] = useState({
        students: [
            {
                name: "Lucky",
                age: 1,
                rollnumber: 123,
                qualification: "10Th class"
            },
            {
                name: "Vicky",
                age: 12,
                rollnumber: 1234,
                qualification: "12Th class"
            },
            {
                name: "Dinnu",
                age: 123,
                rollnumber: 12345,
                qualification: "12Th class"
            },
            {
                name: "Varshith",
                age: 1234,
                rollnumber: 123456,
                qualification: "Degree"
            },
            {
                name: "Kavtilya",
                age: 12345,
                rollnumber: 1234567,
                qualification: "B.Tech"
            },
            {
                name: "Rithish",
                age: 123456,
                rollnumber: 12345678,
                qualification: "B.CA"
            }
        ]
    })
    let { students } = state
    return (
        <div>
            <h2>Multiple States in React js </h2>
            <h3>Multiple State in React.js Paragraph </h3>
            <p>Name:{students[0].name}</p>
            <p>Age:{students[0].age}</p>
            <p>RollNo:{students[0].rollnumber}</p>
            <p>Qualification:{students[0].qualification}</p>
            <p>Name:{students[1].name}</p>
            <p>Age:{students[1].age}</p>
            <p>RollNo:{students[1].rollnumber}</p>
            <p>Qualification:{students[1].qualification}</p>
            <p>Name:{students[2].name}</p>
            <p>Age:{students[2].age}</p>
            <p>RollNo:{students[2].rollnumber}</p>
            <p>Qualification:{students[2].qualification}</p>
            <p>Name:{students[3].name}</p>
            <p>Age:{students[3].age}</p>
            <p>RollNo:{students[3].rollnumber}</p>
            <p>Qualification:{students[3].qualification}</p>
            <p>Name:{students[4].name}</p>
            <p>Age:{students[4].age}</p>
            <p>RollNo:{students[4].rollnumber}</p>
            <p>Qualification:{students[4].qualification}</p>
            <p>Name:{students[5].name}</p>
            <p>Age:{students[5].age}</p>
            <p>RollNo:{students[5].rollnumber}</p>
            <p>Qualification:{students[5].qualification}</p>
        </div>
    )
}

export default PracticeMulPleState
