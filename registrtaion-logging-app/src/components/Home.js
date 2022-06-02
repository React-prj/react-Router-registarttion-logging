import React from 'react'
import { useNavigate } from "react-router-dom";

import { Button, Container, Row, Col } from 'react-bootstrap';

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Container fluid="md">
        <Row>
          <Col>
            <Button  onClick={() => navigate("/register")}  variant="secondary" size="lg">Register</Button>{' '}
          </Col>
          <Col>
            <Button onClick={() => navigate("/login")}   variant="secondary" size="lg">Login</Button>{' '}
          </Col>
        </Row>
      </Container>
      </div>
  )
}

export default Home