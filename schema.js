const { gql } = require('apollo-server');

const typeDefs = gql`
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

# This "Book" type defines the queryable fields for every book in our data source.
type ticket{
    id: ID!
    feedback: String!
    category: Category!
    year: Int!
    quarter: Int!
    SubTheme: String!
}

enum Category{
    name
}

enum Theme{
    name
}

type SubTheme{
    name: String!
    Theme: Theme!
}


type Book {
    id: ID!
    title: String
    author: String
}

# The "Query" type is special: it lists all of the available queries that
# clients can execute, along with the return type for each. In this
# case, the "books" query returns an array of zero or more Books (defined above).
type Query {
    books: [Book]
    book(id: ID!): Book
    ticket: [ticket]
}
`;

module.exports = typeDefs;