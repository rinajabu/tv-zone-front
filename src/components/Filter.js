import React, { useState } from 'react'

const Filter = (props) => {

    return (
        <label className='filter-dropdown'>
            <strong>Filter By Genre</strong>
            <select defaultValue={props.filterBy} onChange={props.updateFilter}>
                <option value='All'>All</option>
                <option value='Horror'>Horror</option>
                <option value='Comedy'>Comedy</option>
                <option value='Action'>Action</option>
                <option value='Drama'>Drama</option>
                <option value='Sci-fi'>Sci-fi</option>
                <option value='Feel-Good'>Feel-Good</option>
            </select>
        </label>
    )
}

export default Filter
