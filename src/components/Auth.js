import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'


// USER sign-in component
const Auth = (props) => {

  let emptyUser = { username: '', password: '' }
  let [user, setUser] = useState(emptyUser)

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUserLogin(user)
    event.target.reset()
  }

  return(
    <>

      <Form onSubmit={handleSubmit}>
        <FloatingLabel htmlFor='username'>Username: </FloatingLabel>
        <Form.Control type='text' name='username' onChange={handleChange} />

        <br />

        <FloatingLabel htmlFor='password'>Password: </FloatingLabel>
        <Form.Control type='password' name='password' onChange={handleChange} />

        <br />

        <input class="btn btn-success" type="submit" value="LOGIN" />

      </Form>
    </>
  )
}

export default Auth
