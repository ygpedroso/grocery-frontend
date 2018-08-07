import ProductTypes from './../../actions/products/types';

const INITIAL_STATE = {
    products: [],
};

export default function productsReducer(state = INITIAL_STATE, action = {}) {
    switch (action.type) {
        case ProductTypes.GET_PRODUCTS:
            return { ...state, products: action.products };
        case ProductTypes.CREATE_PRODUCT:
            const newProducts = Object.assign([], state.products);
            newProducts.push(action.product);
            return { ...state, products: newProducts };
        case ProductTypes.REMOVE_PRODUCT:
            const filteredProducts = state.products.filter(
                product => product.id !== action.productId
            );
            return { ...state, products: filteredProducts };
        case ProductTypes.UPDATE_PRODUCT:
            state.products.forEach(product => {
                if (product.id === action.product.id) {
                    product.name = action.product.name;
                }
            });
            return { ...state };
        default:
            return state;
    }
}
