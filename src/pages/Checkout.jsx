import React from 'react'
import '../styles/Checkout.scss'
import OrderItem from '../components/OrderItem.jsx'

const Checkout = () => {
  return (
    <div className="Checkout">
        <div className="Checkout-container">
            <h1 className="title">My order</h1>
            <div className="Checkout-content">
                <div className="order">
                    <span>19.12.2022</span>
                    <span>6 articles</span>
                </div>
                <div>$12000.00</div>
            </div>
            <OrderItem/>
        </div>
    </div>
  )
}

export default Checkout