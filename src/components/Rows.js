import React from 'react';
import Row from './Row';
import { items } from '../constants/questions.js';

const Rows = () => (

  <tbody>
    {
      items.map((object, i) => <Row question={object.question} key={i.toString()} index={i} />)
    }
  </tbody>
)

export default Rows
