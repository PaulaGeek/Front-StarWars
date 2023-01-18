import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Cards } from "../component/cards";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const [detallePersonaje, setDetallePersonaje]=useState({})
	const params = useParams();


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
			 <Cards nombre={detallePersonaje.name}  />
		 </div>
		</div> 
<hr className="border border-danger"/>
        </div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
