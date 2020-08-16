import React from 'react';
import Col from 'react-bootstrap/Col';
import { Card, CardContent, CardAction, H3, Body2 } from 'ui-neumorphism';

function Jumbotron() {
  return (
    <Col xs={12} className="h-100 d-flex align-items-center justify-content-center">
      <Card rounded className="w-75 p-5">
        <CardContent>
          <H3 className="text-center">VICTORY</H3>
          <Body2>But we cant be so sure...</Body2>
        </CardContent>
        <CardAction>dfb</CardAction>
      </Card>
    </Col>
  );
}

export default Jumbotron;
