// typeDefs
const typeDefs = `
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
    post: [Post]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Post {
    _id: ID!
    title: String!
    content: String!
    author: String!
    date: Int!
  }

  type Query {
    posts: Post
    users: User
   
  }

 
`;

module.exports = typeDefs;
