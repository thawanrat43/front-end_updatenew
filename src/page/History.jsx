import React from 'react'
import Bar from '../compament/Bar'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './Style.css';

const History = () => {
    const headlineStyle = {
        backgroundColor: "#D9D9D9",
        lineHeight: "1.5",
        border: "none",
        color: "black"
    }
    return (
        <div>
            <Container >
                <p className='m-5 fs-2'>ประวัติ </p>
                <div  style={headlineStyle} className=' p-5 m-5' >
                    <div className='mb-4 pl-5' >
                        <Row className='fs-6' style={{color: "#708090"}}>
                            <Col>
                                <p2>
                                    ชื่อ-นามสกุล
                                </p2>
                            </Col>
                            <Col>
                                <p2>
                                    หมายเลขบัตรประจำตัวประชาชน
                                </p2>
                            </Col>
                            <Col>
                                <p2>
                                    วันเดือนปีเกืด
                                </p2>
                            </Col>
                        </Row>
                        <Row className='fs-5'>
                            <Col>
                                <p3>
                                    นาย เอก วรรณยุกต์
                                </p3>
                            </Col>
                            <Col>
                                <p3>
                                    xxxxxxxxxxxxx
                                </p3>
                            </Col>
                            <Col>
                                <p3>
                                    xx-xx-xxxx
                                </p3>
                            </Col>
                        </Row>
                    </div>

                    <div className='mb-4 pl-5'>
                        <Row className='fs-6' style={{color: "#708090"}}>
                            <Col>
                                <p2>
                                    บิดา
                                </p2>
                            </Col>
                            <Col>
                                <p2>
                                    มารดา
                                </p2>
                            </Col>
                            <Col>
                                <p2>
                                    ศาสนา
                                </p2>
                            </Col>
                        </Row>
                        <Row className='fs-5'>
                            <Col>
                                <p3>
                                    xxxxxxxxxxxxx
                                </p3>
                            </Col>
                            <Col>
                                <p3>
                                    xxxxxxxxxxxxx
                                </p3>
                            </Col>
                            <Col>
                                <p3>
                                    xxxxxxxxxxxxx
                                </p3>
                            </Col>
                        </Row>
                    </div> 

                    <div className='mb-4 pl-5'>
                        <Row className='fs-6' style={{color: "#708090"}}>
                            <Col>
                                <p2>
                                    ประวัติอาชญากร
                                </p2>
                            </Col>
                            <Col>
                                <p2>
                                    เครดิตบูโร
                                </p2>
                            </Col>
                            <Col>
                                <p2>
                                    คดีล้มละลาย
                                </p2>
                            </Col>
                        </Row>
                        <Row className='fs-5'>
                            <Col>
                                <p3>
                                    ไม่มี
                                </p3>
                            </Col>
                            <Col>
                                <p3>
                                    -
                                </p3>
                            </Col>
                            <Col>
                                <p3>
                                    -
                                </p3>
                            </Col>
                        </Row>
                    </div>

                    <div className='pl-5'>
                        <Row className='fs-6' style={{color: "#708090"}}>
                            <Col>
                                <p2>
                                    คดีอาญา
                                </p2>
                            </Col>
                            <Col>
                                <p2>
                                    global sanction
                                </p2>
                            </Col>
                            <Col>
                                <p2>
                                    อื่นๆ
                                </p2>
                            </Col>
                        </Row>
                        <Row className='fs-5'>
                            <Col>
                                <p3>
                                    -
                                </p3>
                            </Col>
                            <Col>
                                <p3>
                                    -
                                </p3>
                            </Col>
                            <Col>
                                <p3>
                                    -
                                </p3>
                            </Col>
                        </Row>
                    </div>    
                </div>
            </Container>
        </div>
    )
}

export default History