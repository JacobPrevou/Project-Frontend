import React from 'react';
import {  Link } from "react-router-dom";

function Navbar() {
  return (
  <div>
    <li>
      <Link to="/">Fighters Page</Link>
    </li>
    <li>
      <Link to="/cats">Add Fighter Form</Link>
    </li>
    <li>
      <Link to="/sheeps">3rd Route</Link>
    </li>
  </div>
  );
}

export default Navbar;