import React,{useState,useEffect} from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Dropdown from './components/Dropdown';

import Footer from './components/Footer';

import Navbar from './components/Navbar';
import Home from './pages';
import About from './pages/About';
import Menu from './pages/Menu';

function App() {
  const [isopen, setisopen] = useState(false)
  const toggle=()=>{
    setisopen(!isopen)

  }
  useEffect(()=>{
    const hıdeMenu=()=>{
      if(window.innerWidth >768 && isopen){
        setisopen(false)
        console.log('i reziteddddd')
      }
    }
    window.addEventListener('rezise',hıdeMenu)
    return()=>{
      window.removeEventListener('resize',hıdeMenu)
    
    }
  }
 
  )
  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isopen={isopen} toggle={toggle}/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/About"  component={About}/>
        <Route path="/Menu"  component={Menu}/>
        
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
