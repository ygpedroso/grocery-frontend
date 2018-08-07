import gql from 'graphql-tag';
import client from '../client';

export function getProducts() {
    return client.query({
        query: gql`
            {
                products {
                    id
                    name
                }
            }
        `,
    });
}
