import ProductTypes from './types';
import { getProducts } from './../../../api/apollo/product/queries';
import {
    createProduct,
    removeProduct,
    updateProduct,
} from './../../../api/apollo/product/mutations';

export const getProductsAction = () => dispatch => {
    getProducts().then(response => {
        dispatch({
            type: ProductTypes.GET_PRODUCTS,
            products: response.data.products,
        });
    });
};

export const createProductAction = name => dispatch => {
    createProduct(name).then(response => {
        dispatch({
            type: ProductTypes.CREATE_PRODUCT,
            product: response.data.createProduct.product,
        });
    });
};

export const removeProductAction = productId => dispatch => {
    removeProduct(productId).then(() => {
        dispatch({
            type: ProductTypes.REMOVE_PRODUCT,
            productId,
        });
    });
};

export const updateProductAction = (productId, name) => dispatch => {
    updateProduct(productId, name).then(response => {
        dispatch({
            type: ProductTypes.UPDATE_PRODUCT,
            product: response.data.updateProduct.product,
        });
    });
};
