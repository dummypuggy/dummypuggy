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
import EmailForm from './components/email';
// import NewIndexComp from './components/index/newIndex';
import NewView from './components/index/demo';

function App() {
  const location = useLocation();
  const [navBtn, setNavBtnClassNames] = useState('iconUl');
  const [navMolde, setNavModelClassNames] = useState('nav-model');
  React.useEffect(() => {
    setTimeout(()=>{
      document.documentElement.scrollTop = document.body.scrollTop =0;
    },0)
    setNavModelClassNames('nav-model')
    setNavBtnClassNames('iconUl')
  }, [location]);
  function changeNavStatu() {
    let isActive = navBtn.indexOf("active");
    if(isActive === -1){
      setNavBtnClassNames('iconUl active')
      setNavModelClassNames('nav-model active')
    } else {
      setNavBtnClassNames('iconUl')
      setNavModelClassNames('nav-model')
    }
  }
  return (
    <div className="App">
      <div className="header">
        <div className="container">
          <div className="flex align-center">
            <Link to="/"><h1 className="logo">DummyPuggy</h1></Link> 
            <div className="spec"></div>
            <ul className='navList pc'>
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
                <a href="https://twitter.com/DummyPuggyNFT" target="_blank" rel="noreferrer">
                  <img src={require('./images/t.png').default} alt="" height="26"/>
                </a>
              </li>
              <li className="item flex align-center">
                <a href="https://www.instagram.com/dummypuggy_official" target="_blank" rel="noreferrer">
                  <img src={require('./images/i.png').default} alt="" height="28"/>
                </a>
              </li>
            </ul>
            <div className="navBtn icon">
              <ul className={navBtn} onClick={changeNavStatu}>
                  <li></li>
                  <li></li>
                  <li></li>
              </ul>

            </div>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <NewView/>
          {/* <NewIndexComp/> */}
          <IndexComp/>

          <Footer/>
        </Route>
        <Route path="/faq">
          <Faq/>
          <Footer/>
        </Route>
        <Route path='/emailfrom'>
          <EmailForm/>
        </Route>
        <Route path='/newindex'>
          <NewView/>
          <Footer/>
        </Route>
      </Switch>
     
      {/* 手机导航 */}
      <div className={navMolde}>
        <div className="model-content">
          <div className="phoneNav">
            <ul className='navList textList'>
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
            </ul>
            <ul className='navList picList'>
              <li className="item flex align-center">
                <a href="https://discord.com/invite/2VvACvMZ8F" target="_blank" rel="noreferrer">
                  <img src={require('./images/d.png').default} alt="" height="26"/>
                </a>
              </li>
              <li className="item flex align-center">
                <a href="https://twitter.com/DummyPuggyNFT" target="_blank" rel="noreferrer">
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
    </div>
  );
}
export default App;
