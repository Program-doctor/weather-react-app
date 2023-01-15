import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Weather.css";
// import axios from "axios";

export default function Weather(){
    // const [city,setCity]=useState("");
    // const [loaded,setLoaded]=useState(false);

    // function handleSubmit(event){
    //     event.preventDefault();
    //     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f5984f7bc966396e1be817c3ac20863d&units=metric`;axios.get(url).then(displayWeather);
    // }
    // function updateCity(event){
    //     setCity(event.target.value);
    // }
    
    // function displayWeather(response){
    //     setLoaded(true);
    // }

    return (<div className="Weather-app">
        <div className="searchbox">
        <form action="">
      <input type="search" placeholder='Enter a city' id=""/>
      <input type="submit" value="Search" id='search'/>
      <input type="submit" value="Current" id="location" />
        </form>
      </div>
      <div className="weatherinfo">
      <h1>Lisbon</h1>
      <p>Tuesday 14:33</p>
      <p>Drizzle</p>
      </div>
      <div className="weatherdetails row">
      <div className="col-6">
      <img src="" alt=""/>
      <h2 className="temp">12&deg;C</h2>
      </div>
      <div className="col-6">
      <p>Precipitation:95%</p>
      <p>Wind:5km/h</p>
      </div>
      </div>
    </div>);
}