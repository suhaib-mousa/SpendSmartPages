import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4">Spend Smart, Live Better</h1>
              <p className="lead">Take control of your finances with Jordan's premier budget management and discount discovery platform.</p>
              <div className="d-flex flex-wrap gap-2">
                <Link to="/budget" className="btn btn-primary btn-lg me-2 mb-2 mb-md-0">Start Saving Now</Link>
                <Link to="/discounts" className="btn btn-outline-primary btn-lg">Explore Discounts</Link>
              </div>
            </div>
            <div className="col-lg-6">
              <img src="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg" alt="SpendSmart Hero" className="img-fluid hero-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Why SpendSmart Section */}
      <section className="why-spendsmart" id="why">
        <div className="container">
          <div className="section-title">
            <h2>Why SpendSmart</h2>
            <p>SpendSmart empowers you to make smarter financial decisions with tools designed specifically for Jordan's market.</p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-dollar-sign"></i>
                </div>
                <h3>Take Control of Your Budget</h3>
                <p>Set financial goals, track expenses, and monitor your progress with our intuitive budgeting tools.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-percent"></i>
                </div>
                <h3>Discover Real-Time Discounts</h3>
                <p>Access the latest deals and discounts across Jordan, updated in real-time and tailored to your preferences.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>Personalized Financial Tips</h3>
                <p>Receive smart, personalized recommendations based on your spending habits and financial goals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Start Saving?</h2>
          <p>Join thousands of users in Jordan who are taking control of their finances and discovering amazing deals with SpendSmart.</p>
          <div className="d-flex justify-content-center flex-wrap gap-2">
            <Link to="/signup" className="btn btn-primary btn-lg me-2 mb-2 mb-md-0">Sign Up for Free</Link>
            <Link to="/contact" className="btn btn-outline-primary btn-lg">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;