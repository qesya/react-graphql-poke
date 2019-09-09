import ApolloClient from './ApolloClient'
import gql from 'graphql-tag';

export default {
  getPokemonIds: (current) => ApolloClient.query({query: gql`
          {
            pokemon(id: "${current}") {
                id
                number
                name
                maxCP
                maxHP
                image
                types
                evolutions {
                  id
                  number
                  name
                  maxCP
                  maxHP
                  image
                  types
                }
              }
          }
    `})
}
