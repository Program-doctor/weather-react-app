import React,{useState, useEffect} from "react";
import "./Forecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import { ThreeDots } from  'react-loader-spinner';

export default function Forecast(props){
  let [loaded,setLoaded]=useState(false);
  let [forecast,setForecast]=useState();

  useEffect(()=>{
    setLoaded(false)
  },[props.coords])

  function handleResponse(response){
    setLoaded(true);
    setForecast(response.data.daily)

  }
    if (loaded){return(
      <div className="forecast row">
         <ul className="row">
           {forecast.map(function(dailyForecast,index){
             if(index<5){
         return (<div className="col-sm-2" key={index}>
           <li><WeatherForecastDay data={dailyForecast}/></li>
           </div>);}else{return null}
           })}
         </ul>
      </div>
           );
  }
  else{
    let apikey="eac360db5fc86ft86450f3693e73o43f";
    let lon=props.coords.longitude;
    let lat=props.coords.latitude;
    let apiUrl=`https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apikey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <div>
        <ThreeDots 
height="80" 
width="80" 
radius="9"
color="#4fa94d" 
ariaLabel="three-dots-loading"
wrapperStyle={{justifyContent:'center', alignContent:'center',marginBottom:5}}
wrapperClassName=""
visible={true}
 />
        <p className="text-center">Loading Forecast....</p>
      </div>
    )

  }
}