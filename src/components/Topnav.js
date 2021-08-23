import React, { useState } from 'react'
import axios from 'axios'
import Navbar from 'react-bootstrap/Navbar'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import Signup from './Signup'
import Auth from './Auth'

const Topnav = (props) => {

  let [users, setUsers] = useState([])
  let [currentUser, setCurrentUser] = useState({})
  let [authenticated, setAuthenticated] = useState(false)

  let [signUpModal, setSignUpModal] = useState(false)
  let [loginModal, setLoginModal] = useState(false)

  const openSignUpModal = (event) => {
      event.preventDefault()
      if(signUpModal === false) {
          setSignUpModal(true)
      } else {
          setSignUpModal(false)
      }
  }

  const openLoginModal = (event) => {
      event.preventDefault()
      if(loginModal === false) {
          setLoginModal(true)
      } else {
          setLoginModal(false)
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

  const handleUserLogin = (user) => {
    axios
    .put('https://blooming-thicket-84174.herokuapp.com/api/users/login', user)
    // .put('http://localhost:8000/api/users/login', user)
    .then(
      (response) => {
      setCurrentUser(response.data)
      setAuthenticated(true)
      setLoginModal(false)
    }
    )
  }

  const handleUserLogout = (user) => {
      setCurrentUser({})
      setAuthenticated(false)
  }

    return (
        <>

            <Navbar className="sticky-top top-nav" variant="dark" bg="dark" expand="lg">
                <Navbar.Brand className="nav-title" href="https://tv-zone.herokuapp.com/">TV Zone</Navbar.Brand>
                {currentUser.username && <h3>Welcome, {currentUser.username}</h3>}
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Navbar.Collapse className="open-nav-container" id="navbar-dark-example">

                    {
                      authenticated ? <button onClick={handleUserLogout} class="btn btn-light">Logout</button> :
                        <div>
                            <button onClick={openSignUpModal} class="btn btn-light">Sign Up</button>
                            <button onClick={openLoginModal} class="btn btn-light">Login</button>
                        </div>
                    }

                </Navbar.Collapse>

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

                    { loginModal &&
                        <Modal.Dialog id="login-modal">
                            <Modal.Header>
                                <Modal.Title>Sign In</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Auth handleUserLogin={handleUserLogin} currentUser={currentUser} />
                            </Modal.Body>
                            <Modal.Footer>
                                <button onClick={openLoginModal} class="btn btn-dark">Close</button>
                                <br />
                            </Modal.Footer>
                        </Modal.Dialog>
                    }
            </Navbar>

        </>
    )
}

export default Topnav
