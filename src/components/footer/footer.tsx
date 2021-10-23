import React from 'react';
import './footer.css';
import { Container} from 'react-bootstrap'



const Footer : React.FC = (props)=> {
  return (
    <footer>
      <Container>
        <div className="footer_logo">
          <img src={require('../../images/footer_logo.png').default} alt=""/>
        </div>
        <ul className='navList'>
          <li className="item flex align-center">
            <a href="https://discord.com/invite/2VvACvMZ8F" target="_blank" rel="noreferrer">
              <img src={require('../../images/d.png').default} alt="" height="26"/>
            </a>
          </li>
          <li className="item flex align-center">
            <a href="https://twitter.com/DummyPuggy" target="_blank" rel="noreferrer">
              <img src={require('../../images/t.png').default} alt="" height="26"/>
            </a>
          </li>
          <li className="item flex align-center">
            <a href="https://www.instagram.com/dummypuggy_official" target="_blank" rel="noreferrer">
              <img src={require('../../images/i.png').default} alt="" height="28"/>
            </a>
          </li>
        </ul>
        <p className="copyright">Ⓒ2021 – All rights reserved by Dummy Puggy</p>
      </Container>
    </footer>
  );
}

export default Footer;
