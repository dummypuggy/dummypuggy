import React from "react";
import {Accordion, Container } from 'react-bootstrap'
import questionsList from '../../data/faqData'
import './index.css'

const Faq =  () => {
    let dataList = questionsList.map((item, index) => {
        return (
            <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>{item.q}</Accordion.Header>
                <Accordion.Body>{item.w}</Accordion.Body>
            </Accordion.Item>
        )
    })
    return (
        <div className='Faq' id="fqa">
            <Container>
                <Accordion defaultActiveKey="0" className="AccBlock">
                    {dataList}
                </Accordion>
            </Container>
        </div>
    );
}

export default Faq;