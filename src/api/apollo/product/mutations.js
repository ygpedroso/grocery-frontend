import gql from 'graphql-tag';
import client from '../client';

export function createProduct(name) {
    return client.query({
        mutation: gql`
            {
                createProduct(name: ${name}) {
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

export function removeProduct(id) {
    return client.query({
        mutation: gql`
            {
                removeProduct(productId: ${id}) {
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

export function updateProduct(id, name) {
    return client.query({
        mutation: gql`
            {
                updateProduct(productId: ${id}, name: ${name}) {
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
