import React, { useState } from 'react'

const React_Second_State = () => {
    let [state, setState] = useState({
        studentBioData: [
            {
                name: "Ravinder",
                id: "123456",
                age: 24
            },
            {
                name: "Raju",
                id: "656565",
                age: 23
            },
            {
                name: "Jaggu",
                id: "556476",
                age: 21
            },
            {
                name: "sagar",
                id: "324103403",
                age: 22
            }
        ]
    })
    let { studentBioData } = state;
    return (
        <>
            <div className='Second_State'>
                <h2>Second State Heading {studentBioData[0].name}</h2>
                <p>Second State Paragraph {studentBioData[0].id}</p>
                <p>age : {studentBioData[0].age}</p>
                <p>Name : {studentBioData[1].name}</p>
                <p>id : {studentBioData[1].id}</p>
                <p>age : {studentBioData[1].age}</p>
                <p>name : {studentBioData[2].name}</p>
                <p>id : {studentBioData[2].id}</p>
                <p>age : {studentBioData[2].age}</p>
                <p>name : {studentBioData[3].name}</p>
                <p>id : {studentBioData[3].id}</p>
                <p>age : {studentBioData[3].age}</p>
                <pre>{JSON.stringify(studentBioData)}</pre>
            </div>
        </>
    )
}

export default React_Second_State
