import React, { useEffect, useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import service from './fackdata';
const OurServices = () => {

    const [datas, setDatas] = useState([]);
    useEffect(() => {
        setDatas(service)
    }, [])
    console.log(datas)
    return (
        <Container>
            <Row>
                <Col className='text-center'>Our Service</Col>
            </Row>
            <Row>
                {
                    datas.slice( 0, 3 ).map( data => <Col key={data?.id} >
                        <Carousel variant="dark">
                            { 
                                data?.images.map( imgdata =>
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
                        <p>{ data?.comments[0]['massage'] }</p>
                        <p>{data?.reviews[0]['ratting']}</p>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default OurServices;