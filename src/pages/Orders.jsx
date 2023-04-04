import React from 'react';
import '../styles/Orders.scss';
import Order from '../components/Order';

const Orders = () => {
	return (
		<div className="Orders">
			<div className="Orders-container">
				<h1 className="title-orders">My orders</h1>
				<div className="Orders-content">
					<Order/>
					<Order/>
					<Order/>
					<Order/>
				</div>
			</div>
		</div>
	);
}

export default Orders;