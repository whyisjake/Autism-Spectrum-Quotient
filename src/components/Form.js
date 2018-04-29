import React from "react";
import propTypes from "prop-types";
import { reduxForm, getFormValues } from "redux-form";
import { connect } from "react-redux";
import _ from "lodash";
import TableHeader from "./TableHeader";
import Rows from "./Rows";

/* eslint-disable import/no-mutable-exports */
let AQTestForm = props => {
  const { handleSubmit, count } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h1>{count.length}</h1>
      <table>
        <TableHeader />
        <Rows />
      </table>
    </form>
  );
};
AQTestForm.propTypes = {
  handleSubmit: propTypes.func.isRequired,
  count: propTypes.array.isRequired // eslint-disable-line react/forbid-prop-types
};

AQTestForm = reduxForm({
  form: "AQTest"
})(AQTestForm);

AQTestForm = connect(state => {
  const count = _.filter(
    getFormValues("AQTest")(state),
    val => val.indexOf("COUNT_ME") > 0
  );
  return {
    count
  };
})(AQTestForm);

export default AQTestForm;
