import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Cards } from "../component/cards";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const [detallePersonaje, setDetallePersonaje]=useState({})
	const params = useParams();
	// const [generoPersonaje, setGeneroPersonaje]=useState({})


    function obtenerInfoDeCadaPersonajes(){  
		fetch("https://swapi.dev/api/people/"+params.theid) 
	   .then(res => res.json())
	   .then(data => setDetallePersonaje(data))
	   .catch(err => console.error(err))
	} 
	

useEffect(() => {

obtenerInfoDeCadaPersonajes();
}, [])

	return (
<div>
		<div>
		<div className="jumbotron">
			 <hr className="my-4" />
			 <Cards nombre={detallePersonaje.name} />
		 </div>
		</div> 

<div className="card d-flex justify-content-center mx-5"> 
		<hr className="text-danger mt-5"/>

<div className="d-flex container text-danger mx-2 ">
	  <h6 className="col-3">Name</h6>
	  <h6 className="col-3">Birth Year</h6>
	  <h6 className="col-3">Gender</h6>
	  <h6 className="col-3">Height</h6>
	  <h6 className="col-3">Skin Color</h6>
	  <h6 className="col-3">Eye color</h6>
	</div>

	<div className="d-flex container text-dark mx-2 my-1">
	  <span className="col-3"> {detallePersonaje.name} </span>
	  <span className="col-3">{detallePersonaje.birth_year}</span>
	  <span className="col-3"> {detallePersonaje.gender} </span>
	  <span className="col-3"> {detallePersonaje.height} </span>
	  <span className="col-3">{detallePersonaje.skin_color}</span>
	  <span className="col-3"> {detallePersonaje.eye_color} </span>
	</div>
	</div>

        </div>

	);
};

Single.propTypes = {
	match: PropTypes.object
};
