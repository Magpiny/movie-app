import React from 'react'

const SearchBox = (props) => {
    return (
        <div className="col col-sm-4">
            <input type="text" 
            placeholder="search...." 
            value={ props.value }
            onChange={ (event)=>props.setSearch(event.target.value) }
            className="form-control-sm"
             />
            
        </div>
    )
}

export default SearchBox
