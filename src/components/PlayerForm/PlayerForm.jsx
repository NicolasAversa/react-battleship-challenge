import React from 'react';
import Col from 'react-bootstrap/Col';
import { TextField, Button, Switch } from 'ui-neumorphism';

function PlayerForm(props) {
  const { click, change, toggle, canPlay } = props;
  return (
    <Col xs={6}>
      <Switch
        onChange={(event) => toggle(event)}
        color="var(--error)"
        label="Horizontal positioning"
      />
      <TextField label="Text" className="w-100" onChange={(event) => change(event)} />
      <Button disabled={!canPlay} onClick={() => click()} block>
        START GAME
      </Button>
    </Col>
  );
}

export default React.memo(PlayerForm);
