import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.css";
import { Personajes } from "../component/personajes";
import { Planets } from "../component/planets";
import { Vehiculos } from "../component/vehiculos";
// import { Vehiculos } from "../component/vehiculos";
import { Context } from "../store/appContext";
import Form from "../component/form.jsx";


export const Home = () => {
  // const [personajes, setPersonajes] = useState([]);
  const [Cards, setCards] = useState([]);
  const {store}=useContext(Context)
  // const [planets, setPlanets] = useState([]);




  function obtenerInfoCards() {
    fetch("https://swapi.dev/api/people/")
      .then((res) => res.json())
      .then((data) => setCards(data.results))
      .catch((err) => console.error(err));
  }
  // function obtenerInfoPlanets() {
  //   fetch("https://swapi.dev/api/planets/")
  //     .then((res) => res.json())
  //     .then((data) => setPlanets(data.results))
  //     .catch((err) => console.error(err));
  // }

  // function obtenerInfoVehiculos() {
  //   fetch("https://swapi.dev/api/vehicles/")
  //     .then((res) => res.json())
  //     .then((data) => setVehiculos(data.results))
  //     .catch((err) => console.error(err));
  // }

  useEffect(() => {
    // obtenerInfoPersonajes();
	obtenerInfoCards();
    // obtenerInfoPlanets();
    // obtenerInfoVehiculos();
  }, []);

  return (
    <div >
      	<div className="text-center mt-5">
		<Form/>
	      </div>
      <div className="d-flex justify content center mx-5">
        <h1 className="text-dark"> Characters </h1>
      </div>
      <div className="d-flex justify content center mx-5 my-2 overflow-auto">
        
        {store.personajes.map((item, index) => (
          <Personajes nombre={item.name} id={index+1} genero={item.gender} hair={item.hair_color} ojos={item.eye_color} key={index}/>
        ))}
      </div>
      <div className="d-flex justify content center mx-5 my-3">
        <h1 className="text-dark"> Planetas </h1>
      </div>
      <div className="d-flex justify content center mx-5 my-2 overflow-auto">
        
        {store.planets.map((item, index) => (
          <Planets nombrep={item.name} population={item.population} terrain={item.terrain} id={index+1} key={index}/>
        ))}
      </div>
      <div className="d-flex justify content center mx-5 my-3">
        <h1 className="text-dark"> Vehiculos </h1>
      </div>
      <div className="d-flex justify content center mx-5 my-2 overflow-auto">
        
        {store.vehiculos.map((item, index) => (
          <Vehiculos nombre={item.name} id={index+23} key={index} />
        ))}
      </div>
    </div>
  );
};
