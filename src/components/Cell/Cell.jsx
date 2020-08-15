import React from 'react';
import Col from 'react-bootstrap/Col';
import { Button } from 'ui-neumorphism';
import styles from './Cell.module.css';

function Square(props) {
  const { x, y, board, click } = props;

  return (
    <Col>
      <Button size="large" onClick={() => click(board, x, y)} className={`${styles.cell} m-2`}>
        <span className="material-icons">help_outline</span>
      </Button>
    </Col>
  );
}

export default Square;
