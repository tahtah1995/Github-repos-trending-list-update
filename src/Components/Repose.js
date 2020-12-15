import React from 'react'
import {Card} from 'react-bootstrap'
import {Container, Row, Col} from 'react-bootstrap'
import moment from 'moment'

const Repose = ({

                    name,
                    description,
                    starsCount,
                    openIssuesCount,
                    UserName,
                    avatarUrl,
                    submitTime
                }) => {
    return (
        

        
        <Card className="card-main">
            <Card.Img variant="top" src={`${avatarUrl}`} style={{width: '125px', height: '125px'}}/>
            <Card.Body>
                <div>
                    <Container fluid="md">
                        <Row>
                            <Col><Card.Title style={{ wordBreak: "break-all"}}>{`${name}`}</Card.Title></Col>
                        </Row>
                        <Row>
                            <Col> {`${description}`}</Col>
                        </Row>
                        <Row style={{ marginTop: '1em' }}>
                            <Col className="counts">
                                <span style={{border: '1px solid'}}>Stars: {`${starsCount}`}</span>
                                <span style={{border: '1px solid', marginLeft: 10}}>Issues: {`${openIssuesCount}`}</span>
                            </Col>
                            <Col>
                                <span>Submitted {moment(submitTime).fromNow()} by</span>
                                <span><strong> {UserName} </strong></span>
                            </Col>
                        </Row>
                    </Container>

                </div>

            </Card.Body>
        </Card>

    );

}

export default Repose;
