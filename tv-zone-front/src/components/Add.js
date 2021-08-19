import React, { useState } from 'react'

// CREATE component
const Add = (props) => {

    let emptyShow = { title: '', genre: '', year: '', description: '', cast: '', avg_rating: '', video: '', added_by: '', user_ratings: '', user_reviews: ''}

    const [show, setShow] = useState(emptyShow)

    return (
        <>

            <br />
            <br />

            <form>
                <label htmlFor='title'>Title: </label>
                <input type='text' name='title' />

                <br />

                <label htmlFor='genre'>Genre: </label>
                <input type='text' name='genre' />

                <br />

                <label htmlFor=''></label>
                <label></label>
                <label></label>
                <label></label>
                <label></label>
                <label></label>
                <label></label>
                <label></label>

            </form>
        </>
    )
}
