import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Product.css';
import { removeProductAction } from '../../redux/actions/products';

class Product extends Component {
    removeProduct = () => {
        this.props.removeProductAction(this.props.productId);
    };

    render() {
        return <li onClick={this.removeProduct}>{this.props.name}</li>;
    }
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    productId: PropTypes.string.isRequired,
    removeProductAction: PropTypes.func.isRequired,
};

const dispatchedActions = {
    removeProductAction,
};

export default connect(
    null,
    dispatchedActions
)(Product);
