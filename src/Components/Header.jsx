import React, { useState } from 'react';
import Logo from '../Images/Logo.png';
import { MdOutlineShoppingCart } from "react-icons/md";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='container'>
      <div className='navbar'>
        <div className='navlog'>
          <img src={Logo} alt="" className='logo' />
          <h1 className='chanel'>Chanel</h1>
        </div>
        <div className='links '>
          <a href="" className='link'>Home</a>
          <a href="" className='link'>Product</a>
          <a href="" className='link'>About us</a>
          <a href="" className='link'>Contact us</a>
        </div>
        <div className='cart-sign '>
          <a href='#' className='lin'><MdOutlineShoppingCart className='iconic' /></a>
          <button className='signin'>sign in</button>
        </div>
        <div className='menu-icon' onClick={toggleMobileMenu}>
          ☰
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className='mobile-links'>
          <a href="" className='link'>Home</a>
          <a href="" className='link'>Product</a>
          <a href="" className='link'>About us</a>
          <a href="" className='link'>Contact us</a>
          <button className='signin'>sign in</button>
        </div>
      )}
    </div>
  );
}

export default Header;
