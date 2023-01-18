import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { Personajes } from "../component/personajes";
import { Planets } from "../component/planets";
import { Vehiculos } from "../component/vehiculos";


export const Home = () => {
  const [personajes, setPersonajes] = useState([]);
  const [Cards, setCards] = useState([]);
//   const [planets, setPlanets] = useState([]);
//   const [vehiculos, setVehiculos] = useState([]);

  function obtenerInfoPersonajes() {
    fetch("https://swapi.dev/api/people/")
      .then((res) => res.json())
      .then((data) => setPersonajes(data.results))
      .catch((err) => console.error(err));
  }

  function obtenerInfoCards() {
    fetch("https://swapi.dev/api/people/")
      .then((res) => res.json())
      .then((data) => setCards(data.results))
      .catch((err) => console.error(err));
  }
//   function obtenerInfoPlanets() {
//     fetch("https://swapi.dev/api/planets/")
//       .then((res) => res.json())
//       .then((data) => setPlanets(data.results))
//       .catch((err) => console.error(err));
//   }

//   function obtenerInfoVehiculos() {
//     fetch("https://swapi.dev/api/vehicles/")
//       .then((res) => res.json())
//       .then((data) => setVehiculos(data.results))
//       .catch((err) => console.error(err));
//   }

  useEffect(() => {
    obtenerInfoPersonajes();
	obtenerInfoCards();
    // obtenerInfoPlanets();
    // obtenerInfoVehiculos();
  }, []);

  console.log(personajes);

  return (
    <div>
      <div className="d-flex justify content center mx-5">
        <h1 className="text-danger"> Characters </h1>
      </div>
      <div className="d-flex justify content center mx-5 my-2 overflow-auto">
        
        {personajes.map((item, index) => (
          <Personajes nombre={item.name} id={index+1} genero={item.gender} hair={item.hair_color} ojos={item.eye_color} key={index}/>
        ))}
      </div>
      {/* <div className="d-flex justify content center mx-5 my-3">
        <h1 className="text-danger"> Planetas </h1>
      </div>
      <div className="d-flex justify content center mx-5 my-2 overflow-auto">
        
        {planets.map((item, index) => (
          <Planets nombreplanet={item.name} id={index+1}/>
        ))}
      </div>
      <div className="d-flex justify content center mx-5 my-3">
        <h1 className="text-danger"> Vehiculos </h1>
      </div>
      <div className="d-flex justify content center mx-5 my-2 overflow-auto">
        
        {vehiculos.map((item, index) => (
          <Vehiculos nombrevehiculo={item.name} id={index+1} />
        ))}
      </div> */}
    </div>
  );
};
