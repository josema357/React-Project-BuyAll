import React from 'react';
import '../styles/OrderItem.scss';
import close from '../assets/icons/close.svg'

const OrderItem = () => {

	return (
		<div className="OrderItem">
			<figure>
				<img src="https://img.remediosdigitales.com/a49704/red-bull-y-bmc-crean-la-bicicleta-de-carretera-mas-rapida-del-mundo004/1366_2000.jpeg" alt="bici" />
			</figure>
			<p>Bicicleta</p>
			<p>$ 200.00</p>
			<img src={close} alt="close"/>
		</div>
	);
}

export default OrderItem;