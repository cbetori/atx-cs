import React from 'react';
import '../../App.css'
import NavTop from './NavTop'
import NavSide from './NavSide'
import Footer from './Footer'
import Content from '../main/Home'

function Layout() {
  return (
    <div>
        <NavTop />
        <NavSide />
        <Content />
        <Footer  />
    </div>
  );
}

export default Layout;