import React, { useEffect, useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';

import service from './fackdata/servicedata';

const OurServices = () => {

    const [datas, setDatas] = useState([]);
    useEffect(() => {
        setDatas(service)
    }, [])
    console.log(datas)

    return (
        <section className='our-service-section'>
            <Container>
                <Row>
                    <Col className='text-center'>Our Service</Col>
                </Row>
                <Row>
                    {
                        datas.slice(0, 3).map(data => <Col key={data?.id} >
                            <Carousel variant="dark">
                                {
                                    data?.images.map(imgdata =>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={imgdata}
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                    )
                                }

                            </Carousel>
                            <h6>{data?.name}</h6>
                            <p>{data?.description}</p>
                            {/* {
                            console.log(data?.comments[0]['massage'],"36")
                        } */}
                            <p>{data?.comments[0]['massage']}</p>
                            <p>{data?.reviews[0]['ratting']}</p>
                        </Col>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default OurServices;