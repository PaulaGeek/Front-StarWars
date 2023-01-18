import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div>
		<nav className="navbar navbar-light bg-light mb-3 ">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 mx-5"><img src="https://www.citypng.com/public/uploads/preview/-51608494060e1tvtjfsry.png"  width="55"
                                  height="45" alt="" /></span>
			</Link>


          {/* <!-- Dropdown --> */}
          <div className="dropdown">
            <a className="nav-link dropdown-toggle text-dark me-4" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">

              <h5> Favorites </h5>
             
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Profile</a>
              <a className="dropdown-item" href="#">Accesibility</a>
              <a className="dropdown-item" href="#">Privacy and Data</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item text-danger" href="#">Log out</a>
            </div>
          </div>



          {/* <!-- Modal --> */}
          <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Create a new post</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">

                  <div className="form-group">
                    <label className="font-weight-bold" htmlFor="exampleFormControlTextarea1">Caption: </label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                      placeholder="Add the caption of your post here"></textarea>
                  </div>

                  <button type="button" className="btn"> <i className="fa-solid fa-camera"></i> </button>
                  <button type="button" className="btn"> <i className="fa-sharp fa-solid fa-location-dot"></i> </button>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-success">Publish</button>
                </div>
              </div>
            </div>
          </div>
		</nav>
		</div>
	);
};
