import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Jumbotron from '../../components/Jumbotron/Jumbotron';

function SplashScreen() {
  return (
    <Container className="h-100">
      <Row className="h-100">
        <Jumbotron />
      </Row>
    </Container>
  );
}

export default SplashScreen;
