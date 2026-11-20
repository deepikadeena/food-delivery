import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import './Footer.css'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
      <div className='footer' id='footer'>
        <div className='footer-content'>
          <div className='footer-content-left'>
           <h1>𝙎𝙥𝙞𝙘𝙮𝙎𝙥𝙤𝙩</h1>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem quos consequuntur quod voluptate minus corporis, voluptates laborum obcaecati distinctio! Recusandae veritatis rerum impedit adipisci eveniet beatae cumque quis doloremque quos.</p>
           <div className='footer-social-icons'>
            <CiFacebook />
            <FaTwitter />
            <BsInstagram />
           </div>
          </div>
          <div className='footer-content-center'>
           <h2>COMPANY</h2>
           <ul>
           <Link to='/'> <li>Home</li></Link>
            <Link to='about'><li>About</li></Link>
            <Link to='myorder'><li>Delivery</li></Link>
           <Link to='privacy'> <li>Privacy Policy</li></Link>
           </ul>
          </div>
          <div className='footer-content-right'>
             <h2>CONTACT</h2>
             <ul>
              <li>+1-212-456-7890</li>
              <li>spicyspot@gmail.com</li>
             </ul>
          </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 @ spicyspot.com - All Right Reserved.</p>
      </div>
      
    
    
  )
}

export default Footer
