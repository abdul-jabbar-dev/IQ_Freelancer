import React from 'react';
import { Col, Container, Form, Row, Button, Card } from 'react-bootstrap';
// import { Button } from 'react-bootstrap/Button';
import firstTestimonial from '../../assets/hero-testimonial/trustpilot1.png'
import secondTestimonial from '../../assets/hero-testimonial/trustpilot1.png'
import thirdTestimonial from '../../assets/hero-testimonial/trustpilot1.png'
import './style.css'

const HeroSection = () => {
    return (
        <section className='hero-section'>
            <div className='bg-overlay'>
                <Container>
                    <Row>
                        <Col>
                            <div className='hero-section-inner'>
                                <h1>Get your mailing lists verified before every send</h1>
                                <p className='hero-section-slogan'>Don't let bad emails ruin your sending reputation and waste your time and money. This tool will clean your mailing lists and increase deliverability rate up to 99%.</p>
                                <button className='regular-btn'>try for free</button>
                                <p className='hero-section-action-text pt-3'>To get up to 1,000 free email verifications.</p>
                            </div>
                        </Col>
                        <Col className="justify-content-center pt-5">
                            <div className="hero-section-card">
                                <Card body className='p-3'>
                                    <Form.Control type="text" placeholder="Feel Free Search" className='form-control mb-3'/>
                                    <button className='regular-btn'>Submit</button>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='text-center'>
                            <div className='mb-4'>
                             <span className='review-on-trustpilot'>See our reviews on  <i class="fas fa-star-half-alt"></i> Trustpilot</span>
                            </div>
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
            </div>
        </section>
    );
};

export default HeroSection;
