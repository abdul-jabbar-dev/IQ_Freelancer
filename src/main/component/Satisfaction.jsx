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
        <section className='satisfaction-section'>
            <Container>
                <Row>
                    {
                        setisfactionDatas?.map(setisfactionData => <Col key={setisfactionData?.id}>
                            <div>
                                <div>
                                    <span>{setisfactionData?.icon}</span>
                                </div>
                                <div>
                                    <CountUp
                                        start={0}
                                        end={setisfactionData?.number}
                                        duration={8}
                                    />
                                </div>
                                <p>{setisfactionData?.setisfactionsector}</p>
                            </div>
                        </Col>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Satisfaction;