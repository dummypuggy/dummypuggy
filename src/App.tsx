import React from 'react';
import { 
  Switch,
  Route,
  // Link,
} from 'react-router-dom';
// import Footer from './components/footer/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="container">
          <div className="flex align-center pad3">
            {/* <Link to="/"><h1 className="logo">DummyPuggy</h1></Link>  */}
            <div className="spec"></div>
            <ul className='navList'>
              <li className="item flex align-center">
                <a href="https://twitter.com/DummyPuggy" target="_blank" rel="noreferrer">
                  <img src={require('./images/twitterlogo.png').default} alt="" width="32"/>
                </a>
              </li>
              <li className="item flex align-center">
                <a href="https://discord.gg/mgmMQ9w3D5" target="_blank" rel="noreferrer">
                  <img src={require('./images/Discord_Inverted_Icon.png').default} alt="" width="32"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <div className="main">
            <img src={require('./images/PUGGY.jpg').default} alt="" width="100%"/>
          </div>
        </Route>
      </Switch>
      {/* <Footer/> */}
      
    </div>
  );
}
export default App;
