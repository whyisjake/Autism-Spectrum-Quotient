import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import { items } from '../constants/questions.js';

const Rows = ({increment, decrement}) => (

  <tbody>
    {
      items.map((object, i) => <Row increment={increment} decrement={decrement} question={object.question} key={i.toString()} index={i} />)
    }
  </tbody>
)

Rows.propTypes = {
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
}

export default Rows
