import React from "react";

function Search(props) {
    let {setSearch}=props;
    return(
        <>
            <input id="search" type="text" placeholder="Type here" onChange={(e)=>{setSearch(e.target.value)}} />
        </>
    )
}

export default Search