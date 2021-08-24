import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'

// Components Import
import Show from './components/Show'
import Add from './components/Add'
import Edit from './components/Edit'
import Filter from './components/Filter'
import DeleteShow from './components/DeleteShow'
import Topnav from './components/Topnav'
import Footer from './components/Footer'
import Favorites from './components/Favorites'

const App = () => {

// ==================
// State
// ==================
    let [shows, setShows] = useState([])
    const [filterBy, setFilterBy] = useState('All')
    // user state
    let [currentUser, setCurrentUser] = useState({})
    // login states
    let [loginModal, setLoginModal] = useState(false)
    let [authenticated, setAuthenticated] = useState(false)

// ==================
// Event Handlers
// ==================

    const handleCreate = (addShow) => {
        console.log(addShow);
        axios
            .post('https://blooming-thicket-84174.herokuapp.com/api/shows',
            addShow)
            .then((response) => {
                console.log(response)
                getShows()
            })
        console.log(addShow);
    }

    const handleDelete = (event) => {
        axios
            .delete(`https://blooming-thicket-84174.herokuapp.com/api/shows/${event.target.value}`)
            .then((response) => {
                getShows()
            })
    }

    const handleUpdate = (editShow) => {
        console.log(editShow)
        axios
            .put(`https://blooming-thicket-84174.herokuapp.com/api/shows/${editShow.id}`, editShow)
            .then((response) => {
                getShows()
            })
    }

    const getShows = () => {
        axios
            .get('https://blooming-thicket-84174.herokuapp.com/api/shows')
            .then(
                (response) => setShows(response.data),
                (error) => console.error(error)
            )
            .catch((error) => console.error(error))
    }

    const updateFilter = (event) => {
        setFilterBy(event.target.value)
    }

    const handleUserLogout = (user) => {
        setCurrentUser({})
        setAuthenticated(false)
    }

    const openLoginModal = (event) => {
        event.preventDefault()
        if(loginModal === false) {
            setLoginModal(true)
        } else {
            setLoginModal(false)
        }
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

    useEffect(() => {
        getShows()
    }, [])

// ======================
// Rendering to browser
// ======================
    return (
        <>
            <Topnav 
                currentUser={currentUser} 
                loginModal={loginModal}
                authenticated={authenticated}
                handleUserLogin={handleUserLogin} 
                handleUserLogout={handleUserLogout}
                openLoginModal={openLoginModal}
            />
        
            <Favorites />


            <Add handleCreate={handleCreate} />
            <Filter
                updateFilter={updateFilter}
                filterBy={filterBy}
            />
            <>
                { filterBy === 'All' && shows.map((show) => {
                    return (
                        <Card border='dark' className='card show'>
                            <Card.Img varient='top' className='card-img' />
                                    <iframe className='video' src={show.video}></iframe>
                            <Card.Body>
                                <Card.Title>
                                    <h1>{show.title}</h1>
                                </Card.Title>
                                <Card.Text>
                                    <Show show={show}/>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="edit-delete-btns">
                                <Edit
                                    handleUpdate={handleUpdate}
                                    show={show}
                                />
                                <DeleteShow
                                    handleDelete={handleDelete}
                                    value={show.id}
                                    show={show}
                                />
                            </Card.Footer>
                        </Card>
                    )
                })}
            </>
            <br />
            <>
                {/* start filter by category */}
                {shows.filter(shows => shows.genre === filterBy).map((show) => {
                    return (
                        <Card border='dark' className='card show'>
                            <Card.Img varient='top' className='card-img' />
                                    <iframe className='video' src={show.video}></iframe>
                            <Card.Body>
                                <Card.Title>
                                    <h1>{show.title}</h1>
                                </Card.Title>
                                <Card.Text>
                                    <Show show={show}/>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="edit-delete-btns">
                                <Edit
                                    handleUpdate={handleUpdate}
                                    show={show}
                                />
                                <DeleteShow
                                    handleDelete={handleDelete}
                                    value={show.id}
                                    show={show}
                                />
                            </Card.Footer>
                        </Card>
                    )
                })}
            </>
            <Footer />
        </>
    )
}

export default App;
