import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import setisfactionClient from './fackdata/setisfactionClient';

const Satisfaction = () => {

    const [setisfactionDatas, setSetisfactionDatas] = useState([])
    useEffect(() => {
        setSetisfactionDatas(setisfactionClient)
    }, [])

    console.log(setisfactionDatas)

    return (
        <section className='satisfaction-section py-5'>
            <Container className='satisfaction-section-inner'>
                <Row>
                    {
                        setisfactionDatas?.map(setisfactionData => <Col key={setisfactionData?.id}>
                            <div className='text-center setisfaction-inner'>
                                <div className='setisfaction-icon'>
                                    <i className={setisfactionData?.icon}></i>
                                </div>
                                <div className='conter-num'>
                                    <CountUp
                                        start={0}
                                        end={setisfactionData?.number}
                                        duration={8}
                                    />
                                    <span>+</span>
                                </div>
                                <p className='setisfaction-text'>{setisfactionData?.setisfactionsector}</p>
                            </div>
                        </Col>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Satisfaction;