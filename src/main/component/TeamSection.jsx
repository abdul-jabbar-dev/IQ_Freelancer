import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import teamdata from './fackdata/teamdata';

const TeamSection = () => {
    const [fetchTeamDatas, setFetchTeamDatas] = useState([])

    useEffect(() => {
        setFetchTeamDatas(teamdata)
    }, [])
    console.log(fetchTeamDatas)

    return (
        <section className='team-section'>
            <Container>
                <Row>
                    <Col><h1 className='team-section-heading pb-5'>Meet our experts always ready to help you</h1></Col>
                </Row>
                <Row>
                    {
                        fetchTeamDatas?.map(fetchTeamData => <Col key={fetchTeamData?.id}>
                            <div className='text-center team-section-inner'>
                                <img src={fetchTeamData?.img} alt="" className='img-fuied'/>
                                <h4 className='team-section-name'>{fetchTeamData?.name}</h4>
                                <h6 className='team-section-designation'>{fetchTeamData?.designation}</h6>
                            </div>
                        </Col>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default TeamSection;