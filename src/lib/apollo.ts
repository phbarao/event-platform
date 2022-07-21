import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl5u33lev36ou01um46ld4aht/master',
  cache: new InMemoryCache(),
});
