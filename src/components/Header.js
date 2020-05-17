import React from 'react';
import { connect } from 'react-redux';

const Header = props => {
  return (
    <header>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Base Amount: <strong>${props.car.price}</strong></p>
      <p>Amount with added Features: <strong>${props.car.price + props.additionalPrice}</strong></p>
    </header>
  )
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalPrice: state.additionalPrice
  }
};

export default connect(mapStateToProps, {})(Header); // Connected Header to the store