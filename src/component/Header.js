import React from 'react'
import logo from '../assets/logo.jpg'
import '../App.css'
function Header() {
  return (
  <header className='header'>
    <img src={logo} alt='logo' style={{height:"50px",width:"50px",borderRadius:"55px"}}/>
    <a href='/'>Home</a>
    </header>
  )
}

export default Header
