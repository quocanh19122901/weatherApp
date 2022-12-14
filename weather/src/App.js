import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data,setData] = useState({});
  const [location, setLocation] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=fa9eb022caa54bdab028b1b67f532d3b`
  const searchLocation = (event) =>  {
    if(event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log (response.data)
      })
    }
  }
  return (
    <div className="App">
      <div className="container">
        <div>
        <input value={location} onChange={event => setLocation(event.target.value)}
        onKeyDown ={searchLocation}
         className="search" placeholder="Enter city">
        </input>
        </div>
        <div className="main">
          <p>{data.name}</p>

        {data.main  ?  <h1>{(data.main.temp -273.15) .toFixed()}  &deg; C </h1> : null }
          <p>Clouds</p>
        </div>
        <div className="bottom">
          <div className="wrap">
            <div className="Temp">
              <p>Temp</p>
              {data.main ? <p>{(data.main.temp_min -273).toFixed()}&deg;C - {(data.main.temp_max -273).toFixed()} &deg; C</p>:null }
              
            </div>
            <div className="Humidity">
              <p>Humidity</p>
              {data.main ? <p>{data.main.humidity}</p> :null }
            </div>
            <div className="Pressure">
              <p>Pressure</p>
              {data.main ? <p>{data.main.pressure}</p> :null }
            </div>
            <div className="WindSpeed">
              <p>Wind speed</p>
              {data.wind ? <p>{data.wind.speed} m/s</p> :null }

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
