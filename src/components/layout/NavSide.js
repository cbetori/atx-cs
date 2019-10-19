import React from 'react';
import NavItems from './NavItems'
import '../../styles/navside.css'
import '../../App.css'

function NavSide(props) {

  const css = {
    Nav: props.css,
    status: props.toggle === "hamburger" ? "closed" : "open",
    Navh1: "NavSide-h1",
    NavLogo: "NavSide-logo",
    NavContainer: "NavSide-Container",
    NavContainerItems: "NavSide-Container-Item",
    Why: "NavTop-Why",
    NavContact: "NavSide-Contact",
    hamburger: "hamburger-side"
  } 

  return (
      <NavItems css={css} handleSideNav={props.handleSideNav}/>
  );
}

export default NavSide;