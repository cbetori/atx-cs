import React from 'react';
import './layout.css';
import logo from '../../logo/v5.png'
import {Link} from 'react-router-dom'

function NavItems(props) {

  return (
    <div id={props.css.Nav} class={props.css.status}>
      <Link to="/" className="link"  onClick={props.handleSideNav}>
        <h1 className={props.css.Navh1}>
          <img className={props.css.NavLogo} src={logo} alt="Company Logo"/>
          ATX-CS
        </h1>
      </Link>
      <div className={props.css.NavContainer}  onClick={props.handleSideNav}>
        <Link to='/why' id={props.css.Why} className={props.css.NavContainerItems}>
            Why Us?
        </Link>
        <Link to='/services' className={props.css.NavContainerItems}>
            Services
        </Link>
        <Link to='/about' className={props.css.NavContainerItems}>
            About
        </Link>
        <Link to='/contact' id={props.css.NavContact} className={props.css.NavContainerItems}>
            Contact
        </Link>
      </div>
    </div>
  );
}

export default NavItems;