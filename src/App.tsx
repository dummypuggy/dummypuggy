/* eslint-disable no-loop-func */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useRef} from 'react';
import { 
  Switch,
  Route,
  Link,
  useLocation,
  NavLink 
} from 'react-router-dom';
// import Footer from './components/footer/footer';
import './App.css';
// import IndexComp from './components/index';
// import Faq from './components/Faq';
// import EmailForm from './components/email';
// import NewView from './components/index/newIndex';
// import gsap from 'gsap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Index from './pages/index'
import Mint from './pages/mint/mint'

function App() {
  


  return (
    <div className='App'>
      <Switch>
        <Route path="/mint">
          <Mint/>
        </Route>
        <Route path="/">
          <Index/>
        </Route>
      </Switch>
      <ToastContainer
      hideProgressBar={true}/>
    </div>
  );
}
export default App;
