import ProductTypes from './types';
import { getProducts } from './../../../api/apollo/product/queries';
import {
    createProduct,
    removeProduct,
    updateProduct,
} from './../../../api/apollo/product/mutations';

export default class {
    static getProducts = () => dispatch => {
        getProducts().then(data => {
            dispatch({
                type: ProductTypes.GET_PRODUCTS,
                products: data.products,
            });
        });
    };

    static createProduct = name => dispatch => {
        createProduct(name).then(data => {
            dispatch({
                type: ProductTypes.CREATE_PRODUCT,
                product: data.createProduct.product,
            });
        });
    };

    static removeProduct = productId => dispatch => {
        removeProduct(productId).then(() => {
            dispatch({
                type: ProductTypes.REMOVE_PRODUCT,
                productId,
            });
        });
    };

    static updateProduct = (productId, name) => dispatch => {
        updateProduct(productId, name).then(data => {
            dispatch({
                type: ProductTypes.UPDATE_PRODUCT,
                product: data.updateProduct.product,
            });
        });
    };
}
