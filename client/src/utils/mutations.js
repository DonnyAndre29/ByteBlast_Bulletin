import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($userId: ID!, $post: String!) {
    addPost(userId: $userId, post: $post) {
      _id
      username
      posts   
    }
  }
`;


export const REMOVE_POST = gql`
  mutation removePost($post: String!) {
    removePost(post: $post) {
      _id
      name
      posts
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment(
    $postId: ID!
    $commentText: String!
    $commentAuthor: String!
  ) {
    addComment(
      postId: $postId
      commentText: $commentText
      commentAuthor: $commentAuthor
    ) {
      _id
      postText
      postAuthor
      date
      comments {
        _id
        commentText
        date
      }
    }
  }
`;


