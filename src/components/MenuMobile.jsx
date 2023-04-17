import React from 'react'
import '../styles/MenuMobile.scss'

const MenuMobile = () => {
  return (
    <div className="Mobile-Menu">
            <ul>
                <li><a href="">CATEGORIES</a></li>
                <li><a href="">All</a></li>
                <li><a href="">Electronics</a></li>
                <li><a href="">Futnitures</a></li>
                <li><a href="">Toys</a></li>
                <li><a href="">Others</a></li>
            </ul>
            <ul>
                <li><a href="/">My orders</a></li>
                <li><a href="/">My account</a></li>
            </ul>
            <ul>
                <li><a href="/" className="email-mobile">example@example.com</a></li>
                <li><a href="/" className="sign-out-mobile">Sign out</a></li>
            </ul>
        </div>
  )
}

export default MenuMobile