import React, { useState } from 'react'

const Multiple_State = () => {
    let [state, setState] = useState({
        studentData: [
            {
                name: "lovely",
                age: 25,
                color: "White",
                id: "556476"
            },
            {
                name: "Vikkey",
                age: 18,
                color: "Black",
                id: "556479"
            },
            {
                name: "Vaishu",
                age: 20,
                color: "White",
                id: "324103403"
            },
            {
                name: "Vennu",
                age: 15,
                color: "CammaChai",
                id: "25404084"
            }
        ]
    })
    let { studentData } = state
    return (
        <>
            <h1>Multiple Datas :</h1>
            <p>{studentData[0].name}</p>
            <p>{studentData[0].age}</p>
            <p>{studentData[0].color}</p>
            <p>{studentData[0].id}</p>
            <p>{studentData[1].name}</p>
            <p>{studentData[1].age}</p>
            <p>{studentData[1].color}</p>
            <p>{studentData[1].id}</p>
            <p>{studentData[2].name}</p>
            <p>{studentData[2].age}</p>
            <p>{studentData[2].color}</p>
            <p>{studentData[2].id}</p>
            <p>{studentData[3].name}</p>
            <p>{studentData[3].age}</p>
            <p>{studentData[3].color}</p>
            <p>{studentData[3].id}</p>
            <pre>{JSON.stringify(studentData)}</pre>
        </>
    )
}

export default Multiple_State
