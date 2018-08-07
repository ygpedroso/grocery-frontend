import ApolloClient from 'apollo-boost';
import fetch from 'unfetch';

const client = new ApolloClient({
    uri: 'http://localhost:8000/api/',
    fetch,
});

export default client;
