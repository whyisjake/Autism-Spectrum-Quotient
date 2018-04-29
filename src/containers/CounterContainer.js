import React from 'react'
import PropTypes from 'prop-types'
import { Counter } from 'components'
import { createStructuredSelector, createSelector } from 'reselect'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CounterActions from 'actions/counter'

class CounterContainer extends React.Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
  }

  increment = () => {
    this.props.increment()
  }

  decrement = () => {
    this.props.decrement()
  }

  render() {
    return (
      <Counter
        increment={this.increment}
        decrement={this.decrement}
      />
    )
  }
}

const mapStateToProps = createStructuredSelector({
  counter: createSelector(
    (state) => state.counter,
    (counterState) => counterState
  ),
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)
