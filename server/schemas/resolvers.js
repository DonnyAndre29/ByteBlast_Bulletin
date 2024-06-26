// resolvers
const { User, Post } = require('../models');
const { signToken, AuthenticationError, signupResolver } = require('../utils/auth');

const blogResolvers = {
  // Important for useQuery: The resolver matches the typeDefs entry point and informs the request of the relevant data
  Query: {
    users: async () => {
      return User.find().populate('posts');
    },

    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('posts');
    },

    posts: async () => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ dateAt: -1 });
    },

    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
    },

  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };

    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      

      if (!user) {
        throw AuthenticationError
      }

      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw AuthenticationError
      }

      const token = signToken(user);
      return { token, user };
    },
   

    addPost: async (parent, { content, author }) => {
      const post = await Post.create({ postContent, postAuthor });

      await User.findOneAndUpdate(
        { username: postAuthor },
        { $addToSet: { posts: post._id } }
      );

      return post;

    },   

    addComment: async (parent, { postId, commentContent, commentAuthor }) => {
      return Post.findOneAndUpdate(
        { _id: postId },
        {
          $addToSet: { comments: { commentContent, commentAuthor } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },



    removePost: async (parent, { postId }) => {
      return Post.findOneAndDelete({ _id: postId });
    },

    removeComment: async (parent, { postId, commentId }) => {
      return Post.findOneAndUpdate(
        { _id: postId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },


  },

}


module.exports = blogResolvers;
