import React, { useContext } from 'react'
import Bar from '../compament/Bar'
import Button from '@mui/material/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import TextField from '@mui/material/TextField';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { Navigate, useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import { useState } from 'react';
const Login = () => {
    const [user,setUser] =useState({})
    const [inputs,setInputs] = useState({
        email: "",
        password: ""
    })
    const [err, setErr] = useState(null);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    // const { login } = useContext(AuthContext);
    axios.defaults.withCredentials = true;
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3333/login", inputs);
            if(err){
                alert('login failed')
                
            }
            else{
                alert('login success')
                
            }    
        } catch (err) {
          setErr(err.response.data);
          alert('faild')
        }
        
    };
    
    return (
        <div>
            
            <Container fluid  className=' p-5 '>
                <div className='d-flex justify-content-center'>
                    <p className="fs-1">Login</p>
                </div>
                <Box className='m-5' component="form" noValidate  sx={{ mt: 1 }} >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleChange}
                    />
                    <Row className="align-items-center m-5 d-flex justify-content-center">
                        <Col xs lg="2"  >
                            <Button className='bg-secondary'  type="submit" fullWidth variant="contained"  sx={{ mt: 3, mb: 2 }} onClick={handleLogin}>
                                <p>Login</p>
                            </Button>
                        </Col>
                        <Col className="align-items-center" md="auto">
                            <p>or</p>
                        </Col>
                        <Col xs lg="2">
                            <Button href='/register' className='bg-secondary' fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                <p>New user</p>
                            </Button>
                        </Col>
                    </Row>
                </Box>
                
            </Container>
            
            
        </div>
    )
}
  


export default Login