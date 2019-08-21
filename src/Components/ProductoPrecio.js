import React from 'react';
import Producto from "../imagen/producto.png";
import "../Styles/productoPrecio.css";
export default class ProductoPrecio extends React.Component {
	render() {
		return (
			<div className="producto">
				
			<img src={Producto} alt="presentacionProducto"/>
			<div className="guia-producto-presentacion">
				<i className="fa fa-heart"></i>
				<i className="fa fa-random"></i>
				<i  onClick={this.click}className="fa fa-eye"></i>
			</div>
			<h3>Kit de 7 llaves de fendas isoladas 1000V VDE Mercatools MT-309555 en 60900 2004</h3>
			<p>36,16$</p>
			</div>
		);
	}
}
