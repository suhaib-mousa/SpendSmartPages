import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-wallet"></i> SpendSmart
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/budget">Budgeting</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/discounts">Discounts</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tips">Tips</Link>
            </li>
          </ul>
          <div className="ms-lg-4 mt-3 mt-lg-0">
            <Link to="/login" className="btn btn-outline-primary me-2">Log In</Link>
            <Link to="/signup" className="btn btn-primary">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar