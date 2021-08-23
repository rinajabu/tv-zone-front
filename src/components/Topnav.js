import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

const Topnav = (props) => {

    return (
        <>
            <Navbar className="sticky-top top-nav" variant="dark" bg="dark" expand="lg">
                <Navbar.Brand className="nav-title" href="https://tv-zone.herokuapp.com/">TV Zone</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Navbar.Collapse className="open-nav-container" id="navbar-dark-example">
                    <a href="#"><button class="sign-up-btn btn nav-btn"><strong>Sign Up</strong></button></a>
                    <a href="#"><button class="btn nav-btn"><strong>Login</strong></button></a>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Topnav
