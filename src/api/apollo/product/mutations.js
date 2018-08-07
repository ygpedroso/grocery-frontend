import gql from 'graphql-tag';
import client from '../client';

export function createProduct(name) {
    return client.mutate({
        variables: { name },
        mutation: gql`
            mutation CreateProduct($name: String!) {
                createProduct(name: $name) {
                    product {
                        id
                        name
                    }
                    success
                    errors
                }
            }
        `,
    });
}

export function removeProduct(productId) {
    return client.mutate({
        variables: { productId },
        mutation: gql`
            mutation RemoveProduct($productId: ID!) {
                removeProduct(productId: $productId) {
                    product {
                        id
                        name
                    }
                    success
                    errors
                }
            }
        `,
    });
}

export function updateProduct(productId, name) {
    return client.mutate({
        variables: { productId, name },
        mutation: gql`
            mutation UpdateProduct($productId: ID!, $name: String!) {
                updateProduct(productId: $productId, name: $name) {
                    product {
                        id
                        name
                    }
                    success
                    errors
                }
            }
        `,
    });
}
