import React from 'react';
import NavItems from './NavItems'
import '../../styles/navtop.css'

function NavTop(props) {
  
  function handleToggle() {
      props.handleSideNav()
  }

  function empty(){
    console.log("This does nothing")
  }

  const css = {
    Nav: "NavTopContainer",
    Navh1: "NavTop-h1",
    NavLogo: "NavTop-Logo",
    NavContainer: "NavTop-Container",
    NavContainerItems: "NavTop-Container-Item",
    Why: "NavTop-Why",
    NavContact: "NavTop-Contact",
    hamburger: "hamburger"
  }

  return (
    <div id='NavTop'>
      <NavItems handleSideNav={empty} css={css}/>
      <div className={props.toggle} onClick={e=>handleToggle(e)}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </div>

  );
}

export default NavTop;