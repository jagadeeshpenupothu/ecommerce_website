import React from 'react'
import './Navbar.css' 
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav_logo'>
            <img src={logo} alt="" width={35} height={35}/>
            <p>SHOPPER</p>
        </div>
        <ul className='nav_menu'>
            <li>Shop<hr/></li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
        </ul>
        <div className='nav_login_cart'>
            <button>Login</button>
            <img src={cart_icon} alt="" width={30} height={30}/>
        </div>
    </div>
  )
}

export default Navbar