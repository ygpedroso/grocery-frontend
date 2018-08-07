import ProductsReducer from './';
import ProductsTypes from './../../actions/products/types';

describe('Suite of Tests for the Products Reducer', () => {
    test('Should return the initial state', () => {
        expect(ProductsReducer(undefined, undefined)).toEqual({ products: [] });
    });

    test('Should handle GET_PRODUCTS action type', () => {
        const previousState = { products: [] };
        const products = [
            {
                id: 1,
                name: 'Buy eggs',
            },
            {
                id: 2,
                name: 'Buy tomatoes',
            },
        ];
        const action = {
            type: ProductsTypes.GET_PRODUCTS,
            products,
        };
        expect(ProductsReducer(previousState, action)).toEqual({
            products,
        });
    });

    test('Should handle CREATE_PRODUCT action type', () => {
        const previousState = { products: [] };
        const product = {
            id: 1,
            name: 'Buy milk',
        };
        const action = {
            type: ProductsTypes.CREATE_PRODUCT,
            product,
        };
        expect(ProductsReducer(previousState, action)).toEqual({
            products: [
                {
                    id: 1,
                    name: 'Buy milk',
                },
            ],
        });
    });

    test('Should handle REMOVE_PRODUCT action type', () => {
        const previousState = {
            products: [
                {
                    id: 1,
                    name: 'Buy milk',
                },
            ],
        };
        const action = {
            type: ProductsTypes.REMOVE_PRODUCT,
            productId: 1,
        };
        expect(ProductsReducer(previousState, action)).toEqual({
            products: [],
        });
    });

    test('Should handle UPDATE_PRODUCT action type', () => {
        const previousState = {
            products: [
                {
                    id: 1,
                    name: 'Buy milk',
                },
            ],
        };
        const action = {
            type: ProductsTypes.UPDATE_PRODUCT,
            product: {
                id: 1,
                name: 'Buy butter',
            },
        };
        expect(ProductsReducer(previousState, action)).toEqual({
            products: [
                {
                    id: 1,
                    name: 'Buy butter',
                },
            ],
        });
    });
});
