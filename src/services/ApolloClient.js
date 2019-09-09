import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({
    uri: 'https://pokemon-samdavies.stylindex.now.sh'
  }),
})
