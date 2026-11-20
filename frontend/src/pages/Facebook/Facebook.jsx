import React from 'react';
import './Facebook.css';


const Facebook = () => {
  return (
    <div className="login-background">
      <div className="login-container">
        <h2 className="text-center">Facebook</h2>
        <form>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email or Phone Number"
              required
            />
          </div>
          <div className="form-group ">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="btn">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Facebook;

