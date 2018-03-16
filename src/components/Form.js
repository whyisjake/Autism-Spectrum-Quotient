import React from 'react'
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';
import Rows from './Rows';

const Form = ({ increment, incrementIfOdd, decrement, counter }) => (
  <form onSubmit={this.handleSubmit}>
    <table>
      <TableHeader />
      <Rows increment={increment} incrementIfOdd={incrementIfOdd} decrement={decrement} counter={counter} />
    </table>
    <input type="submit" value="Compile Score" />
  </form>
)

Form.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
}


export default Form
