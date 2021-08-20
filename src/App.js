import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

// Components Import
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
            .delete('https://blooming-thicket-84174.herokuapp.com/api/shows/'
            + event.target.value)
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
                            <h4>{show.title}</h4>
                            <h5>Genre: {show.genre}</h5>
                            <h5>Year: {show.year}</h5>
                            <h5>Description: {show.description}</h5>
                            <h5>Cast: {show.cast}</h5>
                            <h5>Average Rating: {show.avg_rating}</h5>
                            <h5>Video:</h5>
                                <video width='320' height='240' controls>
                                    <source src={show.video} type='video/mp4' />
                                </video>
                            <h5>Added By: {show.added_by}</h5>
                            <h5>User Ratings: {show.user_ratings}</h5>
                            <h5>User Reviews: {show.user_reviews}</h5>
                            <button onClick={handleDelete} value={show.id}>Delete</button>
                            <br />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default App;
