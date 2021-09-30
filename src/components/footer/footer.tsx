import React from 'react';
// import { Link,} from 'react-router-dom';
import './footer.css';


const Footer : React.FC = (props)=> {
  return (
    <footer>
      <div className="container">
          <div className="flex align-center">
            {/* <Link to="/"><h1 className="logo">DummyPuggy</h1></Link>  */}
            <div className="spec"></div>
            <ul className='navList'>
              <li className="item flex align-center">
                <a href="https://twitter.com/DummyPuggy" target="_blank" rel="noreferrer">
                  <img src={require('../../images/twitterlogo.png').default} alt="" width="32"/>
                </a>
              </li>
              <li className="item flex align-center">
                <a href="https://discord.gg/mgmMQ9w3D5" target="_blank" rel="noreferrer">
                  <img src={require('../../images/Discord_Inverted_Icon.png').default} alt="" width="32"/>
                </a>
              </li>
            </ul>
          </div>
          </div>
    </footer>
  );
}

export default Footer;
