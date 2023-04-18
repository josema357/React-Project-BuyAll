import React, { useContext } from 'react';
import OrderItem from '../components/OrderItem.jsx';
import '../styles/MyOrder.scss';
import arrow from '../assets/icons/flechita2.svg'
import AppContext from '../context/AppContext.js';

const MyOrder = () => {
	const {state, toogleOrdersCart}=useContext(AppContext);
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={arrow} alt="arrow" onClick={()=>toogleOrdersCart()}/>
				<p className="title-myOrder">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map((item)=>(
					<OrderItem product={item} key={`orderItem-${item.id}`}/>
				))}
			</div>
			<div className="myOrderTotal">
				<p>
					<span>Total</span>
				</p>
				<p>$5000.00</p>
			</div>
			<button className="primary-button-global">
					Checkout
				</button>
		</aside>
	);
}

export default MyOrder;