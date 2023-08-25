import React,{useEffect, useState} from 'react'
import Bar from '../compament/Bar'
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
import { useLocation, useParams,Link } from "react-router-dom";
import axios from "axios"
import {useNavigate} from "react-router-dom"
import Button from '@mui/material/Button';
const Adminuser = () => {
    const [user ,setUser] = useState([]);
    const getdata = async ()=>{
        try{
            const response = await axios.get(`http://localhost:3333/adminuser`);
            setUser(response.data);
        } catch (err) {
            console.log(err);
        }
    }
    console.log(user);
    useEffect(() => {
            
        getdata();
       
    }, []);
    const handleClick = async (e) => {

    };
    const headlineStyle = {
        backgroundColor: "#D9D9D9",
        lineHeight: "1.5",
        border: "none",
        color: "black"
    }
    return (
        <div>
            <Container fluid  className=' p-5 ' >
                <Row  className='d-flex m-4'>
                    <Col>
                        <p className="fs-1" >ผู้ใช้</p>
                    </Col>
                    <Col>
                        <Button className='bg-secondary' type="submit" fullWidth variant="contained" sx={{ mt: 3, }} onClick={handleClick}>
                            <p>เพิ่มผู้ใช้</p> 
                        </Button>
                    </Col>
                    <Col>
                        <Button className='bg-secondary' type="submit" fullWidth variant="contained" sx={{ mt: 3, }} onClick={handleClick}>
                            <p>ระงับผู้ใช้</p> 
                        </Button>
                    </Col>    
                </Row>
                {user.map((users,key)=>
                    <div key={key} >
                        <Link to={`/adminupdate/${users.id}`}>
                            <Row className='m-3 mt-5' >
                                <div style= { headlineStyle }>
                                    <Row className='mt-3 ml-5 '>
                                        <Col>
                                            <p>ชื่อผู้ใช้</p>
                                        </Col>
                                        <Col>
                                            <p>E-mail</p>
                                        </Col>
                                        <Col>
                                            <p>สถานะ</p>
                                        </Col>
                                    </Row>
                                    <Row className='ml-5 fs-5'>
                                        <Col>
                                            <p>{users.fname}  {users.lname}</p>
                                        </Col>
                                        <Col>
                                            <p>{users.email}</p>
                                        </Col>
                                        <Col>
                                            <p>ผู้ใช้ทั่วไป</p>
                                        </Col>
                                    </Row>
                                </div>

                            </Row>
                        </Link>
                        
                    </div>
                    
                )}
                    
            </Container>
        </div>
    )
}

export default Adminuser
