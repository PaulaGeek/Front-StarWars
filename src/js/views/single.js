import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Cards } from "../component/cards";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();


useEffect(() => {
	actions.obtenerInfoUnPersonaje(params.theid)
	}, [])

	return (
<div>
		<div >
		<div className="jumbotron">
			 <hr className="my-4" />
			 <Cards nombre={store.unpersonaje.name} />
		 </div>
		</div> 

<div className="card d-flex justify-content-center mx-5" > 
		<hr className="text-danger mt-5"/>

     <div className="d-flex container text-dark mx-2 my-1 ">
	  <h6 className="col-3">Name</h6>
	  <h6 className="col-3">Birth Year</h6>
	  <h6 className="col-3">Gender</h6>
	  <h6 className="col-3">Height</h6>
	  <h6 className="col-3">Skin Color</h6>
	  <h6 className="col-3">Eye color</h6>
	 </div>

	  <div className="d-flex container text-dark mx-2 my-1 ">
	  <span className="col-3"> {store.unpersonaje.name} </span>
	  <span className="col-3"> {store.unpersonaje.birth_year} </span>
	  <span className="col-3"> {store.unpersonaje.gender} </span>
	  <span className="col-3"> {store.unpersonaje.height} </span>
	  <span className="col-3"> {store.unpersonaje.skin_color} </span>
	  <span className="col-3"> {store.unpersonaje.eye_color} </span>
	  </div> 
	</div>

        </div>

	);
};

Single.propTypes = {
	match: PropTypes.object
};
