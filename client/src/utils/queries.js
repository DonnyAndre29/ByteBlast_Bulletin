import { gql } from '@apollo/client';


export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      name
      posts
    }
  }
`;


export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      posts 
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      posts
    }
  }
`;


export const QUERY_POSTS = gql`
  query getPosts {
    posts {
      _id
      postContent
      postAuthor
      dateAt
    }
  }
`;

export const QUERY_SINGLE_POST = gql`
  query getSinglePost($postId: ID!) {
    post(postId: $postId) {
      _id
      postContent
      postAuthor
      dateAt
      comments {
        _id
        commentText
        date
      }
    }
  }
`;
