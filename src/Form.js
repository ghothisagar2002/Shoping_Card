import React, { useState } from 'react'
const Form = () => {
  let [state, setState] = useState({
    user: {
      username: "",
      password: ""
    }
  })
  let { user } = state

  let changeUserName = (event) => {
    setState((state) => ({
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
        password: event.target.value
      }
    }))
  }
  let submitLogin = (event) => {
    event.preventDefault();
    console.log(user)
  }

  return (
    <div>
      <h1>Forms Main Heading :</h1>
      <pre>{JSON.stringify(user)}</pre>
      <form onSubmit={submitLogin}>
        <input type="text" value={user.username} onChange={changeUserName} placeholder='Enter User Name' /><br />
        <input type="password" value={user.password} onChange={changeUserPassword} placeholder='Enter User Password' /><br />
        <button type="submit">Login</button>

      </form>
    </div>
  )
}

export default Form
