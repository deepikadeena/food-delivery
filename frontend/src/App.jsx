import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'
import ExploreMenu from './components/ExploreMenu/ExploreMenu'
import Facebook from './pages/Facebook/Facebook'

import Privacy from './Privacy'
import Footer from './components/Footer/Footer'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import FoodDisplay from './components/FoodDisplay/FoodDisplay'
import FoodItem from './components/FoodItem/FoodItem'
import Menu from './pages/Menu/Menu'







const App = () => {

  const [showLogin,setShowLogin]= useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/myorders' element={<MyOrders/>}/>
        <Route path='/explore-menu' element={<ExploreMenu/>}/>
         <Route path='/facebook' element={<Facebook/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/privacy' element={<Privacy/>}/>
         <Route path='/myorder' element={<MyOrders/>}/>
         <Route path='/Privacy' element={<Privacy/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/food-display' element={<FoodDisplay/>}/>
         <Route path='/food-item' element={<FoodItem/>}/>
         <Route path='/menu' element={<Menu/>}/>
         

      </Routes>
    </div>
      <Footer/>
    </>
  )
}

export default App
