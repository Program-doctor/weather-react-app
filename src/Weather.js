import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Weather.css";
import axios from "axios";
import Forecast from './Forecast';

export default function Weather(props){
  const [weather,setWeather]=useState({ready:false});
  function handleResponse(response){
    setWeather({ready:true,
      city: response.data.city,
      date: response.data.time,
      desc: response.data.condition.description,
      icon: response.data.condition.icon_url,
      humid: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      temp: response.data.temperature.current
    })
  }

  function search(){
    let apikey="3d44a4d43ebafcbeo52ab33b9ta05468";
    let apiurl=`https://api.shecodes.io/weather/v1/current?query=${props.defualtCity}&key=${apikey}&units=metric`;
    axios.get(apiurl).then(handleResponse);
  } 
  if(weather.ready){
    return (<div className="Weather-app">
        <div className="searchbox">
        <form action="">
      <input type="search" placeholder='Enter a city' id="" autoFocus="on"/>
      <input type="submit" value="Search" id='search'/>
      <input type="submit" value="Current" id="location" />
        </form>
      </div>
      <div className="weatherinfo">
      <h1>{weather.city}</h1>
      <p>Tuesday 14:33</p>
      <p className="text-capitalize">{weather.desc}</p>
      </div>
      <div className="weatherdetails row">
      <div className="col-6">
        <div className="row">
          <div className="col-6">
      <img src={weather.icon} alt=""/>
          </div>
      <h2><span className="temp col-6">{Math.round(weather.temp)}</span><span className="unit">&deg;C</span></h2>
        </div>
      </div>
      <div className="col-6 info">
      <p>Humidity:{Math.round(weather.humid)}%</p>
      <p>Wind:{Math.round(weather.wind)}/h</p>
      </div>
      </div>
      <Forecast/>
    </div>);
  }
  else{
    search();
    return "loading....";
  }
}