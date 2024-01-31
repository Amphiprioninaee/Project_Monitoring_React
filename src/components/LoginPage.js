import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const LoginPage = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6}>
          <h2>Login Page</h2>
          <p>This is a simple login page to demonstrate navigation.</p>
          {/* Your login form can be added here */}
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
