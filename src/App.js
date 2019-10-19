import React, {useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import './App.css'
import { BrowserRouter, Switch, Route, } from 'react-router-dom'
import NavTop from './components/layout/NavTop'
import NavSide from './components/layout/NavSide'
import Footer from './components/layout/Footer'
import Home from './components/main/Home'
import Why from './components/main/Why'
import Services from './components/main/Services'
import About from './components/main/About'
import Contact from './components/main/Contact'

function App() {

  //hamburger is true start on on reload
  const [app, appSet] = useState("App")
  const [content, contentSet] = useState("Content")
  const [sideNav, sideNavSet] = useState("NavSide")
  const [ toggle, toggleSet] = useState("hamburger")
  
  useEffect(()=>{
    appSet("App")
    contentSet("Content")
    sideNavSet("NavSide")
    toggleSet("hamburger")
  },[])

  function handleSideNav (payload){
    console.log(content)
    toggleSet(toggle === "hamburger change" ? "hamburger" : "hamburger change")
    appSet(  app === "App" ? "SideNavOpen" : "App")
    contentSet(  content === "Content" ? "NoContent" : "Content")
    sideNavSet(  sideNav === "NavSide" ? "NavSide" : "NavSide")
  }

  return (  
    <BrowserRouter>
      <div id={app}>
        <NavTop toggle={toggle} handleSideNav={handleSideNav}/>
        <NavSide toggle={toggle} css={sideNav} handleSideNav={handleSideNav}/>
        <Switch>
          <Route exact path='/' render={() => <Home content={content} handleSideNav={handleSideNav} />}/>
          <Route exact path='/why' render={() => <Why content={content} handleSideNav={handleSideNav} />}/>
          <Route exact path='/services' render={() => <Services content={content} handleSideNav={handleSideNav} />}/>
          <Route exact path='/about' render={() => <About content={content} handleSideNav={handleSideNav} />}/>
          <Route exact path='/contact' render={() => <Contact content={content} handleSideNav={handleSideNav} />}/>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App;
