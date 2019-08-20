import React from 'react';

import NavBar from './NavBar.js';
import Productos from '../Components/Productos.js';
import ProductoPrecio from '../Components/ProductoPrecio.js';

import "../Styles/Home.css";

import bannerPrincipal from "../imagen/banner - principal.png";
import bannSec1 from "../imagen/1.png";
import bannSec2 from "../imagen/2.png";
import Mapa from "../imagen/soyElMapa.png";
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
							<div className="triangulo-verde"></div>
							<img src={bannSec1} alt="bannerSecundario"/>
						</div>
						<div className="part2">
							<h2>Nuestro alojamiento creo</h2>
							<div className="triangulo-azul"></div>
							<img src={bannSec2} alt="bannerSecundario"/>
						</div>
					</div>
				</div>

					<h2 className="productos-destacados">Productos Destacados</h2>
					<Productos/>
					<Productos/>
					<Productos/>
					<Productos/>
					<Productos/>

					<div className="informacion">
						<div className="info">
							<h2>¿Quienes somos?</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. D
							    uis at suscipit augue. Praesent rhoncus fermentum eros, et
							    gravida erat efficitur vel. Nulla interdum ex nec libero 
							    auctor lacinia. Donec quis metus erat. Praesent fringilla
							     aliquam cursus. Cras elementum aliquam massa, eu interdum
							 	 erat rutrum at. Ut pulvinar at est id commodo. Nunc sed 
							  	 sodales lacus. Duis consequat accumsan nibh, sed mattis
							    justo scelerisque quis. Nullam euismod ultricies magna ut pharetra.

								Pellentesque habitant morbi tristique senectus
								et netus et malesuada fames ac turpis egestas. 
								Nullam et auctor tortor. Quisque felis orci, sodales
								at libero eget, congue venenatis magna. Maecenas
								tincidunt tempor odio, at semper orci accumsan non.
								 Nam quis porttitor sem. Pellentesque eleifend et justo 
								quis ultricies. Morbi dapibus dolor non nunc efficitur, 
								id lobortis odio congue. Ut lacinia arcu eget lectus convallis congue.</p>
						</div>
						<div className="mapa">
							<h2>Visitenos</h2>
							<img src={Mapa} alt="MAPA"/>
						</div>
					</div>

					<h3 className="titulo">Herramientas Varias</h3>
					<div className="productos-varios">				
						<ProductoPrecio/>
						<ProductoPrecio/>
						<ProductoPrecio/>
					</div>

			</div>
		);
	}
}
