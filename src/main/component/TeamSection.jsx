import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import teamdata from './fackdata/teamdata';

const TeamSection = () => {
    const [ fetchTeamDatas , setFetchTeamDatas ] = useState([])

    useEffect(()=>{
        setFetchTeamDatas(teamdata)
    },[])
    console.log( fetchTeamDatas )

    return (
        <Container>
            <Row>
                <h1>Meet our experts always ready to help you</h1>
            </Row>
            <Row>
                {
                    fetchTeamDatas?.map( fetchTeamData =>  <Col key={ fetchTeamData?.id }>
                        <div>
                            <img src={ fetchTeamData?.img } alt="" />
                            <h4>{ fetchTeamData?.name }</h4>
                            <h6>{ fetchTeamData?.designation }</h6>
                        </div>
                    </Col> )
                }
            </Row>
        </Container>
    );
};

export default TeamSection;