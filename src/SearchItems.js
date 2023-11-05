import React from "react";
const SearchItems = ({search,setSearch}) => {

    return (
        <>
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search">Search:</label>
            <input id="search"
            placeholder="Search here"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}

            
            />
        </form>
        </>
    );
}
export default SearchItems;