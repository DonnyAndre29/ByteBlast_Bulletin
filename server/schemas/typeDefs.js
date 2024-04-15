// typeDefs
const typeDefs = `
  type User {
    _id: ID
    name: String
    email: String
    password: String
    post: [Post]!
  }

  type Post {
    _id: ID
    title: String
    content: String
    author: String
    date: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    posts(username: String!): [Post]
    post(postId: ID!): Post   
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(content: String!, author: String!): Post
    removePost(thoughtId: ID!): Post
   
  }


 
`;

module.exports = typeDefs;
