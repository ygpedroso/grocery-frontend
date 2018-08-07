import ApolloClient from 'apollo-boost';
import fetch from 'unfetch';

let graphqlEndpoint = 'http://localhost:8000/api/';

if (process.env.NODE_ENV === 'production') {
    graphqlEndpoint = 'https://rideco-grocery.herokuapp.com/api/';
}

const client = new ApolloClient({
    uri: graphqlEndpoint,
    fetch,
});

export default client;
