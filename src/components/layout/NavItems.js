import React, {useState} from 'react';
import './layout.css';
import logo from '../../logo/v5.png'
import {Link} from 'react-router-dom'

function NavItems(props) {

    const [ toggle, toggleSet] = useState("hamburger")

    function handleToggle() {
        toggleSet(!toggle)
      }

  return (
    <div id={props.css}>
      <Link to="/" className="link">
        <h1 className="NavTop-h1">
          <img className="NavTop-Logo" src={logo} alt="Company Logo"/>
          ATX-CS
        </h1>
      </Link>
      <div className="NavTop-Container">
        <Link to='/services' className="NavTop-Container-Item">
            Services
        </Link>
        <Link to='/about' className="NavTop-Container-Item">
            About
        </Link>
        <Link to='/contact' id="NavTop-Contact" className="NavTop-Container-Item">
            Contact
        </Link>
      </div>
      <div className={toggle  ? "hamburger" : "hamburger change"} onClick={e=>handleToggle(e)}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
    </div>
  );
}

export default NavItems;