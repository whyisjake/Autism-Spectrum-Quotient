import React from 'react'
import PropTypes from 'prop-types'
import { agree } from '../constants/questions';

function Agreeble(number) {
  const agreeable = agree.indexOf(number) > 0;
  return (agreeable) ? 'agree' : 'disagree';
}

const Row = (props) => {
  const number = props.index + 1;
  // const agreeable = agree.indexOf(number) > 0;
  // const disagreeable = disagree.indexOf(number) > 0;
  const increment = props.increment;
  // const decrement = props.decrement;

  return (
    <tr className={Agreeble(number)}>
      <td valign="top" align="right">{number}</td>
      <td align="left" valign="top">{props.question}</td>
      <td align="left" valign="top"><input type="radio" name={`answer_${number}`} value="xa" onClick={null} /></td>
      <td align="left" valign="top"><input type="radio" name={`answer_${number}`} value="sa" onClick={null} /></td>
      <td align="left" valign="top"><input type="radio" name={`answer_${number}`} value="sd" onClick={increment} /></td>
      <td align="left" valign="top"><input type="radio" name={`answer_${number}`} value="xd" onClick={increment} /></td>
    </tr>
  )
}

Row.propTypes = {
  // decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired
}

export default Row
