import React from 'react';
import '../styles/Header.scss';
import iconMenu from '../assets/icons/icon_menu.svg'
import logoSale from '../assets/logos/bag-fill.svg'
import shoppingCart from '../assets/icons/icon_shopping_cart.svg'
import { useState } from 'react';
import Menu from '../components/Menu'
import MenuMobile from './MenuMobile';

const Header = () => {
    const [menu,setMenu]=useState(false);
    const [menuMobile, setMenuMobile]=useState(false);
    const handleMenu=()=>{
        setMenu(!menu);
        setMenuMobile(false)
    }
    const handleMenuMobile=()=>{
        setMenuMobile(!menuMobile);
        setMenu(false)
        menuMobile ? document.body.style.overflow="auto" : document.body.style.overflow="hidden"
    }
	return (
		<nav>
            <img src={iconMenu} alt="" className="menu" onClick={handleMenuMobile}/>
            <div className="navbar-left">
                <div className="nav-logo-header">
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
                    <li className="navbar-email" onClick={handleMenu}>
                        example@example.com
                    </li>
                    <li className="navbar-shopping-cart">
                        <img src={shoppingCart} alt=""/>
                        <div>0</div>
                    </li>
                </ul>
            </div>
            {menu && <Menu/>}
            {menuMobile && <MenuMobile/>}
        </nav>
	);
}

export default Header;