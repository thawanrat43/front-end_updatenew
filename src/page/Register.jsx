import React from 'react'
import Bar from '../compament/Bar'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import TextField from '@mui/material/TextField';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { useState } from 'react';
import axios from "axios"
import {useNavigate} from "react-router-dom"
const Register = () => {
    const [inputs,setInputs] = useState({
        username: "",
        email: "",
        password: "",
        fname: "",
        lname: "",
        phonenum: "",
    })
    const [err, setErr] = useState(null);

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
  
    const handleClick = async (e) => {
        e.preventDefault();
    
        try {
          await axios.post("http://localhost:3333/register", inputs);
        } catch (err) {
          setErr(err.response.data);
          console.log(err)
        }
        if(err){
            alert('register failed')
            
        }
        else{
            alert('login success')
            window.location ='/login'
        }
    };
    
    
    // const [fname,setFName] = useState("");
    // const [lname,setLName] = useState("");
    // const [email,setEmail] = useState("");
    // const [username,setUsername] = useState("");
    // const [password,setPassword] = useState("");
    // const [phonenum,setPhonenum] = useState("");
    // const [file,setFile] = useState("");
    // const history = useNavigate();

    // const setdata = (e)=>{
    //     setFName(e.target.value)
    //     setLName(e.target.value)
    //     setEmail(e.target.value)
    //     setUsername(e.target.value)
    //     setPassword(e.target.value)
    //     setPhonenum(e.target.value)
    // }
    
    // const setimgfile = (e)=>{
    //     setFile(e.target.files[0])
    // }

    // const addUserData = async(e)=>{
    //     e.preventDefault();

    //     var formData = new FormData();
    //     formData.append("photo",file)
    //     formData.append("fname",fname);
    //     formData.append("lname",lname);
    //     formData.append("email",email);
    //     formData.append("password",password);
    //     formData.append("username",username);
    //     formData.append("phonenum",phonenum);
    //     const config = {
    //         headers:{
    //             "Content-Type":"multipart/form-data"
    //         }
    //     }

    //     const res = await axios.post("http://localhost:3333/register",formData,config );
       
    //     if(res.data.status == 201){
    //         history("/")
    //     }else{
    //         console.log("error")
    //     }
    // }
    // function handleChange(e) {
    //     console.log(e.target.files);
    //     setFile(URL.createObjectURL(e.target.files[0]));
    // }
    // const handleSubmit = (event) => {
    //         event.preventDefault();
    //         const data = new FormData(event.currentTarget);
    //         const jsondata = {
    //             email: data.get('email'),
    //             password: data.get('password'),
    //             fname: data.get('fname'),
    //             lname: data.get('lname'),
    //             username : data.get('username'),
    //             phonenum : data.get('phonenum')
                

    //         };

    //         fetch("http://localhost:3333/register", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(jsondata),
    //         })
    //         .then(response => response.json()) 
    //         .then(data => {
    //             if (data.status === 'ok'){
    //                 alert('register success')
                    

    //             }
    //         })      
    //         .catch ((error) => {
    //         console.error("Error:", error);
                
    //         });
    // }
    return (
        <div>
            <Container fluid  className=' p-5 ' >
                <div className='d-flex justify-content-center'>
                    <p className="fs-1" >Register</p>
                </div>
                <Box component="form" noValidate sx={{ mt: 1 }} >
                <Row>
                        <Col>
                            <TextField
                            required
                            fullWidth
                            id="username"
                            label="ชื่อผู้ใช้"
                            name="username"
                            autoComplete="username"
                            onChange={handleChange}
                            />  
                        </Col>
                        
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <TextField
                            name="fname"
                            required
                            fullWidth
                            id="fname"
                            label="ชื่อ"
                            autoComplete="fname"
                            onChange={handleChange}
                            />
                        </Col>
                        <Col>
                            <TextField
                            required
                            fullWidth
                            id="lname"
                            label="นามสกุล"
                            name="lname"
                            autoComplete="lname"
                            onChange={handleChange}
                            />
                        </Col>      
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <TextField
                            required
                            fullWidth
                            id="phonenum"
                            label="หมายเลขโทรศัพท์"
                            name="phonenum"
                            autoComplete="phonenum"
                            onChange={handleChange}
                            />
                        </Col>
                        
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            onChange={handleChange}
                            />
                        </Col>
                        
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <TextField
                            required
                            fullWidth
                            name="password"
                            label="รหัสผ่าน"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                            onChange={handleChange}
                            />
                        </Col> 
                    </Row>
                    <br/>
                    {/* <Row>
                        <Col className='d-flex justify-content-center '>
                            <div className="d-flex justify-content-center m-2">
                                <img src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg"
                                className="rounded-circle" alt="example placeholder" style={{width: 50  }} />
                            </div>
                            <div className="d-flex justify-content-center m-2">
                                <div className="btn  btn-rounded bg-secondary" style={{width: 120 , height :50}} variant="contained">
                                    <label className="form-label text-white m-1" htmlFor="customFile2">Choose file</label>
                                    <input type="file" className="form-control d-none" id="customFile2" name='photo' onChange={setimgfile}/>
                                    <label className="form-label text-white m-1 "  >Choose file</label>
                                    <input type="file" className="form-control d-none" id='customFile2' name='photo' onChange={setimgfile} />
                                </div>
                            </div>
                        </Col>
                    </Row> */}
                    <Row className=" m-2 d-flex justify-content-center">
                        <Col xs lg="2">
                            <Button href='/' className='bg-secondary text-white' type="submit" fullWidth variant="contained" onClick={handleClick} sx={{ mt: 3, }}>
                            <p className='m-2'>Register</p> 
                            </Button>
                        </Col>
                    </Row>
                    <Row >
                        <Col className='d-flex justify-content-center'>
                            <Link href="/" variant="body2">
                            Already have an account? Sign in
                            </Link>
                        </Col>
                        
                    </Row>
                </Box>
            </Container>
        </div>
    )
}

export default Register

