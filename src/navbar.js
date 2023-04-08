import React from 'react'
import './navbar.css'

function Navbar() {
    
  return (
    <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
        </label>

        <ul className="menu__box">
            <li><a className="menu__item" href="/">Home</a></li>
            <li><a className="menu__item" href="/login">Login</a></li>
            <li><a className="menu__item" href="/signup">SignUp</a></li>
            <li><a className="menu__item" href="/user">User</a></li>
            <li><a className="menu__item" href="/retailer">Retailer</a></li>
            <li><a className="menu__item" href="/manufacturer">Manufacturer</a></li>
        </ul>
    </div>
  );
}

export default Navbar 