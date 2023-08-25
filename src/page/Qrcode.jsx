import React from 'react'
import Bar from '../compament/Bar'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const Qrcode = () => {
  const { id }  = useParams();
  const [user ,setUser] = useState([]);
    const getdata = async ()=>{
        try{
            const response = await axios.get(`http://localhost:3333/profile/${id}`);
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
      <Bar/>
      <Container>
          {users.map((users,key4)=>
            <div key={key4}>
                <p>ชำระเงิน</p>
                <p1>จำนวนที่ต้องชำระ :</p1>
            </div>
          )}
          
      </Container>
    </div>
  )
}

export default Qrcode
