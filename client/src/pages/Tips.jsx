import React from 'react';

function Tips() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Financial Tips & Resources</h1>
      
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img src="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg" className="card-img-top" alt="Budgeting Tips" />
            <div className="card-body">
              <h5 className="card-title">Budgeting Basics</h5>
              <p className="card-text">Learn the fundamentals of creating and maintaining a budget that works for you.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img src="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg" className="card-img-top" alt="Saving Tips" />
            <div className="card-body">
              <h5 className="card-title">Smart Saving Strategies</h5>
              <p className="card-text">Discover effective ways to save money and build your emergency fund.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img src="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg" className="card-img-top" alt="Investment Tips" />
            <div className="card-body">
              <h5 className="card-title">Investment 101</h5>
              <p className="card-text">Get started with investing and learn about different investment options.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-8 mx-auto">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Latest Financial Tips</h5>
              <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1">How to Create an Emergency Fund</h6>
                    <small className="text-muted">3 days ago</small>
                  </div>
                  <p className="mb-1">Learn the importance of having an emergency fund and how to build one.</p>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1">50/30/20 Budget Rule</h6>
                    <small className="text-muted">5 days ago</small>
                  </div>
                  <p className="mb-1">Understanding and implementing the 50/30/20 budget rule.</p>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1">Smart Shopping Tips</h6>
                    <small className="text-muted">1 week ago</small>
                  </div>
                  <p className="mb-1">Tips and tricks for saving money while shopping.</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tips;