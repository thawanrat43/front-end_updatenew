import React from 'react'
import Bar from '../compament/Bar'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Barprofile from '../compament/Barprofile';
import { useEffect,useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
const Code = () => {
    const { userid }  = useParams();
    const [oldpassword,setoldpassword] = useState("");
    const [newpassword,setnewpassword] = useState("");
    const [conpassword,setconpassword] = useState("");
    const [user ,setUser] = useState([]);
    const updatepassword=async ()=>{
        try{
            await axios.post(`http://localhost:3333/code/${userid}`,
            {
                oldpassword: oldpassword,
                newpassword: newpassword,
                conpassword: conpassword
            }
            )
            .then((response) => {
            if (response.data.error) {
                alert(response.data.error);
            }
            });
        }catch (err) {
            console.log(err);
        }
         
    };
    const getdata = async ()=>{
        try{
            const response = await axios.get(`http://localhost:3333/profile/${userid}`);
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
            <Container>
                {user.map((users,key)=>(
                    <div key={key} className='d-flex p-5'>
                        <Card  style={{ width: '18rem'  }} className='m-5'>  
                                <Card.Body >
                                    <Row>
                                    <Col  xs={6} md={4}> 
                                        <Image src={"http://localhost:3333/"+users.profilepic}roundedCircle style={{width : '16rem'}} />
                                    </Col>
                                    </Row>
                                    <Row className='p-3'>
                                        <Link to={`/profile/${userid}`}>
                                            <Button className='bg-secondary'  type="submit" fullWidth variant="contained"  sx={{ mt: 3 }}>
                                                ประวัติส่วนตัว
                                            </Button>
                                        </Link>
                                    </Row>
                                    <Row className='p-3'>
                                        <Link to={`/code/${userid}`}>
                                            <Button className='bg-secondary text-wh'  type="submit" fullWidth variant="contained"  sx={{  mb: 2 }}>
                                                
                                                เปลี่ยนรหัสผ่าน
                                            </Button>
                                        </Link>
                                    </Row>
                                    
                                </Card.Body>
                            
                        </Card>
                        <div className='pl-5'>
                            <div className='mb-4 mt-5'>
                                <h2 >เปลี่ยนรหัสผ่าน</h2>
                            </div>        
                            <div>
                                
                                <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="รหัสผ่านเดิม"
                                type="password"
                                
                                onChange={(e) => {
                                    setoldpassword(e.target.value);
                                }}
                                />
                                <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="newpassword"
                                label="รหัสผ่านใหม่"
                                type="password"
                                
                                onChange={(e) => {
                                    setnewpassword(e.target.value);
                                }}
                                />
                                <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="newpassword"
                                label="ยืนยันรหัสผ่าน"
                                type="password"
                                
                                onChange={(e) => {
                                    setconpassword(e.target.value);
                                }}
                                />
                            </div>
                            <Button className='bg-secondary'  type="submit" fullWidth variant="contained"  sx={{ mt: 3, mb: 2 }} onClick={updatepassword}>
                                    <p>ยีนยัน</p>
                            </Button>
                        </div>
                        
                    </div>
                ))}
            </Container> 
                
        </div>
    )
}

export default Code
