
import React  from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./AuthModal.css";
import AuthModal from "./AuthPage"


function Navbar() {
const [isLoggedIn, setIsLoggedIn] = useState(false);

const [showModal, setShowModal] = useState(false);

 const handleLogin = (email,password) => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("email", email);
  localStorage.setItem("password", password);
    setIsLoggedIn(true);
    setShowModal(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

 

  

  
  return (
    <>
    <nav className="navbar">
      <div className="logo">MyApp</div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
       <Link to="/AuthPage">
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={() => setShowModal(true)}>
            Login
          </button>
        )}</Link>
    </nav>

    
    <AuthModal
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  onLogin={handleLogin}
/>
      </>
  );
}

export default Navbar;