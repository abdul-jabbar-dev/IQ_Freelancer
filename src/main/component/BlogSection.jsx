import React, { useEffect, useState } from 'react';
import blogdata from './fackdata/blogdata'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';

const BlogSection = () => {

    const [blogDatas, setBlogDatas] = useState([])
    useEffect(() => {
        setBlogDatas(blogdata);
    }, [])

    console.log(blogDatas)

    return (
        <section className='blog-section'>
            <Container>
                <Row className='py-5'>
                    {
                        blogDatas.map(blogdata => <Col key={blogdata?.id}>
                            <Card style={{ width: '25rem' }}>
                                <Card.Img variant="top" src={blogdata?.blogImg} />
                                <Card.Body>
                                    <Card.Text>
                                        {blogdata?.date}
                                    </Card.Text>
                                    <Card.Title>{blogdata?.blogTitle}</Card.Title>
                                    <div className=''>
                                        <img src={blogdata?.authImg} alt="" className="inline" /><span> {blogdata?.authName}</span>
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