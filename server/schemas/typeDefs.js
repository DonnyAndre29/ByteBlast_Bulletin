// typeDefs
const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    post: [Post]!
  }

  type Post {
    _id: ID
    title: String
    content: String
    author: String
    date: String
  }

  type Comment {
    _id: ID
    commentContent: String
    commentAuthor: String
    date: String
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
    addComment(
      postId: ID!
      commentContent: String!
      commentAuthor: String!
    ): Post
    removePost(thoughtId: ID!): Post
    removeComment(postId: ID!, commentId: ID!): Post
  }


 
`;

module.exports = typeDefs;
