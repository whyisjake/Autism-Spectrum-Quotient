import React from "react";
import { Form } from "components";

import { createStructuredSelector, createSelector } from "reselect";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as CounterActions from "actions/counter";

const AQTest = () => (
  <div>
    <Form />
  </div>
)

const mapStateToProps = createStructuredSelector({
  counter: createSelector(state => state.counter, counterState => counterState)
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AQTest);
