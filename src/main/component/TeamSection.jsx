import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import OneImg from '../../assets/team/1-3-1.jpg'
import twoImg from '../../assets/team/2-3-1.jpg'
import threeImg from '../../assets/team/3-3-1.jpg'
import fourImg from '../../assets/team/4-3-1.jpg'

const TeamSection = () => {
    return (
        <Container>
            <Row>
                <h1>Meet our experts always ready to help you</h1>
            </Row>
            <Row>
                <Col>
                    <div>
                        <img src={OneImg} alt="" />
                        <h4>William James</h4>
                        <h6>Co-Founder</h6>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={twoImg} alt="" />
                        <h4>Sarah Taylor</h4>
                        <h6>Team Lead</h6>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={threeImg} alt="" />
                        <h4>Emma Ava</h4>
                        <h6>Mobile Developer</h6>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={fourImg} alt="" />
                        <h4>   John Trent</h4>
                        <h6>Marketing Manager</h6>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default TeamSection;