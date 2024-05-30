import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <p>
        &copy; 2023 My Job Board. All rights reserved. |
        <Link to="/Contact">Contact Us</Link>|<Link to="/Privacy">Privacy</Link>
        |<Link to="/Termsandservice">Terms of Service</Link>
      </p>
    </footer>
  );
};
export default Footer;
