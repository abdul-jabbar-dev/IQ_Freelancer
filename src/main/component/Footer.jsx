import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <section className='footer-section'>
            <Container>
                <Row>
                    <Col xs={6}>
                        <h2>Company Name</h2>
                        <p>Keeping your sending reputation is crucial for your email marketing campaign. By detecting whether the mailbox you are going to send to is ready to receive email, you can get high deliverability rate and gain your reputation.</p>
                    </Col>
                    <Col xs={3}>
                        <h3>Sevices</h3>
                        <ul>
                            <li>FAQs</li>
                             <li>About Us</li>
                             <li>Contact Us</li>
                             <li>Our Blog</li>
                        </ul>
                    </Col>
                    <Col xs={3}>
                        <h4>Links</h4>
                        <ul>
                            <li>About Us</li>
                            <li>Our Features</li>
                            <li>Our Team</li>
                            <li>Our Pricing</li>
                        </ul>
                    </Col>
                </Row>
                <hr className='mt-3'/>
                <Row>
                    <Col>
                        <div className='pt-4'>
                            <h5>MailVeri logo light</h5>
                            <h5>2023 © MailVeri  Verify before send</h5>
                        </div>
                    </Col>

                    <Col>
                    <div className='pt-4'>
                        <h5 className=''>Social Icons</h5>
                        <ul className=''>
                            <li className='inline me-3'>skype</li>
                            <li className='inline me-3'>fb</li>
                            <li className='inline me-3'>ins</li>
                            <li className='inline me-3'>in</li>
                        </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Footer;