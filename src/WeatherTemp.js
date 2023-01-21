import React, {useState} from "react";


export default function WeatherTemp(props){
    const [unit, setUnit]=useState("celcius");
   
    function showCelcius(event){
        event.preventDefault();
        setUnit("celcius")
    }

    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit")  
      }

    if(unit==="celcius"){
    return (<div><h2><span>{Math.round(props.temp)}</span><span className="unit">&deg;C<a href="/" className="link fahrenheit" onClick={showFahrenheit}>|&deg;F</a></span></h2></div>);
}else{
    let fahrenheit=Math.round(props.temp*9/5+32)
    return(<div><h2><span>{fahrenheit}</span><span className="unit"><a className="link" href="/" onClick={showCelcius}>&deg;C</a>|&deg;F</span></h2></div>);
}
}