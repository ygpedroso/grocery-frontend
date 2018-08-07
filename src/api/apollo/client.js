import ApolloClient from 'apollo-boost';
import fetch from 'unfetch';

let graphqlEndpoint = 'http://localhost:8000/api/';

if (process.env.NODE_ENV === 'production') {
    graphqlEndpoint = process.env.GROCERY_API;
}

const client = new ApolloClient({
    uri: graphqlEndpoint,
    fetch,
});

export default client;
