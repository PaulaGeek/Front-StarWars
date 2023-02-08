import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom"; // importamos el hook useNavigate para redireccionar desde una funcion

export const Navbar = () => {

	const{store, actions}=useContext(Context)
	const navigate = useNavigate() //activamos useNavigate

	function handleLogout() {
		actions.logout()//cerrar la sesiono
		navigate("/")//usamos navigate para redireccionar

	}
	

	return (
		<div>
		<nav className="navbar navbar-dark bg-dark mb-3 ">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 mx-5"><img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Star_Wars_Logo..png"  width="55"
                            height="45" alt="" /></span>
			</Link>


        <div className="container">
		<div className="">
        <Link to="/login">
            <button className="btn btn-secondary mx-1">Iniciar Sesión</button>
        </Link>
        <Link to="/signup">
            <button className="btn btn-secondary mx-1">Registrarse</button>
        </Link>
        </div>
        <div className="">
				{store.auth === true? <button className="btn btn-secondary" onClick={handleLogout}>Logout</button> : null}
			</div>

            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
            aria-expanded="false">
                <i className="fa-solid fa-gear"></i>
            </button>
            <ul className="dropdown-menu" style={{right: "0",
            left: "auto"}}>
            <li><a className="dropdown-item" href="#">aaa </a></li>
            <hr style={{color: "gray"}}/>
            </ul>

			</div>
		</nav>
		</div>
	);
};
