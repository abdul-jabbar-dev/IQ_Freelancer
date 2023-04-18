import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <section className='footer-section'>
            <Container>
                <Row>
                    <Col xs={6}>
                        <h4>Company Name</h4>
                        <p>Keeping your sending reputation is crucial for your email marketing campaign. By detecting whether the mailbox you are going to send to is ready to receive email, you can get high deliverability rate and gain your reputation.</p>
                    </Col>
                    <Col xs={3}>
                        <h4>Sevices</h4>
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
                <Row>
                    <Col>
                        <h5>MailVeri logo light</h5>
                        <h5>2023 © MailVeri  Verify before send</h5>
                    </Col>

                    <Col>
                        <h5 className='text-right'>Social Icons</h5>
                        <ul className='flex justify-content-between'>
                            <li className='inline'>skype</li>
                            <li className='inline'>fb</li>
                            <li className='inline'>ins</li>
                            <li className='inline'>in</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Footer;