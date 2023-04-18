import React, { useEffect, useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';

import service from './fackdata/servicedata';
import './style.css'

const OurServices = () => {

    const [datas, setDatas] = useState([]);
    useEffect(() => {
        setDatas(service)
    }, [])
    console.log(datas)

    return (
        <section className='our-service-section py-5'>
            <Container>
                <Row>
                    <Col className='text-center'>
                        <div className='py-3'>
                            <h2 className='our-section-heading'> Our Service
                            </h2>
                            
                        </div>
                    </Col>
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
                            {/* <h6>{data?.name}</h6> */}
                            <h4 className='multiline-ellipsis pe-5 pt-3'>{data?.description}</h4>
                            {/* <p>{data?.comments[0]['massage']}</p> */}
                            <p className='pt-2'><i className="fas fa-star icon-design"></i> {data?.reviews[0]['ratting']}</p>
                        </Col>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default OurServices;