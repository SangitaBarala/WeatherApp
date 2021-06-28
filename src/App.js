import React from "react";
import './App.css';
import logo from '../src/Media/cloudy.png'
import Temp from "./Components/temp";

function App() {
  return (
    <div className="App">
        <div className="container">
            <h1 className="title">Weather App</h1>
            <img className='logo' src={logo} alt=""/>
            <Temp/>
        </div>
    </div>
  );
}
export default App;

