// AuthModal.jsx
import React, { useState} from "react";
import "./AuthModal.css";

function AuthPage({ isOpen, onClose,onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  if (!isOpen) return null;


   const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    // Authentication logic here

    onLogin(email,password); // notify Navbar that login succeeded
  };

 
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <h2>{isLogin ? "Login" : "Sign Up"}</h2>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Username"
            />
          )}

          <input
  type="email"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

<input
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

          <button type="submit">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="switch-btn"
          >
            {isLogin ? " Sign Up" : " Login"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default AuthPage;