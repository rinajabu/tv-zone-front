import React, { useState } from 'react'
import axios from 'axios'
import Navbar from 'react-bootstrap/Navbar'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import Signup from './Signup'
import Auth from './Auth'

const Topnav = (props) => {

  let [users, setUsers] = useState([])

  let [signUpModal, setSignUpModal] = useState(false)
  
  const openSignUpModal = (event) => {
      event.preventDefault()
      if(signUpModal === false) {
          setSignUpModal(true)
      } else {
          setSignUpModal(false)
      }
  }

  const getUsers = () => {
      axios
          .get('https://blooming-thicket-84174.herokuapp.com/api/users')
          // .get('http://localhost:8000/api/users')
          .then(
              (response) => setUsers(response.data),
              (error) => console.error(error)
          )
          .catch((error) => console.error(error)
    )
  }

  const handleUserCreate = (addUser) => {
      axios
        .post('https://blooming-thicket-84174.herokuapp.com/api/users',
        // .post('http://localhost:8000/api/users',
        addUser)
        .then((response) => {
          getUsers()
          setSignUpModal(false)
        })
  }

    return (
        <>

            <Navbar className="sticky-top top-nav" variant="dark" bg="dark" expand="lg">
                <Navbar.Brand className="nav-title" href="https://tv-zone.herokuapp.com/">TV Zone</Navbar.Brand>
                {props.currentUser.username && <h3 className="user-welcome">Welcome, {props.currentUser.username}</h3>}
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Navbar.Collapse className="open-nav-container" id="navbar-dark-example">
                
                {
                    props.authenticated ? <button onClick={props.handleUserLogout} class="btn btn-light">Logout</button> :
                    <div>
                        <button onClick={openSignUpModal} class="sign-up-btn btn btn-light">Sign Up</button>
                        <button onClick={props.openLoginModal} class="btn btn-light">Login</button>
                    </div>
                }

                </Navbar.Collapse>
            </Navbar>
            { signUpModal &&
                <Modal.Dialog id="signup-modal">
                    <Modal.Header>
                        <Modal.Title>Create an Account</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Signup handleUserCreate={handleUserCreate} />
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={openSignUpModal} class="btn btn-dark">Close</button>
                        <br />
                    </Modal.Footer>
                </Modal.Dialog>
            }

            { props.loginModal &&
                <Modal.Dialog id="login-modal">
                    <Modal.Header>
                        <Modal.Title>Sign In</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Auth handleUserLogin={props.handleUserLogin} currentUser={props.currentUser} />
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={props.openLoginModal} class="btn btn-dark">Close</button>
                        <br />
                    </Modal.Footer>
                </Modal.Dialog>
            }
        </>
    )
}

export default Topnav
