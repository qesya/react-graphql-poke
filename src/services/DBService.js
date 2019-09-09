import ApolloClient from './ApolloClient'
import gql from 'graphql-tag';

export default {
  getPokemons: (current) => ApolloClient.query({query: gql`
          {
              pokemons(first: ${current}) {
                  id
                  number
                  name
                  maxCP
                  maxHP
                  image
                  types
              }
          }
    `})
}

