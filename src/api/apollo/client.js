import ApolloClient from 'apollo-boost';
import fetch from 'unfetch';

let graphqlEndpoint = process.env.REACT_APP_API_URL;

const client = new ApolloClient({
    uri: graphqlEndpoint,
    fetch,
});

export default client;
