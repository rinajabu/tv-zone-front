import React, { useState } from 'react'

const Filter = (props) => {

    const [filterBy, setFilterBy] = useState('All')

    const updateFilter = (event) => {
        setFilterBy(event.target.value)
    }
    
    return (
        <label className='filter-dropdown'>
            <strong>Filter By Genre: </strong>
            <select value={filterBy} onChange={updateFilter}>
                <option value='All'>All</option>
                <option value='Horror'>Horror</option>
                <option value='Comedy'>Comedy</option>
                <option value='Action'>Action</option>
                <option value='Drama'>Drama</option>
                <option value='Sci-Fi'>Sci-Fi</option>
            </select>
        </label>
    )
}

export default Filter