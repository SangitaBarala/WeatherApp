import React, {useEffect, useState} from "react";
import '../Components/temp.css'
import rainbow from '../Media/rainbow2.png'

const Temp = () => {
    const [city, setCity] = useState(null)
    const [search, setSearch] = useState('Mumbai')

    useEffect(()=>{
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7fba1b4a3c1ac03ba2bcf0719f591851`
            const response =  await fetch(url)
            const responseInJson = await response.json()
            setCity(responseInJson.main)
        };
        fetchApi();
    },[search])

    return(
        <>
            <div>
               <input className="search" type="search" placeholder="City" value={search} onChange={(e)=> {
                  // e.preventDefault()
                   setSearch(e.target.value)
               }}/>

            {!city ? (<p>NO DATA FOUND</p> ) : (<div>
                <div className="align">
                    <img className="rainbow" src={rainbow} alt=""/>
                    <h3>{search}</h3>
                </div>
                <h3>{city.temp}°C</h3>
                <p>Feels like: {city.feels_like}</p>
                <p>Humidity: {city.humidity}</p>
                <p>Min temp: {city.temp_min} | Max temp: {city.temp_max}</p>
              </div> )}
            </div>
        </>
    )
}
export default Temp