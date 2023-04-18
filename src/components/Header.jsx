import React, { useContext, useState } from 'react';
import '../styles/Header.scss';
import iconMenu from '../assets/icons/icon_menu.svg'
import logoSale from '../assets/logos/bag-fill.svg'
import shoppingCart from '../assets/icons/icon_shopping_cart.svg'
import Menu from '../components/Menu'
import MenuMobile from './MenuMobile';
import AppContext from '../context/AppContext';
import MyOrder from '../containers/MyOrder'

const Header = () => {
    const [menu,setMenu]=useState(false);
    const [menuMobile, setMenuMobile]=useState(false);
    const {state, showCart, toogleOrdersCart}=useContext(AppContext);

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
                    <li className="navbar-shopping-cart" onClick={()=>toogleOrdersCart()}>
                        <img src={shoppingCart} alt=""/>
                        {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                    </li>
                </ul>
            </div>
            {menu && <Menu/>}
            {menuMobile && <MenuMobile/>}
            {showCart && <MyOrder/>}
        </nav>
	);
}

export default Header;