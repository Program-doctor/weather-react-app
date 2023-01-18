import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Weather.css";
import axios from "axios";
import Forecast from './Forecast';
import { ThreeCircles } from  'react-loader-spinner';


export default function Weather(props){
  const [city,setCity]=useState(props.defualtCity);
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
    });
    console.log(response.data.condition.icon_url);
  }

  function handleSubmit(event){
      event.preventDefault();
      search();
  }

  function updateCity(event){
      setCity(event.target.value);
  }
  
  function search(){
    let apikey="3d44a4d43ebafcbeo52ab33b9ta05468";
    let apiurl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;
    axios.get(apiurl).then(handleResponse);
  } 
  if(weather.ready){
    return (<div className="Weather-app">
      <div className="searchbox">
      <form action="" onSubmit={handleSubmit}>
    <input type="search" placeholder='Enter a city' id="" autoFocus="on" onChange={updateCity}/>
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
        <div className="imgtemp">
      <img src={weather.icon} alt={weather.desc}/>
      <h2><span>{Math.round(weather.temp)}</span><span className="unit">&deg;C</span></h2>
        </div>
      </div>
      <div className="col-6 info">
      <p>Humidity:{Math.round(weather.humid)}%</p>
      <p>Wind:{Math.round(weather.wind)}km /h</p>
      </div>
      </div>
      <Forecast/>
    </div>);
  }
  else{
    search();
    return (
      <ThreeCircles
  height="100"
  width="60"
  color="#4fa94d"
  wrapperStyle={{justifyContent:'center', alignContent:'center',marginBottom:10}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor="#16a085"
  innerCircleColor="#e74c3c"
  middleCircleColor="#f9c922"
/>
    );
  }
}