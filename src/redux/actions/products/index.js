import ProductTypes from './types';

export default class {
    static getProducts = () => dispatch => {
        dispatch({
            type: ProductTypes.GET_PRODUCTS,
        });
    };

    static createProduct = name => dispatch => {
        dispatch({
            type: ProductTypes.CREATE_PRODUCT,
            name,
        });
    };

    static removeProduct = productId => dispatch => {
        dispatch({
            type: ProductTypes.REMOVE_PRODUCT,
            productId,
        });
    };

    static updateProduct = (productId, name) => dispatch => {
        dispatch({
            type: ProductTypes.UPDATE_PRODUCT,
            productId,
            name,
        });
    };
}
