import React, { useContext, useState } from 'react'
import './Navbar.css'
import { SlBasket } from "react-icons/sl";
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
import { assets } from '../assets/assets';

const Navbar = ({setShowLogin}) => {

   const [menu,]=useState("home");

   const {getCartCount,token,setToken}=useContext(StoreContext);

   const navigate = useNavigate();

  const logout = ()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/");

  }


  return (
    <div className='navbar'>
      <Link to='/'>  <h1 className='logo'>𝙎𝙥𝙞𝙘𝙮𝙎𝙥𝙤𝙩</h1></Link>
        <ul className="navbar-menu">
            <Link to='/'>home</Link>
            <a href='/menu'  className={menu=="menu"?"active":""}>menu</a>
            <a href='/about' className={menu=="about"?"active":""}>about</a>
            <a href='/contact' className={menu=="contact-us"?"active":""}>contact us</a>
        </ul>  
        <div className="navbar-right">
            
            <div className='navbar-search-icon'>
             <Link to='/cart'><SlBasket /></Link>
              <span className='dot'>{getCartCount()}</span>
             
            </div>
            {!token?<button onClick={()=>setShowLogin(true)}>sign in</button>
            :<div className='navbar-profile'>
              <img src={assets.profile_icon} alt="" />
              <ul className='nav-profile-dropdown'>
                <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                <hr />
                <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>

              </ul>
              
              </div>}
        </div>    
    </div>
  )
}

export default Navbar
