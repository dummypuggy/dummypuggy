import React from 'react';
import { 
  Switch,
  Route,
  Link,
} from 'react-router-dom';
// import Footer from './components/footer/footer';
import './App.css';
import IndexComp from './components/index';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="container">
          <div className="flex align-center">
            <Link to="/"><h1 className="logo">DummyPuggy</h1></Link> 
            <div className="spec"></div>
            <ul className='navList'>
              <li className="item flex align-center">
                <a href="/#banner">
                  Home
                </a>
              </li>
              <li className="item flex align-center">
                <a href="/#about">
                about
                </a>
              </li>
              <li className="item flex align-center">
                <a href="/#gameplay">
                gameplay
                </a>
              </li>
              <li className="item flex align-center">
                <a href="/#team">
                Tean
                </a>
              </li>
              <li className="item flex align-center">
                <a href="/#faq">
                faq
                </a>
              </li>
              
              <li className="item flex align-center">
                <a href="https://discord.com/invite/2VvACvMZ8F" target="_blank" rel="noreferrer">
                  <img src={require('./images/discord.png').default} alt="" width="32"/>
                </a>
              </li>
              <li className="item flex align-center">
                <a href="https://twitter.com/DummyPuggy" target="_blank" rel="noreferrer">
                  <img src={require('./images/twitter.png').default} alt="" width="32"/>
                </a>
              </li>
              <li className="item flex align-center">
                <a href="https://www.instagram.com/dummypuggy_official" target="_blank" rel="noreferrer">
                  <img src={require('./images/ins.png').default} alt="" width="32"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <IndexComp/>
        </Route>
      </Switch>
      {/* <Footer/> */}
      
    </div>
  );
}
export default App;
