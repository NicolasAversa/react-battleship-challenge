import React from 'react';
// Redux setup
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// Redux actions
import { changePlayerName } from '../../redux/actions';
// Custom components
import Board from '../../components/Board/Board';
import PlayerForm from '../../components/PlayerForm/PlayerForm';

const propTypes = {
  board: PropTypes.objectOf(PropTypes.array),
  playerData: PropTypes.objectOf(PropTypes.object).isRequired,
  changePlayerName: PropTypes.func.isRequired,
};

const defaultProps = {
  board: [],
};

function Start(props) {
  const { board, playerData } = props;

  const changeNameHandler = (event) => {
    props.changePlayerName(event.value);
  };

  const positionShipHandler = () => {};

  return (
    <Container className="h-100">
      <Row className="h-100 d-flex align-items-center">
        <Board
          board={board}
          click={positionShipHandler}
          playerName={`${playerData.name}'s board`}
          playableBoard
        />
        <PlayerForm change={changeNameHandler} />
      </Row>
    </Container>
  );
}

Start.propTypes = propTypes;
Start.defaultProps = defaultProps;

const mapStateToProps = (state) => ({
  board: state.board,
  playerData: state.playersData.playerData,
});

export default connect(mapStateToProps, { changePlayerName })(Start);
