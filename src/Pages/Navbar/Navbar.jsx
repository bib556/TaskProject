import React, { useState } from 'react';
// import {Link} from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };


{/* <Link smooth to="/#home">Home</Link>
<Link smooth to="/#jokes">Jokes</Link>
<Link smooth to="/#about">About</Link> */}

  return (
    <div className="navbar">
      <div className="logo">AAkash Group</div>

      <div className={`otherNav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link smooth to ="/#home">Home</Link></li>
          <li><Link smooth to ="/#about">About</Link></li>
          <li><Link smooth to ="/#team">Our Team</Link></li>
          <li><Link smooth to ="/#contact">Contact</Link></li>
        </ul>
      </div>

      <div className="bars" onClick={handleMenuToggle}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
}

export default Navbar;

