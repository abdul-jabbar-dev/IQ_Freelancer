import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
// import { Button } from 'react-bootstrap/Button';
import firstTestimonial from '../../assets/hero-testimonial/trustpilot1.png'
import secondTestimonial from '../../assets/hero-testimonial/trustpilot1.png'
import thirdTestimonial from '../../assets/hero-testimonial/trustpilot1.png'

const HeroSection = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <div>
                        <h1>Get your mailing lists verified before every send</h1>
                        <p>Don't let bad emails ruin your sending reputation and waste your time and money. This tool will clean your mailing lists and increase deliverability rate up to 99%.</p>
                        <button>try for free</button>
                        <p>To get up to 1,000 free email verifications.</p>
                    </div>
                </Col>
                <Col className="justify-content">
                    <div>
                        <Form.Control type="text" placeholder="Normal text" />
                        <Button>Submit</Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className='text-center'>
                    <p>See our reviews on </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src={firstTestimonial} alt="" />
                </Col>
                <Col>
                    <img src={secondTestimonial} alt="" />
                </Col>
                <Col>
                    <img src={thirdTestimonial} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default HeroSection;
