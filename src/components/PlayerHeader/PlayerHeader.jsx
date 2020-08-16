import React from 'react';
import Col from 'react-bootstrap/Col';
import { Card } from 'ui-neumorphism';

function PlayerHeader(props) {
  const { title } = props;

  return (
    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
      <Card
        className="my-4 p-3 w-100 d-flex align-items-center justify-content-center"
        width={100}
        height={100}
      >
        <h2>{title}</h2>
      </Card>
    </Col>
  );
}

export default PlayerHeader;
