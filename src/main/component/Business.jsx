import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import iconImg from '../../assets/webandmobile/icon1.png'
import sectionImg from '../../assets/webandmobile/seo-section-2-1.png'

const Business = () => {
    return (
        <section className='business-section py-5'>
            <Container>
                <Row>
                    <Col>
                        <img src={iconImg} alt="" />
                        <h1 className='py-3 business-hedding'>Grow your business with our seo agency</h1>
                        <p className='business-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                        <div className='py-3'>
                            <span className='feature-box me-3'> <i className="fas fa-star icon-design icon-design me-2 icon-hover"></i> Content Marketing</span>
                            <span className='feature-box'>  <i className="fas fa-star icon-design icon-design me-2 icon-hover"></i> Social Marketing</span>
                        </div>
                        <div className='py-3'>
                            <span className='feature-box me-3'>  <i className="fas fa-star icon-design icon-design me-2 icon-hover"></i> App Development</span>
                            <span className='feature-box'>  <i className="fas fa-star icon-design icon-design me-2 icon-hover"></i> Web Development</span>
                        </div>
                        <div className='py-3 mb-5'>
                            <span className='feature-box me-3'> <i className="fas fa-star icon-design icon-design me-2 icon-hover"></i> PPC Advertising	</span>
                            <span className='feature-box'> <i className="fas fa-star icon-design icon-design me-2 icon-hover"></i> Social Media Promotion</span>
                        </div>
                        <div>
                            <button className='regular-btn'>Learn More</button>
                        </div>
                    </Col>
                    <Col>
                        <img src={sectionImg} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Business;