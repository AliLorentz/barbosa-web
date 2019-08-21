import React from 'react';
import imgProducto from '../imagen/5.png';

import "../Styles/productos.css";

export default class Productos extends React.Component {
		constructor(props) {
		super(props);
		this.state={
			nav:"modal"
		}
	}

	agregarModal =()=>{
		this.setState({
			nav:"modal-active"
		})
	};

	quitarModal = () =>{
		this.setState({
			nav:"modal"
		})
	}

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
					<div className="guia-producto">
							<i className="fa fa-heart"></i>
							<i className="fa fa-random"></i>
							<i  onClick={this.agregarModal} className="fa fa-eye"></i>
					</div>
				</div>



				<div className={this.state.nav}>
					<div className="img-modal">
						<img src={imgProducto} alt="imagen producto"/>
					</div>
					<div className="info-modal">
						<h2>MANOMETRO ANALOGICO ANALISADOR 2 VIAS R410A VMG-2-R410A-02
						 DIAMETRO 80mm, PRESSÃO 0psi~800psi -30psi~500psi, CONEXÃO 1/4", MANG</h2>
						 <p>Referência  0043.05.0001</p>
						 <p className="precio-modal">87,26 €</p>
					</div>
					<div className="quitarModal" onClick={this.quitarModal}>X</div>
				</div>

			</div>
		);
	}
}
