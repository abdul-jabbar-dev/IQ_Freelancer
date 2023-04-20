import React, { useState } from 'react';
import { Accordion, Card, Col, Container, Row } from 'react-bootstrap';
import './style.css'

const FaqSection = () => {

    const [value, setValue] = useState(0)
    // const valueHandler = ( e ) =>{
    //     setValue( e.target.value )
    // }
    console.log(value)
    return (
        <section className="faq-section">
            <Container>
                <Row className='py-5'>
                    <Col xs={2}>
                        <ul className='text-center'>
                            <li onClick={() => setValue(0)} className={value == 0  ? `faq-section-li`: `py-4 pointer`}><i className="faq-icon pb-1 block  far fa-question-circle"></i>General Questions</li>
                            <li onClick={() => setValue(1)} className={ value ==  1 ? `faq-section-li`: `py-4 pointer`}><i className="faq-icon pb-1 block fas fa-dollar-sign"></i>Credits</li>
                            <li onClick={() => setValue(2)} className={value == 2  ? `faq-section-li`: `py-4 pointer`}><i className="faq-icon pb-1 block  fas fa-file-code"></i>Api</li>
                        </ul>
                    </Col>
                    <Col xs={10}>

                        {/* First Card */}
                        {value == 0 && <Card body>
                            <h4 className='card-title'>General Questions</h4>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header  className='custom-accordion .accordion-list'>What is the meaning of each status in the report?</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="card-body">
                                            <p className="mb-2">There are 7 statuses in <span className="text-primary">MailVeri</span> report:</p>
                                            <ul>
                                                <li className="mb-1"><span className="fw-bold text-success">VALID</span> is safe to send</li>
                                                <li className="mb-1"><span className="fw-bold text-danger">INVALID</span> is unsafe to send because mailbox does not exist or disabled, or MX records of this domain is not configured properly</li>
                                                <li className="mb-1"><span className="fw-bold text-info">DISPOSABLE</span> is risky to send because this is just temporary mailbox and will be deleted after few hours or days</li>
                                                <li className="mb-1"><span className="fw-bold text-info">ROLE_ACCOUNT</span> is risky to send because you don't know who will actually receive your email message</li>
                                                <li className="mb-1"><span className="fw-bold text-info">CATCH_ALL</span> is risky to send because the mailbox might not exist or might be delivered to someone else</li>
                                                <li className="mb-1"><span className="fw-bold text-info">FULL_INBOX</span> is risky to send because the mailbox can not receive any email more</li>
                                                <li className="mb-1"><span className="fw-bold text-muted">UNKNOWN</span> is what we can't verify after several tries, you are not charged and can try again at another time</li>
                                            </ul>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Which file types do you support?</Accordion.Header>
                                    <Accordion.Body>
                                        MailVeri supports Excel files as well as CSV and text files. Files are processed line by line. Lines with no email or wrong syntax will be ignored.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>What is the maximum upload file size or maximum allowed number of emails per list?</Accordion.Header>
                                    <Accordion.Body>
                                        The maximum filesize is 100MB. The maximum number of emails per list is 1,000,000.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Do I need to re-verify the list? How often should I do it?</Accordion.Header>
                                    <Accordion.Body>
                                        It depends on your business. Normally you need to run once a month. But you should shorten the period to 15-day or 7-day if your listing is going bad quickly.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Do you send any email while verifying the list?</Accordion.Header>
                                    <Accordion.Body>
                                        No, we don't. MailVeri always follows anti-spam laws. Actually sending emails costs us more what we can earn from your verification.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card>}

                        {/* Second Card */}
                        {value == 1 && <Card body>
                            <h4 className='card-title'>Credits</h4>
                            <Accordion defaultActiveKey="0" className='pt-3'>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Do you offer free credits?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes. If you register an account and confirm your email, you will get up to 1,000 free credits. You can earn up to 10,000 bonus credits if you help to spread the words on social platforms. Credits never expire.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Which payment do you accept?</Accordion.Header>
                                    <Accordion.Body>
                                        MailVeri accepts payments via Credit cards and PayPal. We're adding more payment gateways.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Can I get a refund?</Accordion.Header>
                                    <Accordion.Body>
                                        No. Currently we don't support refund. However, you have up to 1,000 free credits and up to 10,000 bonus credits to test MailVeri before making any purchase.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Do you have subscription packages?</Accordion.Header>
                                    <Accordion.Body>
                                        Currently, MailVeri just supports pay-as-you-go payments. We're listening feedback from customers to build subscription packages.
                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>
                        </Card>}

                        {/* Third Card  */}
                        {value == 2 && <Card body>
                            <h4 className='card-title'>API</h4>
                            <Accordion defaultActiveKey="0" className='pt-3'>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className='custom-accordion .accordion-list'>Do you support libs in programming languages such as Python, PHP, ...?</Accordion.Header>
                                    <Accordion.Body>
                                        Not yet. Currently MailVeri just supports HTTP APIs. You can use cURL or make HTTP requests to MailVeri API server in any programming languages.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Does API support all features same as web app?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes. You can upload, verify, track progress, cancel, get results and download the files same as what you can do on web app. You can also query your remaining credits via API.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Does API support bulk verification up to a million emails?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes. MailVeri uses same platform for both web app and API, so you can use bulk verification without any issue. You'll see your list on the web dashboard which marked as API
                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>
                        </Card>}

                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FaqSection;