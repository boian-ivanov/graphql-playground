const { ApolloServer, gql } = require('apollo-server')

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const books = [
  {
    id: 1,
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    id: 2,
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
]

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    books
  })
})

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})