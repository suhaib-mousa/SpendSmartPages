import React from 'react';

function Discounts() {
  return (
    <div>
      <div className="hero-section py-5 text-center text-white">
        <div className="container">
          <h1 className="display-4 mb-3">Discover Jordan's Best Offers</h1>
          <p className="lead">Exclusive discounts on the most popular places in Jordan</p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">Filters</h5>
              </div>
              <div className="card-body">
                <h6>Categories</h6>
                <div className="mb-3">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="restaurants" />
                    <label className="form-check-label" htmlFor="restaurants">
                      Restaurants
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="hotels" />
                    <label className="form-check-label" htmlFor="hotels">
                      Hotels
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="activities" />
                    <label className="form-check-label" htmlFor="activities">
                      Activities
                    </label>
                  </div>
                </div>

                <h6>Location</h6>
                <div className="mb-3">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="amman" />
                    <label className="form-check-label" htmlFor="amman">
                      Amman
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="aqaba" />
                    <label className="form-check-label" htmlFor="aqaba">
                      Aqaba
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="petra" />
                    <label className="form-check-label" htmlFor="petra">
                      Petra
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-9">
            <div className="row">
              {/* Sample Discount Card */}
              <div className="col-md-4 mb-4">
                <div className="card">
                  <img src="https://images.pexels.com/photos/2403391/pexels-photo-2403391.jpeg" className="card-img-top" alt="Restaurant" />
                  <div className="card-body">
                    <div className="discount-badge">-20%</div>
                    <h5 className="card-title">Luxury Restaurant</h5>
                    <p className="card-text">Enjoy fine dining with our special discount offer.</p>
                    <button className="btn btn-primary">View Details</button>
                  </div>
                </div>
              </div>

              {/* More discount cards would be dynamically added here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discounts;