import React from 'react';
import PropTypes from 'prop-types';
import { Card, H4 } from 'ui-neumorphism';

const propTypes = {
  title: PropTypes.string.isRequired,
};

function PlayerHeader(props) {
  const { title } = props;

  return (
    <Card className="my-4 p-3 w-100 d-flex align-items-center justify-content-center">
      <H4 className="text-uppercase">{title}</H4>
    </Card>
  );
}

PlayerHeader.propTypes = propTypes;

export default React.memo(PlayerHeader);
