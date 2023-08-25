import React from 'react'
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
import { useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const Finish = () => {
    const { id }  = useParams();
    const [user ,setUser] = useState([]);
        const getdata = async ()=>{
            try{
                const response = await axios.get(`http://localhost:3333/finish/${id}`);
                setUser(response.data);
            } catch (err) {
                console.log(err);
            }
        }
        useEffect(() => {
                
            getdata();
        
        }, []);
    return (
        <div>
            <Barprofile/>
            <Container>
                <p>ชำระเงินเสร็จสิ้น</p>
                {users.map((users,key4)=>
                <Row className="align-items-center m-5">

                    <Col xs lg="4">
                        <Link to={`/${users.idhistory}`} >
                            <Button variant="secondary" size="lg">
                                <p>ไปหน้าตรวจประวัติ</p>
                            </Button>
                        </Link>
                        
                    </Col>
                    <Col xs lg="4">
                        <Link to={`/pagestatus/${users.idhistory}`} >
                            <Button variant="secondary" size="lg">
                                <p>ไปหน้าสถานะการตรวจสอบ</p>
                            </Button>
                        </Link>
                        
                    </Col>
                </Row>
                )}
            </Container>
        </div>
    )
}

export default Finish