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

export const QUERY_YOU = gql`
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
      content
      author
      date
    }
  }
`;
