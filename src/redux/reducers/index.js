import { combineReducers } from 'redux';
import config from './config';
import products from './products';

const rootReducer = combineReducers({
    config,
    products,
});

export default rootReducer;
