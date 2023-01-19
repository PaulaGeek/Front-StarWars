import React from "react";
import { Link } from "react-router-dom";

 export const Planets = (props) => {
	return (

<div className="card-group row">

<div className="card" style={{width: "18rem"}}>
  <img src={"https://starwars-visualguide.com/assets/img/planets/"+props.id+".jpg" }className="card-img-top " alt="..."/>
  <div className="pt-2">
    <h5 className="mt-2 ms-2"> {props.nombrep} </h5>
    <p className="card-text ms-2"> Population: {props.population}</p>
    <p className="card-text ms-2"> Terrain: {props.terrain}</p>

    <div className="mx-3 pb-2">
          <Link to={"/viewplanets/"+ props.id} className="btn btn-primary btn-sm ms-2" type="button" > Learn more! </Link>
          <button type="button" className="btn btn-outline-warning ms-5 my-3" style={{ height: 40, width: 40 }}> 
          <i className="fa fa-heart"></i>
          </button>
          </div>
        </div>
</div>
</div>

	);
};
