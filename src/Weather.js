import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Weather.css";
import axios from "axios";
import Forecast from './Forecast';
import { ThreeCircles } from  'react-loader-spinner';
import Weatherinfo from "./Weatherinfo";



export default function Weather(props){
  const [name, setName]=useState();
  const [city,setCity]=useState(props.defualtCity);
  const [weather,setWeather]=useState({ready:false});

  useEffect(()=>{
    setWeather({ready:false})
  },[name])

  function handleResponse(response){
    setWeather({ready:true,
      city: response.data.city,
      date: new Date(response.data.time*1000),
      desc: response.data.condition.description,
      icon: response.data.condition.icon,
      humid: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      temp: response.data.temperature.current,
      coord: response.data.coordinates
    });
  }

  function handleSubmit(event){
      event.preventDefault();
      search();
  }

  function handleClick(event){
     event.preventDefault();
    setCity(event.target.name);
    setName(event.target.name);
    search();
  }

  function updateCity(event){
    setCity(event.target.value);
  }
  

  function showPosition(position){
    let lat=position.coords.latitude;
    let lon=position.coords.longitude;
    let apikey="3d44a4d43ebafcbeo52ab33b9ta05468";
    let apiurl=`https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${apikey}&units=metric`;
    axios.get(apiurl).then(handleResponse);
  }

  function getCurrentPosition(){
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  
  
  function search(){
    let apikey="3d44a4d43ebafcbeo52ab33b9ta05468";
    let apiurl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;
    axios.get(apiurl).then(handleResponse);
  } 
  if(weather.ready){
    return (<div className="Weather-app">
          <header>
        <ul>
          <li><a href='/' className='link' onClick={handleClick} name="Lisbon">Lisbon</a></li>
          <li><a href='/' className='link' onClick={handleClick} name="Paris">Paris</a></li>
          <li><a href='/' className='link' onClick={handleClick} name="Sydney">Sydney</a></li>
          <li><a href='/' className='link' onClick={handleClick} name="San Francisco">San Francisco</a></li>
        </ul>
      </header>
      <div className="searchbox">
      <form action="" onSubmit={handleSubmit}>
    <input type="search" placeholder='Enter a city' id="" autoFocus="on" onChange={updateCity}/>
    <input type="submit" value="Search" id='search'/>
    <input type="submit" value="Current" id="location" onClick={getCurrentPosition} />
      </form>
    </div>
    <Weatherinfo data={weather}/>
    <Forecast coords={weather.coord}/>
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