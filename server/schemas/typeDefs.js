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
    postContent: String
    postAuthor: String
    dateAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentContent: String
    commentAuthor: String
    dateAt: String
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
    removePost(postId: ID!): Post
    removeComment(postId: ID!, commentId: ID!): Post
  }


 
`;

module.exports = typeDefs;
