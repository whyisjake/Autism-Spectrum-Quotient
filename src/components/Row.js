import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { Field } from "redux-form";

import { agree, disagree } from "../constants/questions";

function Agreeble(number) {
  return _.includes(agree, number);
}

function Disagreeble(number) {
  return _.includes(disagree, number);
}

const Row = props => {
  const number = props.index + 1;

  return (
    <tr>
      <td valign="top" align="right">
        {number}
      </td>
      <td align="left" valign="top">
        {props.question}
      </td>
      <td align="left" valign="top">
        <Field
          // name={Agreeble(number) ? `AQ[${number}]` : `NAQ[${number}]`}
          name={`question-${number}`}
          component="input"
          type="radio"
          value={Agreeble(number) ? "DA_AQ_COUNT_ME" : "DA_NAQ"}
        />
      </td>
      <td align="left" valign="top">
        <Field
          // name={Agreeble(number) ? `AQ[${number}]` : `NAQ[${number}]`}
          name={`question-${number}`}
          component="input"
          type="radio"
          value={Agreeble(number) ? "SA_AQ_COUNT_ME" : "SA_NAQ"}
        />
      </td>
      <td align="left" valign="top">
        <Field
          // name={Disagreeble(number) ? `AQ[${number}]` : `NAQ[${number}]`}
          name={`question-${number}`}
          component="input"
          type="radio"
          value={Disagreeble(number) ? "SD_AQ_COUNT_ME" : "SD_NAQ"}
        />
      </td>
      <td align="left" valign="top">
        <Field
          // name={Disagreeble(number) ? `AQ[${number}]` : `NAQ[${number}]`}
          name={`question-${number}`}
          component="input"
          type="radio"
          value={Disagreeble(number) ? "DD_AQ_COUNT_ME" : "DD_NAQ"}
        />
      </td>
    </tr>
  );
};

Row.propTypes = {
  index: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired
};

export default Row;
