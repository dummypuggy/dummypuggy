import React from "react";
import { Container } from 'react-bootstrap'
import questionsList from '../../data/faqData'
import './index.css'

function Faq() {
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