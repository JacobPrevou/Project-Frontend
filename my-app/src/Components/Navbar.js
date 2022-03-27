import React from 'react';
import {  Link } from "react-router-dom";

function Navbar() {
  return (
  <div>
    <li>
      <Link to="/">Fighters Page</Link>
    </li>
    <li>
      <Link to="/FightersForm">Add Fighter Form</Link>
    </li>
  </div>
  );
}

export default Navbar;