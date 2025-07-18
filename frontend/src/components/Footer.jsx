
import React from "react";
import "../styles.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">

        {/* Column 1 */}
        <div className="footer-column">
          <h4>Little Lemon</h4>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h4>Contact</h4>
          <p>
            <strong>Little Lemon</strong><br />
            331 E <br />
            LaSalle Street<br />
            Illinois 60602, Kolkata<br />
            <br />
            +55 11 9999-9999<br />
            contact@littlelemon.com
          </p>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h4>Social Media</h4>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Developed by <a href="#">Ankit Yadav</a><br />
          &copy; 2025 Little Lemon. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

