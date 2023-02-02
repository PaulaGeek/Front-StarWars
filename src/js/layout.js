import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";


// import { Vehiculos } from "./views/viewvehiculos";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { ViewPlanets } from "./views/viewplanets";
import { ViewVehiculos } from "./views/viewvehiculos";
import { ViewRegistro } from "./views/viewregistro.jsx";
import { ViewForm } from "./views/viewlogin.jsx";
// import { Cards } from "./component/cards";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					{/* <Cards/> */}
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="/viewplanets/:theid" element={<ViewPlanets />} />
						<Route path="/viewvehiculos/:theid" element={<ViewVehiculos />} />
						<Route path="/signup" element={<ViewRegistro />} />
						<Route path="/login" element={<ViewForm />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
