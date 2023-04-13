import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import iconImg from '../../assets/webandmobile/icon1.png'
import sectionImg from '../../assets/webandmobile/seo-section-2-1.png'

const Business = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <img src={iconImg} alt="" />
                    <h1>Grow your business with our seo agency</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    <div>
                        <span>Content Marketing</span>
                        <span>Social Marketing</span>
                    </div>
                    <div>
                        <span> App Development</span>
                        <span> Web Development</span>
                    </div>
                    <div>
                        <span>PPC Advertising	</span>
                        <span>Social Media Promotion</span>
                    </div>
                    <div>
                        <Button>Learn More</Button>
                    </div>
                </Col>
                <Col>
                    <img src={sectionImg} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default Business;