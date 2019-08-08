export default {
  Query: {
    me: () => {
      return {
        _id: 'HKJBHG8767',
        username: 'boi@boi.com'
      }
    }
  },
  User: {
    id: user => user._id,
    username: user => user.username
  }
}
