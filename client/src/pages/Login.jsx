import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="container-fluid">
      <div className="row min-vh-100">
        <div className="col-md-6 d-flex flex-column justify-content-center p-5">
          <div className="text-center mb-4">
            <Link to="/" className="text-decoration-none">
              <i className="fas fa-wallet fs-1 text-primary"></i>
              <h3 className="mt-2">SpendSmart</h3>
            </Link>
          </div>
          
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h4 className="text-center mb-4">Log in to Your Account</h4>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="remember" />
                  <label className="form-check-label" htmlFor="remember">Remember me</label>
                </div>
                <button type="submit" className="btn btn-primary w-100">Log In</button>
              </form>
              <div className="text-center mt-3">
                <Link to="/forgot-password" className="text-decoration-none">Forgot password?</Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 bg-primary d-flex flex-column justify-content-center text-white p-5">
          <div className="text-center">
            <h2>New Here?</h2>
            <p className="lead">Sign up and discover a great amount of new opportunities!</p>
            <Link to="/signup" className="btn btn-outline-light btn-lg">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;