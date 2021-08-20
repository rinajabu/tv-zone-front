import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

// Components Import
import Show from './components/Show'
import Add from './components/Add'
import Edit from './components/Edit'

const App = () => {

// ==================
// State
// ==================
    let [shows, setShows] = useState([])

// ==================
// Event Handlers
// ==================

    const handleCreate = (addShow) => {
        axios
            .post('https://blooming-thicket-84174.herokuapp.com/api/shows',
            addShow)
            .then((response) => {
                console.log(response)
                getShows()
            })
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

    useEffect(() => {
        getShows()
    }, [])


// ======================
// Rendering to browser
// ======================
    return (
        <>
            <h1>TV Zone</h1>
            <Add handleCreate={handleCreate} />
            <div className='shows'>
                {shows.map((show) => {
                    return (
                        <div className='show' key={show.id}>
                            <Show show={show}/>
                            <Edit
                                handleUpdate={handleUpdate}
                                show={show}
                            />
                            <button
                                onClick={handleDelete}
                                value={show.id}>Delete
                            </button>
                            <br />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default App;
