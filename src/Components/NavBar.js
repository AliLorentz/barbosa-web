import React from 'react';
import "../Styles/navBar.css";
import Logo from "../imagen/logo.png";

export default class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			nav:"nav"
		}
	}

	componentDidMount() {
		 window.onscroll = () => this.handleAnimation(); 
	}

	handleAnimation =()=>{	
		if (document.documentElement.scrollTop > 50){
			this.setState({
				nav:"nav-left"
			})
		}else if(document.documentElement.scrollTop<50){
			this.setState({
				nav:"nav"
			})
		}
	};
 
	render() {
		return (
			<div className="navBar">

				<div className="nav-contact">
					<div className="contact-left">
						<i className="fab fa-facebook-f"></i> &nbsp; <i className="fab fa-twitter"></i>
						&nbsp; <i className="fab fa-instagram"></i> &nbsp;
						| contact
					</div>
					<div className="contact-right">
						<i className="fa fa-heart"></i> &nbsp; Lista de deseso(0) | &nbsp;
						 <i className="fa fa-random"></i> &nbsp;Comparar(0)
					</div>
				</div>

				<div className={this.state.nav}>
					<div className="nav-medium">
						<div className="logo">
								<img src={Logo} alt="logo"/>
						</div>

						<div className="buscador">
							<input type="text" placeholder="Que estas buscando?"/>
						</div>
						<div className="registro">
							<div className="entrar">
								<i className="fa fa-user fa-fw icon"></i>
								<p>Entrar</p>
							</div>
							<div className="carrito">
								<i className="fa fa-shopping-bag fa-fw icon"></i>
								<p>Entrar</p>
							</div>
						</div>
					</div>


					<div className="nav-bottom">
						<a className="casa" href="/"><i className="icon fa fa-home cbp-mainlink-icon"></i></a>
						<a href="/">EQUIPAMIENTO</a>
						<a href="/">PESCA</a>
						<a href="/">HERRAMIENTAS</a>
						<a href="/">UN ECTERA XD</a>
					</div>
				</div>
			</div>
		);
	}
}


