import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Cards } from "../component/cards";

export const ViewVehiculos = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();


useEffect(() => {
actions.obtenerInfoUnVehiculo(params.theid)
}, [])

	return (
<div>
		<div>
		<div className="jumbotron">
			 <hr className="my-4" />
			 <Cards nombre={store.unvehiculo.name} />
		 </div>
		</div> 

<div className="card d-flex justify-content-center mx-5"> 
		<hr className="text-danger mt-5"/>

<div className="d-flex container text-danger mx-2 ">
	  <h6 className="col-3">Name</h6>
	  <h6 className="col-3">Climate</h6>
	  <h6 className="col-3">Population</h6>
	  <h6 className="col-3">Orbital Period</h6>
	  <h6 className="col-3">Rotation Period</h6>
	  <h6 className="col-3">Diameter</h6>
	</div>

	<div className="d-flex container text-dark mx-2 my-1 ">
	  <span className="col-3"> {store.unvehiculo.name} </span>
	  {/* <span className="col-3"> {store.unvehiculo.climate} </span> */}
	  {/* <span className="col-3"> {store.unvehiculo.population} </span>
	  <span className="col-3"> {store.unvehiculo.orbital_period} </span>
	  <span className="col-3"> {store.unvehiculo.rotation_period} </span>
	  <span className="col-3"> {store.unvehiculo.diameter} </span> */}
	</div> 
	</div>

        </div>

	);
};

ViewVehiculos.propTypes = {
	match: PropTypes.object
};
