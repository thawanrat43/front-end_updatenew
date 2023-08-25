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
import Modal from '../compament/Modal';
const admindelete = () => {
    const [user ,setUser] = useState([]);
    const [userid,setuserid] = useState ([]);
    const [modalOpen, setModalOpen] = useState(false);
    const getdata = async ()=>{
        try{
            const response = await axios.get(`http://localhost:3333/adminuser`);
            setUser(response.data);
        } catch (err) {
            console.log(err);
        }
    }
    const deletedata = async () => {
        try{
            await axios.post(`http://localhost:3333/profile/${userid}`
            )
            .then((response) => {
            if (response.data.error) {
                alert(response.data.error);
            }
            });
        }catch (err) {
            console.log(err);
        }
    }
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
                        <Button href='/adminregister' className='bg-secondary' type="submit" fullWidth variant="contained" sx={{ mt: 3, }} onClick={handleClick}>
                            <p>เพิ่มผู้ใช้</p> 
                        </Button>
                    </Col>
                    <Col>
                        <Button href='/admindelete' className='bg-secondary' type="submit" fullWidth variant="contained" sx={{ mt: 3, }} onClick={handleClick}>
                            <p>ระงับผู้ใช้</p> 
                        </Button>
                    </Col>    
                </Row>
                {user.map((users,key2)=>
                    <div key={key2} >
                         <Row className='m-3 mt-5' >
                            
                                <Col style= { headlineStyle }>
                                    <Link to={`/adminupdate/${users.id}`} className='text-black'>
                                        <Row className='mt-3 ml-5 '>
                                            <Col>
                                                <p>ชื่อผู้ใช้</p>
                                            </Col>
                                            <Col className='mr-5 pr-5'>
                                                <p>E-mail</p>
                                            </Col>
                                            <Col className='mr-5 pr-5'>
                                                <p>สถานะ</p>
                                            </Col>
                                            
                                        </Row>
                                        <Row className='ml-5 fs-5 '>
                                            <Col>
                                                <p>{users.fname}   {users.lname}</p>
                                            </Col>
                                            <Col >
                                                <p>{users.email}</p>
                                            </Col>
                                            <Col className='ml-5 pl-5 '>
                                                <p>ผู้ใช้ทั่วไป</p>
                                            </Col>
                                            
                                        </Row>
                                    </Link>   
                                   
                                    
                                </Col>
                                <Col className='d-flex justify-content-end   fs-5 mt-5 ml-3' xs lg="1" >
                                   
                                    <Link to={`/delete/${users.id}`}>
                                        <Button  className="bi bi-trash-fill openModalBtn" >
                                        </Button>
                                    </Link>
                                    
                                
                                </Col>
                                
                            
                        </Row>
                        
                    </div>
                    
                )}
                    
            </Container>
        </div>
    )
}

export default admindelete
