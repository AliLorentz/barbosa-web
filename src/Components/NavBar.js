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
						facebook | contact
					</div>
					<div className="contact-right">
						lista de deseso(0) | comparar(0)
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
							<p>ENTRAR</p>
							<p>REGISTRO</p>
						</div>
					</div>


					<div className="nav-bottom">
						<a href="">CASA</a>
						<a href="">EQUIPAMIENTO</a>
						<a href="">PESCA</a>
						<a href="">HERRAMIENTAS</a>
						<a href="">UN ECTERA XD</a>
					</div>
				</div>
			</div>
		);
	}
}


