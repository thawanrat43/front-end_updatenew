import React,{useEffect, useState} from 'react'
import Bar from '../compament/Bar'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Barprofile from '../compament/Barprofile';
import { key } from 'localforage';
import { SettingsRemoteSharp } from '@mui/icons-material';
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { useContext } from "react";
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
const Profile = ({}) => {
    const [user,setuser] = useState([])
    // const [user,setuser] = useEffect([])
    const [openUpdate, setOpenUpdate] = useState(false);
    const { currentUser } = useContext(AuthContext);

    const userId = parseInt(useLocation().pathname.split("/")[2]);

    const { isLoading, error, data } = useQuery(["user"], () =>
        makeRequest.get("/users/find/" + userId).then((res) => {
        return res.data;
        })
    );

    const { isLoading: rIsLoading, data: relationshipData } = useQuery(
        ["relationship"],
        () =>
        makeRequest.get("/relationships?followedUserId=" + userId).then((res) => {
            return res.data;
        })
    );

    const queryClient = useQueryClient();

    return (
        <div>
            <Container >
                <div className='d-flex p-5'>
                    <Card style={{ width: '18rem'  }} className='m-5'>
                        <Card.Body>
                            <Row>
                            <Col xs={6} md={4}> 
                                <Image src="./public/10.webp" roundedCircle style={{width : '16rem'}} />
                            </Col>
                            </Row>
                            <Row className='p-3'>
                                <Button variant="secondary" size="lg">
                                    ประวัติส่วนตัว 
                                </Button>
                            
                            </Row>
                            <Row className='p-3'>
                                <Button variant="secondary" size="lg">
                                    เปลี่ยนรหัสผ่าน
                                </Button>
                            
                            </Row>
                            
                        </Card.Body>
                    </Card>
                    <div className='pl-5'>
                        <div className='mb-4 mt-5'>
                            <span>ประวัติส่วนตัว</span>
                        </div>
                        
                        <div>
                            <Row>
                                <Col>
                                    <Form.Control
                                            type="text"
                                            placeholder={user.username}
                                            aria-label="Disabled input example"
                                            disabled
                                            readOnly
                                    />
                                    
                                </Col>
                                
                            </Row>
                            <br/>
                            <Row>
                                <Col>
                                    <Form.Control
                                            type="text"
                                            placeholder={user.fname}
                                            aria-label="Disabled input example"
                                            disabled
                                            readOnly
                                            
                                    />
                                </Col>
                                <Col>
                                    <Form.Control
                                            type="text"
                                            placeholder={user.lanme}
                                            aria-label="Disabled input example"
                                            disabled
                                            readOnly
                                    />
                                </Col>
                                
                            </Row>
                            <br/>
                            <Row>
                                <Col>
                                    <Form.Control
                                            type="text"
                                            placeholder={user.phonenum}
                                            aria-label="Disabled input example"
                                            disabled
                                            readOnly
                                    />
                                    
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col>
                                    <Form.Control
                                            type="text"
                                            placeholder={user.email}
                                            aria-label="Disabled input example"
                                            disabled
                                            readOnly
                                    />
                                    
                                </Col>
                            </Row>
                            <br/>
                            {/* {userlist.map((val,key) =>{
                                return(
                                    <div>
                                        <p> ชื่อผู้ใช้ : {val.username}</p>
                                    </div>
                                )
                            })} */}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Profile