import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
       
        <div className="navbar-logo">
          <Link to="/" className="navbar-logo-link">
            TicketMaster
          </Link>
        </div>
        <div className="navbar-links">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/my-tickets" className="nav-link">
                My Tickets
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link">
                Support
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link">
                Profile
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-actions">
          <button className="navbar-btn">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;