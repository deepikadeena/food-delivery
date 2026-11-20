import React from 'react'
import Navbar from './Navbar'
import {  Routes, Route } from "react-router-dom";
import AuthPage from "./AuthPage";


const App = () => {
  return (
    <>
  <Navbar />

    
      
      <Routes>
        <Route path="/AuthPage" element={<AuthPage/>} />
      </Routes>

  </>
  )
}

export default App
