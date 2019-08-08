import { GraphQLModule } from '@graphql-modules/core'

import typeDefs from './typeDefs'
import resolvers from './resolvers'

export const AuthModule = new GraphQLModule({
  typeDefs,
  resolvers
})
