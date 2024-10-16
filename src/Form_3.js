import React, { useState } from 'react'

const Form_3 = () => {
    let [state, setState] = useState({
        user: {
            username: "",
            userpassword: "",
            useremail: ""
        }
    })
    let { user } = state

    let changeUserName = (event) => {
        setState(() => ({
            user: {
                ...state.user,
                username: event.target.value
            }
        }))
    }

    let changeUserPassword = (event) => {
        setState((state) => ({
            user: {
                ...state.user,
                userpassword: event.target.value
            }
        }))
    }

    let changeEmail = (event) => {
        setState(() => ({
            user: {
                ...state.user,
                useremail: event.target.value
            }
        }))
    }
    let submitLogin = (event) => {
        event.preventDefault();
        console.log(user)
    }
    return (
        <>
            <h2>This is a Forms :</h2>
            <form onSubmit={submitLogin}>
                <div className='form'>
                    <label>Enter your FirstName:&nbsp;&nbsp;
                        <input type="text" placeholder='enter your first name' value={user.username} onChange={changeUserName} />
                    </label>
                </div>&nbsp;&nbsp;
                <div className='form'>
                    <label>Enter your Password:&nbsp;&nbsp;
                        <input type="password" placeholder='enter your password' value={user.userpassword}
                            onChange={changeUserPassword} />
                    </label>
                </div>&nbsp;&nbsp;
                <div className='form'>
                    <label>Enter your Email :&nbsp;&nbsp;
                        <input type="email" placeholder='enter your Email' value={user.useremail}
                            onChange={changeEmail} />
                    </label>
                </div>&nbsp;&nbsp;&nbsp;
                <button type="submit">Login</button>

            </form>
        </>
    )
}

export default Form_3
