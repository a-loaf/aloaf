import { ApolloServer, gql } from 'apollo-server-micro'

import { AuthModule } from '../modules/auth'

const server = new ApolloServer({
  modules: [AuthModule]
})

export const config = {
  api: {
    bodyParser: false
  }
}

export default server.createHandler({ path: '/api' })
