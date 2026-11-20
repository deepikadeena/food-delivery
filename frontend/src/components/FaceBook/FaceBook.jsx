import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const FaceBook = () => {
  return (
    <div className="background">
      <div className="container">
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
          <div className="form-group mt-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block mt-3">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default FaceBook;

