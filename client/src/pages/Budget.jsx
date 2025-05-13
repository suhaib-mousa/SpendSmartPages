import React from 'react';

function Budget() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="text-center mb-4">
            <h1 className="display-5 fw-bold text-primary">Budget Analysis</h1>
            <p className="text-muted">Let's analyze your financial habits and create a personalized budget plan.</p>
          </div>
          
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white py-3">
              <div className="d-flex align-items-center">
                <i className="fas fa-robot me-2 fs-4"></i>
                <h3 className="m-0 fs-5">Financial Assistant</h3>
              </div>
            </div>
            
            <div className="card-body chat-container">
              <div className="message bot-message">
                👋 Hi there! I'm your SpendSmart financial assistant. I'll help analyze your budget and provide personalized advice.
              </div>
              <div className="message bot-message">
                Let's start by understanding your financial situation. What's your monthly income?
              </div>
            </div>
            
            <div className="card-footer bg-light">
              <form className="d-flex align-items-center">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Type your answer..." />
                  <button type="submit" className="btn btn-primary">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Budget;