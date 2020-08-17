import React from 'react';
import Col from 'react-bootstrap/Col';
import { TextField, Button, Switch } from 'ui-neumorphism';

function PlayerForm(props) {
  const { change } = props;
  return (
    <Col xs={6}>
      <Switch color="var(--error)" label="Horizontal positioning" />
      <TextField label="Text" className="w-100" onChange={(event) => change(event)} />
      <Button block>START GAME</Button>
    </Col>
  );
}

export default PlayerForm;
