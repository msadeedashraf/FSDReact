import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Job Zila</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/Jobsearch">Job Search</Link>
          </li>
          <li>
            <Link to="/Joblist">Job Listing</Link>
          </li>

          <li>
            <Link to="/Termsandservice">Terms of Service</Link>
          </li>
          <li>
            <Link to="/Privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
