import React from "react";
import { Container } from 'react-bootstrap'
import questionsList from '../../data/faqData'
import './index.css'
import { 
    useLocation,
  } from 'react-router-dom';

function Faq() {
    const location = useLocation();
    React.useEffect(() => {
        setTimeout(()=>{
        document.documentElement.scrollTop = document.body.scrollTop =0;
        },0)
    
    }, [location]);
    let dataList = questionsList.map((item, index) => {
        return (
            <li>
                <h1 className="title">Q: {item.q}</h1>
                <p className="sub">A: {item.w}</p>
            </li>
        )
    })
    return (
        <div className='Faq' id="fqa">
            <Container>
                <ul className="fqaList">
                {dataList}
                </ul>
            </Container>
        </div>
    );
}

export default Faq;