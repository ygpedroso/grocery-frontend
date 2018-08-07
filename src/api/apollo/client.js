import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'http://localhots:8000/api/',
});

export default client;
