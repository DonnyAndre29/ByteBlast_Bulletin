// typeDefs
const typeDefs = `
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Post {
    _id: ID!
    title: String!
    content: String!
    author: String!
    date: Int!
  }

  type Query {
   
  }

  type Mutation {
   
  }
`;

module.exports = typeDefs;
