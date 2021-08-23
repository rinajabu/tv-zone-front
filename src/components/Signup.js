import React, { useState } from 'react'

// USER SIGN-UP component
const Signup = (props) => {

  let emptyUser = { username: '', password: '' }
  let [user, setUser] = useState(emptyUser)

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUserCreate(user)
    event.target.reset()
    setUser(emptyUser)
  }

  return(
    <>
      <br />
      <br />

      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username: </label>
        <input type='text' name='username' onChange={handleChange} />

        <br />

        <label htmlFor='password'>Password: </label>
        <input type='password' name ='password' onChange={handleChange} />

        <input class="btn btn-dark" type='submit' value="CREATE ACCOUNT"/>

      </form>
    </>
  )
}

export default Signup
