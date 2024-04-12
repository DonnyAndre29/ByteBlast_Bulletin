// resolvers
const {User, Post} = require('../models'); 

const blogResolvers = {
   // Important for useQuery: The resolver matches the typeDefs entry point and informs the request of the relevant data
   Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },

    posts: async () => {
      return Post.find();
    },

    post: async (parent, { post }) => {
      return Post.findOne({ post });
    },

  },
  
  Mutation: {
    addUser: async (parent, { name }) => {
      return User.create({ name });
    },
    addPost: async (parent, { userId, post }) => {
      return Profile.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: { posts: post },
        },
        {
          new: true,
          runValidators: true,
        }
      );
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

      const token = signToken(User);
      return { token, User };
    },

    removeUser: async (parent, { profileId }) => {
      return User.findOneAndDelete({ _id: userId });
    },
    removePost: async (parent, { profileId, skill }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { $pull: { posts: post } },
        { new: true }
      );
    },
  },

};

module.exports = blogResolvers;
