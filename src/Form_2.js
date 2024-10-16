import React, { useState } from 'react'

const Form_2 = () => {
    let [data, setData] = useState({
        details: {
            name: "",
            password: "",
            email: ""
        }
    })
    let { details } = data

    let changeName = (event) => {
        setData((data) => ({
            details: {
                ...data.details,
                name: event.target.value
            }
        }))
    }

    let changePassword = (event) => {
        setData((data) => ({
            details: {
                ...data.details,
                password: event.target.value
            }
        }))
    }

    let changeEmail = (event) => {
        setData((data) => ({
            details: {
                ...data.details,
                email: event.target.value
            }
        }))
    }

    let submit = (event) => {
        event.preventDefault();
        console.log(details)
    }
    return (
        <div>
            <pre>{JSON.stringify(details)}</pre>
            <h2>This is a Forms :</h2>
            <form onSubmit={submit}>
                <input type="text" value={details.name} placeholder='enter your name' onChange={changeName} /><br />

                <input type="password" value={details.password} placeholder='enter your password' onChange={changePassword} /><br />

                <input type="email" value={details.email} placeholder='enter your email' onChange={changeEmail} /><br />

                <button type="submilt">Login</button>
            </form>
        </div>
    )
}

export default Form_2
