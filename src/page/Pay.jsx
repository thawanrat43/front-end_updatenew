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
const Pay = () => {
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
        <Container className='m-5 p-5'>
            <p>ช่องทางการชำระเงิน</p>
            <div>
            {user.map((users,key4)=>
              <div key={key4}>
                <Link to={`/qrcode/${users.id}`}>
                  <Button className=''  variant="primary" size="lg">
                    <div className='mt-1 d-flex'>
                      
                      <p className='ml-3 mt-1 bi bi-qr-code-scan'>  QRcode</p>
                    </div>
                    
                  </Button>
                </Link>
              </div>
            )}
                
            </div>
        </Container>
    </div>
  )
}

export default Pay
