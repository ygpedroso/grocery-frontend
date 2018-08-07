import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col, Grid, Row } from 'react-bootstrap';
import { createProductAction, getProductsAction } from './../../redux/actions/products';
import ProductComponent from './../../components/product';
import './App.css';

class App extends Component {
    state = {
        newProductName: '',
    };

    componentDidMount() {
        this.props.getProductsAction();
    }

    onNewProductNameChange = e => {
        const newProductName = e.target.value;
        this.setState({
            newProductName,
        });
    };

    createProduct = () => {
        this.props.createProductAction(this.state.newProductName);
    };

    render() {
        const { newProductName } = this.state;
        return (
            <div className="App">
                <div className="products-list-header">
                    <h2>Grocery List</h2>
                </div>
                <div className="container products-list-container">
                    <Grid componentClass="products-list-form">
                        <Row className="show-grid">
                            <Col xs={12} sm={10}>
                                <input
                                    type="text"
                                    name="item"
                                    placeholder="Add new product..."
                                    required
                                    value={newProductName}
                                    onChange={this.onNewProductNameChange}
                                />
                            </Col>
                            <Col xs={12} sm={2}>
                                <button
                                    onClick={this.createProduct}
                                    disabled={newProductName.trim().length === 0}>
                                    Add
                                </button>
                            </Col>
                        </Row>
                    </Grid>
                    <ul className="products-list">
                        {this.props.products.map(product => (
                            <ProductComponent
                                productId={product.id}
                                name={product.name}
                                key={product.id}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    products: PropTypes.any.isRequired,
    getProductsAction: PropTypes.func.isRequired,
    createProductAction: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        products: state.products.products,
    };
}

const dispatchedActions = {
    getProductsAction,
    createProductAction,
};

export default connect(
    mapStateToProps,
    dispatchedActions
)(App);
