import React, { useState } from "react"
import './Navbar.css'
import Hamburger from 'hamburger-react'
const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  return (
   
    <div className="navbar">
      <div className="navbar-logo">
      <img src='Cap.png' className='navbar-image'/>
      <h1>Crypto Dervish</h1>
      </div>
      <div className="navLinks">
      <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
     
    
    </div>
  )
}

export default Navbar
