import React from 'react';
import "../Styles/Footer.css";
export default class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
				<div className="servicios-foot">
					<p>Otros servicios</p>
					<p>>Servicio de entrega</p>
					<p>>Servicio de entrega</p>
				</div>

				<div className="contacts-foot">
					<p>Contactenos</p>
					<p>San Cristobal,Lda</p>
					<p>entrada de la luz 136A,1600-162 S/C</p>
					<p>+58 4247178713</p>
					<p>ajosue998@gmail.com</p>
				</div>

				<div className="siganos-foot">
					<p>Siganos</p>
					<p>F</p>
					<p>Novedades</p>
				</div>

				<div className="ultimo">
					<p>Copyright</p>
					<p>soy LOGO XD</p>
				</div>
			</div>
		);
	}
}
