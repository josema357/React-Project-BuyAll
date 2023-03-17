import React from 'react';
import '../styles/ProductItem.scss';
import addCart from '../assets/icons/bt_add_to_cart.svg'

const ProductItem = () => {
	return (
		<div className="ProductItem">
			<img src="https://img.remediosdigitales.com/a49704/red-bull-y-bmc-crean-la-bicicleta-de-carretera-mas-rapida-del-mundo004/1366_2000.jpeg" alt="bici" />
			<div className="product-info">
				<div>
					<p>$200.00</p>
					<p>Bicicleta</p>
				</div>
				<figure>
					<img src={addCart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;