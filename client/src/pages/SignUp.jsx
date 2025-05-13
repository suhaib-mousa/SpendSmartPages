import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="container-fluid">
      <div className="row min-vh-100">
        <div className="col-md-6 bg-primary d-flex flex-column justify-content-center text-white p-5">
          <div className="text-center">
            <h2>Welcome Back!</h2>
            <p className="lead">Already have an account? Log in to access your dashboard!</p>
            <Link to="/login" className="btn btn-outline-light btn-lg">Log In</Link>
          </div>
        </div>

        <div className="col-md-6 d-flex flex-column justify-content-center p-5">
          <div className="text-center mb-4">
            <Link to="/" className="text-decoration-none">
              <i className="fas fa-wallet fs-1 text-primary"></i>
              <h3 className="mt-2">SpendSmart</h3>
            </Link>
          </div>
          
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h4 className="text-center mb-4">Create Your Account</h4>
              <form>
                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="Enter first name" />
                  </div>
                  <div className="col">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="Enter last name" />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Create a password" />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="terms" />
                  <label className="form-check-label" htmlFor="terms">
                    I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
                  </label>
                </div>
                <button type="submit" className="btn btn-primary w-100">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;