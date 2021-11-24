import React from "react";
import './City.css';
import { Link } from "react-router-dom";
//creo el componente funcional City que mostrará los detalles de una ciudad
//recibida por props en la ruta /ciudad/{ciudadId}
export default function City({ city }){
 
    return(
        <div className="city">
            <h1>{city.name}</h1>
            <br/>
            <div>
                <div>Temperatura: {city.temp}°</div>
                <div>Clima: {city.weather}</div>
                <div>Viento: {city.wind}</div>
                <div>Nubosidad: {city.clouds}%</div>
            </div>
            <Link to="/">
            <button className="btn btn-danger c-black">Regresar</button>
            </Link>
        </div>
    )
}   