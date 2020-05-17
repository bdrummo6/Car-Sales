import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions/actions'; // import the removeFeature action

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.removeFeature(props.feature)}>X</button>
      {props.feature.name} (-${props.feature.price})
    </li>
  )
};


export default connect(null, { removeFeature })(AddedFeature); // Connected AddedFeature to the store