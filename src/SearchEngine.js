import React, {useState} from "react";


export default function SearchEngine(){
    const [city,setCity]=useState();
    function handleSubmit(event){
        event.preventDefault();
    }

    function updateCity(event){
        setCity(event.target.value);
    }
    return (
        <div className="searchbox">
        <form action="" onSubmit={handleSubmit}>
      <input type="search" placeholder='Enter a city' id="" autoFocus="on" onChange={updateCity}/>
      <input type="submit" value="Search" id='search'/>
      <input type="submit" value="Current" id="location" />
        </form>
      </div>
    );
}