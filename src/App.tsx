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
import Footer from './components/footer/footer';
import './App.css';
import IndexComp from './components/index';
import Faq from './components/Faq';
import EmailForm from './components/email';
import NewView from './components/index/newIndex';
import LoadingImg from './images/loading.png'
import { loadavg } from 'os';
import gsap from 'gsap';

function App() {
  const location = useLocation();
  const [navBtn, setNavBtnClassNames] = useState('iconUl');
  const [navMolde, setNavModelClassNames] = useState('nav-model');
  const Time = useRef<any>()
  const pos = useRef<any>(0);
  const loadaing = useRef<any>()
  const [isLoading, setisLoading] = useState(true)
  const [LoadCount, setLoadCount] = useState(0)
  React.useEffect(() => {
    setNavModelClassNames('nav-model')
    setNavBtnClassNames('iconUl')
    
    const ImgArr:any = document.getElementById('NewIndex')?.getElementsByTagName('img');
    const VideoArr:any = document.getElementsByTagName('video')
    const arr = [...ImgArr, ...VideoArr]
    console.log(arr)
    const Total = arr.length -1;
    let promiseAll:any = [];
    let recave:any = 0;
    for (let i:any = 0; i <= Total; i++) {
      promiseAll[i] = new Promise((resolve)=>{ 
        console.log(arr[i].tagName==='IMG')
        recave++;

        if(arr[i].tagName==='IMG'){
          arr[i].onload = () => {
  
          setLoadCount(recave/Total*100)
            
          resolve(arr[i])
  
          }
        } else {
          arr[i].oncanplay = ()=>{
            resolve(arr[i])
            setLoadCount(recave/Total*100)
          }
        }
        
      })
    }
    Promise.all(promiseAll).then((img)=>{
      // setisLoading(false)
      gsap.to([loadaing.current],{
        opacity: 0,
        duration: 1,
      })
      document.body.classList.remove('modal-open');
    })
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

  const ScrollBlock = (name:any)=>{
    let anchorElement = document.getElementById(name);
    if (anchorElement) {
      pos.current = anchorElement.offsetTop
      document.body.scrollTo(0, anchorElement.offsetTop - window.innerHeight);
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
                <a href="/#banner" onClick={()=>{ScrollBlock('banner')}}>
                  Home
                </a>
              </li>
              <li className="item flex align-center">
                <a href="/#about">
                about
                </a>
              </li>
              <li className="item flex align-center">
                <a href="/#gameplay" onClick={()=>{ScrollBlock('gameplay')}}>
                gameplay
                </a>
              </li>
              <li className="item flex align-center">
                <a href="/#team" onClick={()=>{ScrollBlock('team')}}>
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
       <div ref={loadaing} className="loading">
          <div className="load_box">
            <div className="load">
              <img src={LoadingImg} alt="" width="100%"/>
              <div className="load_count">
                <div className="load_progress">
                <div className="load_progress-bar" style={{width: `${LoadCount}%`}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      <Switch>
        <Route exact path="/">
          {/* <NewView/> */}
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
          <div id="NewIndex">
          <NewView />

          </div>
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
