import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

// Components Import
import Show from './components/Show'
import Add from './components/Add'
import Edit from './components/Edit'
import Filter from './components/Filter'

import DeleteShow from './components/DeleteShow'
import Topnav from './components/Topnav'


const App = () => {

// ==================
// State
// ==================
    let [shows, setShows] = useState([])
    const [filterBy, setFilterBy] = useState('All')

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

    const updateFilter = (event) => {
        setFilterBy(event.target.value)
    }

    useEffect(() => {
        getShows()
    }, [])


// ======================
// Rendering to browser
// ======================
    return (
        <>
            <Topnav />
            <Add handleCreate={handleCreate} />
            <Filter
                updateFilter={updateFilter}
                filterBy={filterBy}
            />
            <div className='shows'>
                {/* start filter by All */}
                { filterBy === 'All' &&
                    shows.map((show) => {
                        return (
                        <div className='show' key={show.id}>
                            <Show show={show}/>
                            <Edit
                                handleUpdate={handleUpdate}
                                show={show}
                            />
                    <DeleteShow handleDelete={handleDelete} />
                            <br />
                        </div>
                    )
                    })
                }
                {/* start filter by category */}
                {shows.filter(shows => shows.genre == filterBy).map((show) => {
                    return (
                        <div className='show' key={show.id}>
                            <h2>All {show.genre}</h2>
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
