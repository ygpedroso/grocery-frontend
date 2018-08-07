import React from 'react';
import PropTypes from 'prop-types';
import './Product.css';

const Product = props => <li>{props.name}</li>;

Product.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Product;
