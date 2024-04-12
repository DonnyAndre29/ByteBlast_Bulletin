const express = require("express")
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
require('dotenv').config();

const secret = process.env.SECRET;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});


const app = express();

const PORT = process.env.PORT || 3000

const startApolloServer = async () => {
  await server.start();


  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use('/graphql', expressMiddleware(server));




  app.listen(PORT, (req, res) => {
    console.log(`app is listening to PORT ${PORT}`)
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  })
}

startApolloServer();