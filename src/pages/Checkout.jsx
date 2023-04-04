import React from 'react'
import '../styles/Checkout.scss'
import OrderItem from '../components/OrderItem.jsx'
import Header from '../components/Header'

const Checkout = () => {
  return (
    <>
    <Header/>
    <div className="Checkout">
        <div className="Checkout-container">
            <h1 className="title">My order</h1>
            <div className="Checkout-content">
                <div className="order">
                    <span>19.12.2022</span>
                    <span>6 articles</span>
                </div>
                <div>$120000000.00</div>
            </div>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
        </div>
    </div>
    </>
  )
}

export default Checkout