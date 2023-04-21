import React, { useEffect, useState } from 'react';
import blogdata from './fackdata/blogdata'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import './style.css'

const BlogSection = () => {

    const [blogDatas, setBlogDatas] = useState([])
    useEffect(() => {
        setBlogDatas(blogdata);
    }, [])

    console.log(blogDatas)

    return (
        <section className='blog-section'>
            <Container>
                <Row>
                    <Col>
                        <h2 className='text-center blog-header'>Our Latest Blog</h2>
                    </Col>
                </Row>
                <Row className='py-5'>
                    {
                        blogDatas.map(blogdata => <Col key={blogdata?.id}>
                            <Card>
                                <Card.Img variant="top" src={blogdata?.blogImg} />
                                <Card.Body>
                                    <Card.Text>
                                    <i class="fas fa-calendar-alt me-2 py-3"></i>{blogdata?.date}
                                    </Card.Text>
                                    <Card.Title>{blogdata?.blogTitle}</Card.Title>
                                    <div className='img-auth-div'>
                                        <img src={blogdata?.authImg} alt="" className="me-3 inline circle-img" /><span> {blogdata?.authName}</span>
                                    </div>
                                </Card.Body>

                            </Card>
                        </Col>
                        )
                    }
                </Row>
            </Container>
        </section>
    );
};

export default BlogSection;