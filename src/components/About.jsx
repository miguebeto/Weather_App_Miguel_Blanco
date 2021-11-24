import React from "react";
import Logo from "../img/Miguel_Angel.jpg";
import "./About.css";
import { Link } from "react-router-dom";
//creo el componente funcional About que se mostrará en la ruta /about
export default function About() {
  return (
    <div className="about">
      <img className="img" src={Logo} alt="img no found" />
      <br/>
      <br/>
      <h6>
        <b>Miguel Angel Blanco Castilla</b>
      </h6>
      <span>Full Stack developer</span>
      <br />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum debitis
        aut eius dicta explicabo iusto deserunt adipisci illo sunt laudantium.
      </p>
      <span> Edad: 26 años</span>
      <br />
      <Link to="/">
      <button className="btn btn-danger">Regresar</button>
      </Link>
    </div>
  );
}
