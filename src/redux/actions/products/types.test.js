import ProductTypes from './types';

describe('Suite of Tests for the product Actions', () => {
    test('Ensure that every product type have been tested', () => {
        expect(Object.keys(ProductTypes).length).toBe(4);
    });

    test('Check that GET_PRODUCTS key has correct value', () => {
        expect(ProductTypes.GET_PRODUCTS).toBe('GET_PRODUCTS');
    });

    test('Check that CREATE_PRODUCT key has correct value', () => {
        expect(ProductTypes.CREATE_PRODUCT).toBe('CREATE_PRODUCT');
    });

    test('Check that REMOVE_PRODUCT key has correct value', () => {
        expect(ProductTypes.REMOVE_PRODUCT).toBe('REMOVE_PRODUCT');
    });

    test('Check that UPDATE_PRODUCT key has correct value', () => {
        expect(ProductTypes.UPDATE_PRODUCT).toBe('UPDATE_PRODUCT');
    });
});
