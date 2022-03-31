import React from "react";



function Search({ onChange, value }) {
   
  return (
    <div className="search">
        <div className="searchInput">
            <label htmlFor="searchbar">Search Roster:</label>
            <input type="text" id="search" placeholder="search..." value={value} onChange={onChange}/>
        </div>
    </div>
  );
}

export default Search;