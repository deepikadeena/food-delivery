import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1 className='logo' >𝙎𝙥𝙞𝙘𝙮𝙎𝙥𝙤𝙩</h1>
        <img className='profile' src={assets.profile_image} alt="" />
      
    </div>
  )
}

export default Navbar
