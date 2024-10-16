import React, { useState } from 'react'

const SagarState = () => {
    let [state, setState] = useState({
        Employeess: [
            {
                name: "Ravi",
                id: "12345",
                age: "24",
                role: "Softwear Developer"
            },
            {
                name: "Raju",
                id: "656565",
                age: "23",
                role: "Police"
            },
            {
                name: "Jaggu",
                id: "987654",
                age: "21",
                role: "BTech"
            },
            {
                name: "Sagar",
                id: "324103403",
                age: "22",
                role: "MCA"
            }
        ]

    });

    return (
        <>
            <h1>This is Functional Componends State</h1>
            <pre>{JSON.stringify(state)}</pre>
        </>
    )
}

export default SagarState;
