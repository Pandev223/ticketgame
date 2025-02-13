import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Us Section */}
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            TicketHub is your one-stop platform for discovering and booking tickets for events, concerts, and more.
          </p>
        </div>

        {/* Useful Links Section */}
        <div className="footer-section">
          <h4>Useful Links</h4>
          <ul>
            <li><Link to="/about" className="footer-link">About Us</Link></li>
            <li><Link to="/support" className="footer-link">Support</Link></li>
            <li><Link to="/terms" className="footer-link">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
          </ul>
        </div>

 
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TicketMaster. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
