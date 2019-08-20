import React from 'react';

import NavBar from './NavBar.js';
import Productos from '../Components/Productos.js';

import "../Styles/Home.css";

import bannerPrincipal from "../imagen/banner - principal.png";
import bannSec1 from "../imagen/1.png";
import bannSec2 from "../imagen/2.png";
export default class Home extends React.Component {

	render() {
		return (
			<div className="home">
				<NavBar/>

				<div className="banner-img">
					<div className="principal">
						<img src={bannerPrincipal} alt="bannerPrincipal"/>
					</div>
					<div className="secundario">
						<div className="part1">
							<h2>Nuestra gama de productos</h2>
							<img src={bannSec1} alt="bannerSecundario"/>
						</div>
						<div className="part2">
							<h2>Nuestro alojamiento creo</h2>
							<img src={bannSec2} alt="bannerSecundario"/>
						</div>
					</div>
				</div>

				<Productos/>
			</div>
		);
	}
}
