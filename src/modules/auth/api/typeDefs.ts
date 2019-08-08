import { gql } from 'apollo-server-core'

export default gql`
  type Query {
    """
    Returns the currently logged in used
    """
    me: User
  }

  type User {
    """
    User's email
    """
    email: String!

    """
    Id of the user
    """
    id: ID!
  }
`
