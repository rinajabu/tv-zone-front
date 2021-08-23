import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

const Topnav = (props) => {

    return (
        <>
            <Navbar className="sticky-top top-nav" variant="dark" bg="dark" expand="lg">
                <Navbar.Brand className="nav-title" href="https://tv-zone.herokuapp.com/">TV Zone</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Navbar.Collapse className="open-nav-container" id="navbar-dark-example">
                    <a href="#"><button class="sign-up-btn btn nav-btn">Sign Up</button></a>
                    <a href="#"><button class="btn nav-btn">Login</button></a>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Topnav
