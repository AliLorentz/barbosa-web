import React from 'react';

import imgProducto from "../imagen/producto.png";
import "../Styles/ProductoPeq.css";

export default class ProductoPeq extends React.Component {
	render() {
		return (
			<div className="producto-pequeno">
				<img src={imgProducto} alt="producto-pequeno"/>	
				<div className="Descripcion">
					<h4>ARMA DE CALIBRE PESADO SG42 9MM	</h4>
					<p>7,08$</p>
				</div>

			</div>
		);
	}
}
