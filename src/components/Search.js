import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({setSearchText}) => {
    return (
        <div className="search">
            <MdSearch className="search-icons" size="1.3rem" />
            <input type="text"
                placeholder=" Type to search..."
                onClick={(e)=>(setSearchText(e.target.value)) }/>
        </div>
    )
}

export default Search
