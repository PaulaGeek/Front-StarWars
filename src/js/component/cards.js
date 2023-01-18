import React from "react";
import {
    Link
} from "react-router-dom";

export const Cards = (props) => {
    return (
<div className="card d-flex justify-content-center mx-5" style={{width: "540px;"}}>
  <div className="row g-0 ">
    <div className="col-md-4">
      <img src="https://www.bakiautomobile.com/wp-content/uploads/2020/06/800x600.png" className="img-fluid rounded-start " alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h1 className="card-title d-flex justify-content-center"> {props.nombre} </h1>
        <p className="card-text text-center"> Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora inci dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?
</p>
      </div>
    </div>
  </div>

  {/* <hr className="text-danger mt-5"/>

  <div className="d-flex container text-danger mx-2">
        <h6 className="col-3">Name</h6>
        <h6 className="col-3">Birth Year</h6>
        <h6 className="col-3">Gender</h6>
        <h6 className="col-3">Height</h6>
        <h6 className="col-3">Skin Color</h6>
        <h6 className="col-3">Eye color</h6>
      </div>

      <div className="d-flex container text-dark mx-2 my-1">
        <span className="col-3"> {detallePersonaje.name} </span>
        <span className="col-3">Birth Year</span>
        <span className="col-3">  </span>
        <h6 className="col-3">Height</h6>
        <h6 className="col-3">Skin Color</h6>
        <h6 className="col-3">Eye color</h6>
      </div> */}

</div>

    );
};