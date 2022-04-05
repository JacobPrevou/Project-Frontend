import React from "react";
import "./Search.css";



function Search({ onChange, value }) {
   
  return (
    <div className="search">
        <div className="searchWrapper">
            <label className="searchLabel" htmlFor="searchbar"> Search Roster: </label>
            <input type="text" id="searchInput" placeholder= "Start typing a fighter name..." value={value} onChange={onChange}/>
        </div>
    </div>
  );
}

export default Search;