import React from 'react';
import 'antd/dist/antd.css';
import './App.css'
import { BrowserRouter, Switch, Route, } from 'react-router-dom'
import NavTop from './components/layout/NavTop'
import NavSide from './components/layout/NavSide'
import Footer from './components/layout/Footer'
import Home from './components/main/Home'
import Services from './components/main/Services'
import About from './components/main/About'
import Contact from './components/main/Contact'

function App() {
  return (
    <BrowserRouter>
      <div id="App">
        <NavTop/>
        {/* <NavSide/> */}
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/services' component={Services}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/contact' component={Contact}/>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
