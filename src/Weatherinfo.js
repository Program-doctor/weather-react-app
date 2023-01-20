import React from "react";
import Date from "./Date";


export default function Weatherinfo(props){
    return(
    <div>
    <div className="weatherinfo">
    <h1>{props.data.city}</h1>
    <div><Date dateValue={props.data.date}/></div>
    <p className="text-capitalize">{props.data.desc}</p>
    </div>
    <div className="weatherdetails row">
    <div className="col-6">
      <div className="imgtemp">
    <img src={props.data.icon} alt={props.data.desc}/>
    <h2><span>{Math.round(props.data.temp)}</span><span className="unit">&deg;C<a href="/" className="link fahrenheit">|&deg;F</a></span></h2>
      </div>
    </div>
    <div className="col-6 info">
    <p>Humidity: {Math.round(props.data.humid)}%</p>
    <p>Wind: {Math.round(props.data.wind)}km/h</p>
    </div>
    </div>
    </div>);
}