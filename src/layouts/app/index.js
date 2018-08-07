import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ProductComponent from './../../components/product';
import './App.css';

class App extends Component {
    render() {
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
                                />
                            </Col>
                            <Col xs={12} sm={2}>
                                <button>Add</button>
                            </Col>
                        </Row>
                    </Grid>
                    <ul className="products-list">
                        <ProductComponent name="Buy Milk" />
                        <ProductComponent name="Buy eggs" />
                        <ProductComponent name="Pick up soda" />
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;
