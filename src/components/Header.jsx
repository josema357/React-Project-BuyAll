import React from 'react';
import '../styles/Header.scss';
import iconMenu from '../assets/icons/icon_menu.svg'
import logoSale from '../assets/logos/bag-fill.svg'
import shoppingCart from '../assets/icons/icon_shopping_cart.svg'

const Header = () => {
	return (
		<nav>
            <img src={iconMenu} alt="" className="menu"/>
            <div className="navbar-left">
                <div className="nav-logo">
                    <img src={logoSale} alt=""/>
                    <p>BUYALL</p>
                </div>
                <ul>
                    <li><a href="">All</a></li>
                    <li><a href="">Clothes</a></li>
                    <li><a href="">Electronics</a></li>
                    <li><a href="">Furnitures</a></li>
                    <li><a href="">Toys</a></li>
                    <li><a href="">Others</a></li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email">example@example.com</li>
                    <li className="navbar-shopping-cart">
                        <img src={shoppingCart} alt=""/>
                        <div>0</div>
                    </li>
                </ul>
            </div>
        </nav>
	);
}

export default Header;