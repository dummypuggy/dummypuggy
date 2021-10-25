import React, {useState} from 'react';
import { 
  Switch,
  Route,
  Link,
  useLocation,
  NavLink 
} from 'react-router-dom';
import Footer from './components/footer/footer';
import './App.css';
import IndexComp from './components/index';
import Faq from './components/Faq';

function App() {
  const location = useLocation();
  const [creatorClassNames, setCreatorClassNames] = useState('creators');
  React.useEffect(() => {
    document.documentElement.scrollTop = document.body.scrollTop =0;
    if(location.pathname === '/faq'){
      setCreatorClassNames('creators active');
    }else if(location.pathname === '/ecosystem'){
      setCreatorClassNames('creators');
    }else{
      setCreatorClassNames('creators');
    }
  }, [location, creatorClassNames]);
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
                Team
                </a>
              </li>
              <li className="item flex align-center">
                <NavLink  to="/faq" activeClassName="active">Faq</NavLink >
              </li>
              
              <li className="item flex align-center">
                <a href="https://discord.com/invite/2VvACvMZ8F" target="_blank" rel="noreferrer">
                  <img src={require('./images/d.png').default} alt="" height="26"/>
                </a>
              </li>
              <li className="item flex align-center">
                <a href="https://twitter.com/DummyPuggy" target="_blank" rel="noreferrer">
                  <img src={require('./images/t.png').default} alt="" height="26"/>
                </a>
              </li>
              <li className="item flex align-center">
                <a href="https://www.instagram.com/dummypuggy_official" target="_blank" rel="noreferrer">
                  <img src={require('./images/i.png').default} alt="" height="28"/>
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
        <Route path="/faq">
          <Faq/>
        </Route>
      </Switch>
      <Footer/>
      
    </div>
  );
}
export default App;
