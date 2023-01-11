import React from 'react';
import './App.css';


function App() {
  
  return (
    <div className="App">
      <header>
        <ul>
          <li><a href='/'>Lisbon</a></li>
          <li><a href='/'>Paris</a></li>
          <li><a href='/'>Sydney</a></li>
          <li><a href='/'>San Francisco</a></li>
        </ul>
      </header>
      <div className="searchbox">
        <form action="">
      <input type="search" placeholder='Enter a city' id="" />
      <input type="submit" value="Search" id='search'/>
      <input type="submit" value="Current" id="location" />
        </form>
      </div>
      <div className="weatherinfo">
      <h1>Lisbon</h1>
      <p>Tuesday 14:33</p>
      <p>Drizzle</p>
      </div>
      <div className="weatherdeatails">
      <img src="" alt="" />
      <p>Precipitations: 79%</p>
      <p>Wind:5km/h</p>
      </div>
      <div className="forecast">
        <ul>
          <li><p>Wed</p>
          <img src="" alt="" />
          <p>15&deg;</p>
          </li>
          <li><p>Thu</p>
          <img src="" alt="" />
          <p>16&deg;</p>
          <p></p></li>
          <li><p>Fri</p>
          <img src="" alt="" />
          <p>17&deg;</p></li>
          <li><p>
            Sat</p>
            <img src="" alt="" />
            <p>18&deg;</p></li>
          <li><p>
            Sun</p>
            <img src="" alt="" />
            <p>18&deg;</p></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
