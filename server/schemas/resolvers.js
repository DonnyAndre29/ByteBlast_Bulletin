// resolvers
const {User, Post} = require('../models'); 

const blogResolvers = {
  Query: {
    getallPosts: async () => {
      try {
        const post = await Post.find();
        return post;
      } catch (error) {
        throw new Error('Error fetching blogs: ' + error.message);
      }
    },
    getallUsers: async () => {
      try {
        const user = await User.find();
        return user;
      } catch (error) {
        throw new Error('Error fetching users: ' + error.message);
      }
    },
    
  },
};

module.exports = blogResolvers;
