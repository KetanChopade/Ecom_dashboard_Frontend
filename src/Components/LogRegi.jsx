import React,{useEffect, useState} from "react";
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'

const LogRegi = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    useEffect (()=> {
      const auth = localStorage.getItem('user');
      if (auth) {
        navigate('/')
      }
    })
    const collectData = async ()=> {
        let result = await fetch('http://localhost:5000/register', {
          method:'post',
          body:JSON.stringify({name,email,password}),
          headers:{
            'Content-Type': 'application/json'
          },
        });
        result =await result.json()
        console.log(result)
        if (result){
          localStorage.setItem("user",JSON.stringify(result.result));
          localStorage.setItem("token",JSON.stringify(result.auth));
          navigate('/')

        }
    }



  return (
    <div className="LogRegi">
    <Container>
        <Row className="my-5 d-flex justify-content-center align-items-center">
          <Col md={6} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Register
                  </h2>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">Name</Form.Label>
                        <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                      </Form.Group>
                      
                      <div className="d-grid">
                        <Button onClick={collectData} >
                          Create Account
                        </Button>
                      </div>

                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LogRegi;
