import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

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
    
      <Form onSubmit={handleSubmit}>
        <FloatingLabel htmlFor='username'>Username: </FloatingLabel>
        <Form.Control type='text' name='username' onChange={handleChange} required maxLength='75' />

        <br />

        <FloatingLabel htmlFor='password'>Password: </FloatingLabel>
        <Form.Control type='password' name ='password' onChange={handleChange} required maxLength='10000' />

        <br />

        <input class="btn btn-success" type='submit' value="CREATE ACCOUNT"/>

      </Form>
    </>
  )
}

export default Signup
