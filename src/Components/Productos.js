import React from 'react';
import imgProducto from '../imagen/5.png';

import "../Styles/productos.css";

export default class Productos extends React.Component {
	render() {
		return (
			<div className="productos">
				<img src={imgProducto} alt="imagen producto"/>

				<div className="descripcion">
					<h3 className="nombre-producto">MANOMETRO ANALOGICO Y YO QUE SE MAS</h3>
					<p className="id-producto">105402341054</p>
					<p className="descripcion-producto">desctipcion 46-4</p>
					<p className="disponibilidad">Disponible</p>
				</div>

				<div className="precio">
					<h3 className="precio-producto">87,26$</h3>
					<input type="number" placeholder="1" className="cantidad-productos"/>
					<button className="comprar">Adicionar al carrito</button>

				</div>
			</div>
		);
	}
}
